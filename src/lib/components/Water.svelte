<script>
  import { onMount, onDestroy } from 'svelte';
  import { theme } from '$lib/stores/theme';

  let canvas;
  let gl;
  let animationId = 0;
  let startTime = 0;
  let program;
  let nightBlend = 1.0;
  let targetNight = 1.0;
  let nightFadeStart = 0;
  let ripples = [];
  const MAX_RIPPLES = 10;
  let lastMouseRipple = 0;
  let lastMousePos = { x: 0, y: 0 };

  onMount(() => {
    initWebGL();
    startTime = performance.now();
    animate();
  });

  onDestroy(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });

  function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const time = (performance.now() - startTime) / 1000;
    const worldX = x * 40 - 20;
    const worldZ = 10 + y * 20;

    ripples = [...ripples, { x: worldX, z: worldZ, time, amplitude: 0.22 }];
    if (ripples.length > MAX_RIPPLES) {
      ripples = ripples.slice(1);
    }
  }

  function handleMouseMove(event) {
    const now = performance.now();
    if (now - lastMouseRipple < 80) return;

    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const dx = x - lastMousePos.x;
    const dy = y - lastMousePos.y;
    if (Math.abs(dx) < 0.005 && Math.abs(dy) < 0.005) return;

    lastMousePos = { x, y };
    lastMouseRipple = now;

    const time = (now - startTime) / 1000;
    const worldX = x * 40 - 20;
    const worldZ = 10 + y * 20;

    const speed = Math.sqrt(dx * dx + dy * dy);
    const amplitude = 0.06 + Math.min(speed * 0.3, 0.08);

    ripples = [...ripples, { x: worldX, z: worldZ, time, amplitude }];
    if (ripples.length > MAX_RIPPLES) {
      ripples = ripples.slice(1);
    }
  }

  function handleTouchStart(event) {
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    lastMousePos = {
      x: (touch.clientX - rect.left) / rect.width,
      y: (touch.clientY - rect.top) / rect.height
    };
  }

  function handleTouchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];
    handleMouseMove(touch);
  }

  function initWebGL() {
    gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }
    resize();
    window.addEventListener('resize', resize);
    createShaders();
    createBuffers();
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 1.5);
    const scale = 0.5;
    canvas.width = window.innerWidth * dpr * scale;
    canvas.height = window.innerHeight * dpr * scale;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function createShaders() {
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float u_night;
      uniform vec4 u_ripples[10];
      uniform int u_rippleCount;

      #define PI 3.14159265359
      #define DRAG_MULT 0.38
      #define WATER_DEPTH 1.0
      #define CAMERA_HEIGHT 1.5
      #define RAYMARCH_STEPS 24
      #define ITERATIONS_RAYMARCH 6
      #define ITERATIONS_NORMAL 16
      #define FBM_OCTAVES 3

      float hash21(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise21(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash21(i);
        float b = hash21(i + vec2(1.0, 0.0));
        float c = hash21(i + vec2(0.0, 1.0));
        float d = hash21(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        for (int i = 0; i < FBM_OCTAVES; i++) {
          value += amplitude * noise21(p * frequency);
          frequency *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      vec2 wavedx(vec2 position, vec2 direction, float frequency, float timeshift) {
        float x = dot(direction, position) * frequency + timeshift;
        float wave = exp(sin(x) - 1.0);
        float dx = wave * cos(x);
        return vec2(wave, -dx);
      }

      float getripples(vec2 position) {
        float rippleSum = 0.0;
        for (int i = 0; i < 10; i++) {
          if (i >= u_rippleCount) break;
          vec4 ripple = u_ripples[i];
          vec2 ripplePos = ripple.xy;
          float birthTime = ripple.z;
          float amplitude = ripple.w;
          float age = iTime - birthTime;
          if (age < 0.0 || age > 12.0) continue;
          float dist = length(position - ripplePos);
          float frequency = 4.0;
          float speed = 3.2;
          float decay = 0.45;
          float spatialDecay = 0.16;
          float phase = dist * frequency - age * speed;
          float envelope = exp(-decay * age) * exp(-dist * spatialDecay);
          float fadeIn = smoothstep(0.0, 0.3, age);
          rippleSum += amplitude * envelope * fadeIn * sin(phase);
        }
        return rippleSum;
      }

      float getwaves_base(vec2 position, int iterations) {
        float wavePhaseShift = length(position) * 0.1;
        vec2 swellDir = normalize(vec2(-0.25, 1.0));
        float swellBias = 0.35;
        float iter = 0.0;
        float frequency = 1.0;
        float timeMultiplier = 2.0;
        float weight = 1.0;
        float sumOfValues = 0.0;
        float sumOfWeights = 0.0;
        for(int i = 0; i < 16; i++) {
          if(i >= iterations) break;
          vec2 p = normalize(mix(vec2(sin(iter), cos(iter)), swellDir, swellBias));
          vec2 res = wavedx(position, p, frequency, iTime * timeMultiplier + wavePhaseShift);
          position += p * res.y * weight * DRAG_MULT;
          sumOfValues += res.x * weight;
          sumOfWeights += weight;
          weight = mix(weight, 0.0, 0.2);
          frequency *= 1.18;
          timeMultiplier *= 1.07;
          iter += 1232.399963;
        }
        float baseWaves = sumOfValues / sumOfWeights;
        float swellPhase = dot(position, swellDir) * 0.18 - iTime * 0.08;
        float swell = sin(swellPhase);
        vec2 cameraPos = vec2(iTime * 0.2, 1.0);
        float swellFade = smoothstep(28.0, 4.0, length(position - cameraPos));
        return baseWaves + swell * swellFade * 0.35;
      }

      float getwaves(vec2 position, int iterations) {
        return getwaves_base(position, iterations) + getripples(position);
      }

      float raymarchwater(vec3 camera, vec3 start, vec3 end, float depth) {
        vec3 pos = start;
        vec3 dir = normalize(end - start);
        for(int i = 0; i < RAYMARCH_STEPS; i++) {
          float height = getwaves(pos.xz, ITERATIONS_RAYMARCH) * depth - depth;
          if(height + 0.01 > pos.y) {
            return distance(pos, camera);
          }
          pos += dir * (pos.y - height);
        }
        return distance(start, camera);
      }

      vec3 normal(vec2 pos, float e, float depth) {
        vec2 ex = vec2(e, 0);
        float H = getwaves(pos.xy, ITERATIONS_NORMAL) * depth;
        vec3 a = vec3(pos.x, H, pos.y);
        return normalize(
          cross(
            a - vec3(pos.x - e, getwaves(pos.xy - ex.xy, ITERATIONS_NORMAL) * depth, pos.y),
            a - vec3(pos.x, getwaves(pos.xy + ex.yx, ITERATIONS_NORMAL) * depth, pos.y + e)
          )
        );
      }

      mat3 createRotationMatrixAxisAngle(vec3 axis, float angle) {
        float s = sin(angle);
        float c = cos(angle);
        float oc = 1.0 - c;
        return mat3(
          oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s,
          oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s,
          oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c
        );
      }

      vec3 getRay(vec2 fragCoord) {
        vec2 uv = ((fragCoord.xy / iResolution.xy) * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        vec3 proj = normalize(vec3(uv.x, uv.y, 1.5));
        return createRotationMatrixAxisAngle(vec3(0.0, -1.0, 0.0), 0.0)
          * createRotationMatrixAxisAngle(vec3(1.0, 0.0, 0.0), 0.14)
          * proj;
      }

      float intersectPlane(vec3 origin, vec3 direction, vec3 point, vec3 normal) {
        return clamp(dot(point - origin, normal) / dot(direction, normal), -1.0, 9991999.0);
      }

      vec3 extra_cheap_atmosphere(vec3 raydir, vec3 sundir) {
        float special_trick = 1.0 / (raydir.y * 1.0 + 0.1);
        float special_trick2 = 1.0 / (sundir.y * 11.0 + 1.0);
        float raysundt = pow(abs(dot(sundir, raydir)), 2.0);
        float sundt = pow(max(0.0, dot(sundir, raydir)), 8.0);
        float mymie = sundt * special_trick * 0.2;
        vec3 suncolor = mix(vec3(1.0), max(vec3(0.0), vec3(1.0) - vec3(5.5, 13.0, 22.4) / 22.4), special_trick2);
        vec3 bluesky = vec3(12.0, 12.0, 13.0) / 22.4 * suncolor;
        vec3 bluesky2 = max(vec3(0.0), bluesky - vec3(12.0, 12.0, 13.0) * 0.002 * (special_trick + -6.0 * sundir.y * sundir.y));
        bluesky2 *= special_trick * (0.24 + raysundt * 0.24);
        return bluesky2 * (1.0 + 1.0 * pow(1.0 - raydir.y, 3.0));
      }

      vec3 getSunDirection() {
        return normalize(vec3(-0.0773502691896258, 0.6, 0.5773502691896258));
      }

      vec3 getAtmosphere(vec3 dir) {
        return extra_cheap_atmosphere(dir, getSunDirection()) * 0.5;
      }

      vec2 skyUV(vec3 dir) {
        float u = atan(dir.z, dir.x) / (2.0 * PI) + 0.5;
        float v = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
        return vec2(u, v);
      }

      vec3 getDaySky(vec3 dir, float skyLight) {
        vec3 sky = getAtmosphere(dir) + vec3(1.0) * skyLight * 4.0;
        if (dir.y > 0.05) {
          vec2 cloudUV = vec2(atan(dir.z, dir.x) / (2.0 * PI) + 0.5, dir.y * 0.5 + 0.5);
          vec2 cloudPos = cloudUV * vec2(6.0, 2.5) + vec2(iTime * 0.015, 0.0);
          float cloud = fbm(cloudPos * 3.0);
          cloud = smoothstep(0.35, 0.65, cloud);
          float horizonFade = smoothstep(0.0, 0.4, dir.y);
          float dayFade = smoothstep(0.2, 0.8, 1.0 - u_night);
          vec3 cloudColor = vec3(1.0, 1.0, 1.0);
          sky = mix(sky, cloudColor, cloud * horizonFade * dayFade * 0.8);
        }
        return sky;
      }

      vec3 getNightSky(vec3 dir, float skyLight) {
        vec2 uv = skyUV(dir);
        vec3 topColor = vec3(0.008, 0.01, 0.02);
        vec3 bottomColor = vec3(0.015, 0.018, 0.025);
        vec3 color = mix(bottomColor, topColor, uv.y);
        if (uv.y > 0.25) {
          float gridX = 50.0;
          float gridY = 35.0;
          vec2 grid = vec2(gridX, gridY);
          vec2 baseCell = floor(vec2(uv.x * gridX, uv.y * gridY));
          float s = 0.0;
          float starThreshold = 0.85;
          for (int yi = -1; yi <= 1; yi++) {
            for (int xi = -1; xi <= 1; xi++) {
              vec2 cell = baseCell + vec2(float(xi), float(yi));
              if (cell.y < 0.0 || cell.y >= gridY) continue;
              cell.x = mod(cell.x + gridX, gridX);
              if (hash21(cell) > starThreshold) continue;
              vec2 starPos = vec2(hash21(cell + 0.1), hash21(cell + 0.2));
              vec2 starUv = (cell + starPos) / grid;
              vec2 deltaPx = (uv - starUv) * iResolution.xy;
              float sizePx = 0.3 + hash21(cell + 0.3) * 0.5;
              float d = length(deltaPx);
              float core = smoothstep(sizePx, sizePx * 0.2, d);
              float flickerPhase = hash21(cell + 0.4) * 6.28318;
              float flickerSpeed = 0.5 + hash21(cell + 0.5) * 1.5;
              float flickerAmount = mix(0.2, 0.6, hash21(cell + 0.7));
              float flicker = mix(1.0 - flickerAmount, 1.0 + flickerAmount, 0.5 + 0.5 * sin(iTime * flickerSpeed + flickerPhase));
              float lumens = mix(2.0, 15.0, hash21(cell + 0.6));
              float brightness = mix(0.8, 1.6, lumens / 15.0);
              s += core * flicker * brightness;
            }
          }
          float horizonFade = smoothstep(0.25, 0.6, uv.y);
          vec3 starColor = vec3(1.0, 0.97, 0.9);
          color += starColor * s * horizonFade * 2.5;
        }
        color += vec3(1.0) * skyLight * 0.5 * (1.0 - u_night);
        return color;
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec3 ray = getRay(fragCoord);
        float skyLight = 0.5;
        if (ray.y >= 0.0) {
          vec3 C;
          float horizonFactor = smoothstep(0.02, 0.25, ray.y);
          float nightBlend = pow(u_night, mix(0.35, 1.0, horizonFactor));
          vec3 daySky = getDaySky(ray, skyLight);
          vec3 nightSky = getNightSky(ray, skyLight);
          C = mix(daySky, nightSky, nightBlend);
          fragColor = vec4(C * 2.0, 1.0);
          return;
        }
        vec3 waterPlaneHigh = vec3(0.0, 0.0, 0.0);
        vec3 waterPlaneLow = vec3(0.0, -WATER_DEPTH, 0.0);
        vec3 origin = vec3(iTime * 0.2, CAMERA_HEIGHT, 1.0);
        float highPlaneHit = intersectPlane(origin, ray, waterPlaneHigh, vec3(0.0, 1.0, 0.0));
        float lowPlaneHit = intersectPlane(origin, ray, waterPlaneLow, vec3(0.0, 1.0, 0.0));
        vec3 highHitPos = origin + ray * highPlaneHit;
        vec3 lowHitPos = origin + ray * lowPlaneHit;
        float dist = raymarchwater(origin, highHitPos, lowHitPos, WATER_DEPTH);
        vec3 waterHitPos = origin + ray * dist;
        vec3 N = normal(waterHitPos.xz, 0.01, WATER_DEPTH);
        N = mix(N, vec3(0.0, 1.0, 0.0), 0.8 * min(1.0, sqrt(dist*0.01) * 1.1));
        float fresnel = (0.04 + (1.0-0.04)*(pow(1.0 - max(0.0, dot(-N, ray)), 5.0)));
        vec3 R = normalize(reflect(ray, N));
        R.y = abs(R.y);
        vec3 reflection;
        float reflectionHorizon = smoothstep(0.02, 0.25, R.y);
        float nightReflectionBlend = pow(u_night, mix(0.35, 1.0, reflectionHorizon));
        vec3 dayReflection = getDaySky(R, skyLight);
        vec3 nightReflection = getNightSky(R, skyLight);
        reflection = mix(dayReflection, nightReflection, nightReflectionBlend);
        vec3 scatteringBase = mix(vec3(0.08, 0.08, 0.09), vec3(0.02, 0.02, 0.03), u_night);
        vec3 scattering = scatteringBase * (0.2 + (waterHitPos.y + WATER_DEPTH) / WATER_DEPTH);
        vec3 C = fresnel * reflection + scattering;
        vec3 fogColor = mix(vec3(0.55, 0.55, 0.58), vec3(0.03, 0.035, 0.05), u_night);
        float fogAmount = 1.0 - exp(-dist * 0.02);
        C = mix(C, fogColor, fogAmount);
        float waveBrightness = mix(1.4, 1.9, u_night);
        fragColor = vec4(C * waveBrightness, 1.0);
      }

      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
    }
  }

  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    }
    return shader;
  }

  function createBuffers() {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  }

  $: targetNight = $theme === 'dark' ? 1.0 : 0.0;

  function updateNightBlend(time) {
    if (targetNight !== nightBlend && nightFadeStart === 0) {
      nightFadeStart = time;
    }

    if (nightFadeStart !== 0) {
      const duration = 150;
      const progress = Math.min((time - nightFadeStart) / duration, 1);
      const eased = progress * progress * (3.0 - 2.0 * progress);
      nightBlend = nightBlend + (targetNight - nightBlend) * eased;
      if (progress >= 1) {
        nightFadeStart = 0;
        nightBlend = targetNight;
      }
    }
  }

  function animate() {
    const time = (performance.now() - startTime) / 1000;
    updateNightBlend(time);
    render(time);
    animationId = requestAnimationFrame(animate);
  }

  function render(time) {
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);

    const resolutionLocation = gl.getUniformLocation(program, 'iResolution');
    const timeLocation = gl.getUniformLocation(program, 'iTime');
    const nightLocation = gl.getUniformLocation(program, 'u_night');
    const rippleCountLocation = gl.getUniformLocation(program, 'u_rippleCount');
    const ripplesLocation = gl.getUniformLocation(program, 'u_ripples');

    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(timeLocation, time);
    gl.uniform1f(nightLocation, nightBlend);
    gl.uniform1i(rippleCountLocation, ripples.length);

    const rippleData = new Float32Array(MAX_RIPPLES * 4);
    for (let i = 0; i < ripples.length; i++) {
      const r = ripples[i];
      rippleData[i * 4 + 0] = r.x;
      rippleData[i * 4 + 1] = r.z;
      rippleData[i * 4 + 2] = r.time;
      rippleData[i * 4 + 3] = r.amplitude;
    }
    gl.uniform4fv(ripplesLocation, rippleData);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
</script>

<canvas bind:this={canvas} on:click={handleClick} on:mousemove={handleMouseMove} on:touchstart={handleTouchStart} on:touchmove|nonpassive={handleTouchMove}></canvas>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: auto;
  }
</style>
