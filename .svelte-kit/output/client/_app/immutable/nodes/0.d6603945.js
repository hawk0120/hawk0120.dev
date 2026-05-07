import{s as K,n as P,r as re,c as te,o as oe,d as ne,b as se}from"../chunks/scheduler.90206c9b.js";import{S as Z,i as J,g as x,s as L,h as w,j as C,x as V,f as g,c as H,k as v,y as $,a as R,z as A,A as M,B as G,q as ie,r as B,u as j,v as O,t as W,b as le,d as q,w as U,p as ce}from"../chunks/index.c8376b31.js";import{w as fe}from"../chunks/singletons.4b781ac8.js";import{p as he}from"../chunks/stores.38bbd16f.js";function ue(){const t=(typeof localStorage<"u"?localStorage.getItem("theme"):null)||"light",{subscribe:r,set:i,update:e}=fe(t);return{subscribe:r,set:s=>{typeof localStorage<"u"&&localStorage.setItem("theme",s),typeof document<"u"&&document.documentElement.setAttribute("data-theme",s),i(s)},toggle:()=>{e(s=>{const o=s==="light"?"dark":"light";return typeof localStorage<"u"&&localStorage.setItem("theme",o),typeof document<"u"&&document.documentElement.setAttribute("data-theme",o),o})}}}const ee=ue();function de(c){let t;return{c(){t=x("i"),this.h()},l(r){t=w(r,"I",{class:!0}),C(t).forEach(g),this.h()},h(){v(t,"class","fa-solid fa-fire")},m(r,i){R(r,t,i)},d(r){r&&g(t)}}}function me(c){let t;return{c(){t=x("i"),this.h()},l(r){t=w(r,"I",{class:!0}),C(t).forEach(g),this.h()},h(){v(t,"class","fa-solid fa-campground")},m(r,i){R(r,t,i)},d(r){r&&g(t)}}}function ve(c){let t,r,i,e='<img src="/favicon.webp" alt="Brady Hawkins" width="40" height="40" class="hero-photo svelte-92enzi"/>',s,o,l,d="home",p,u,y="writing",a,h,S="contact",F,b,N,Y;function D(n,f){return n[0]==="dark"?me:de}let I=D(c),k=I(c);return{c(){t=x("header"),r=x("div"),i=x("a"),i.innerHTML=e,s=L(),o=x("div"),l=x("a"),l.textContent=d,p=L(),u=x("a"),u.textContent=y,a=L(),h=x("a"),h.textContent=S,F=L(),b=x("button"),k.c(),this.h()},l(n){t=w(n,"HEADER",{class:!0});var f=C(t);r=w(f,"DIV",{class:!0});var _=C(r);i=w(_,"A",{href:!0,"data-svelte-h":!0}),V(i)!=="svelte-1nzinyc"&&(i.innerHTML=e),_.forEach(g),s=H(f),o=w(f,"DIV",{class:!0});var m=C(o);l=w(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),V(l)!=="svelte-1ta5ei0"&&(l.textContent=d),p=H(m),u=w(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),V(u)!=="svelte-e7dunv"&&(u.textContent=y),a=H(m),h=w(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),V(h)!=="svelte-kbthu9"&&(h.textContent=S),F=H(m),b=w(m,"BUTTON",{class:!0,"aria-label":!0});var T=C(b);k.l(T),T.forEach(g),m.forEach(g),f.forEach(g),this.h()},h(){v(i,"href","/"),v(r,"class","photo-container svelte-92enzi"),v(l,"href","/"),v(l,"class","svelte-92enzi"),$(l,"active",c[1].url.pathname==="/"),v(u,"href","/blog"),v(u,"class","svelte-92enzi"),$(u,"active",c[1].url.pathname.startsWith("/blog")),v(h,"href","/contact"),v(h,"class","svelte-92enzi"),$(h,"active",c[1].url.pathname.startsWith("/contact")),v(b,"class","icon-btn svelte-92enzi"),v(b,"aria-label","Toggle dark mode"),v(o,"class","header-right svelte-92enzi"),v(t,"class","header svelte-92enzi")},m(n,f){R(n,t,f),A(t,r),A(r,i),A(t,s),A(t,o),A(o,l),A(o,p),A(o,u),A(o,a),A(o,h),A(o,F),A(o,b),k.m(b,null),N||(Y=[M(i,"click",G(c[5])),M(l,"click",G(c[6])),M(u,"click",G(c[7])),M(h,"click",G(c[8])),M(b,"click",c[3])],N=!0)},p(n,[f]){f&2&&$(l,"active",n[1].url.pathname==="/"),f&2&&$(u,"active",n[1].url.pathname.startsWith("/blog")),f&2&&$(h,"active",n[1].url.pathname.startsWith("/contact")),I!==(I=D(n))&&(k.d(1),k=I(n),k&&(k.c(),k.m(b,null)))},i:P,o:P,d(n){n&&g(t),k.d(),N=!1,re(Y)}}}function ge(c,t,r){let i,e;te(c,ee,a=>r(0,i=a)),te(c,he,a=>r(1,e=a));let{navigate:s}=t;function o(a){s&&s(a)}function l(){const a=i==="light"?"dark":"light";ee.set(a),document.documentElement.setAttribute("data-theme",a)}const d=()=>o("home"),p=()=>o("home"),u=()=>o("blog"),y=()=>o("contact");return c.$$set=a=>{"navigate"in a&&r(4,s=a.navigate)},[i,e,o,l,s,d,p,u,y]}class pe extends Z{constructor(t){super(),J(this,t,ge,ve,K,{navigate:4})}}function ye(c){let t,r='<div class="icon-container svelte-1yboqac"><a href="https://www.linkedin.com/in/brady-hawkins" class="svelte-1yboqac"><i class="fab fa-linkedin fa-2x"></i></a> <a href="https://github.com/hawk0120" class="svelte-1yboqac"><i class="fab fa-github fa-2x"></i></a> <a href="https://bsky.app/profile/bradyhawkins.dev" class="svelte-1yboqac"><i class="fab fa-bluesky fa-2x"></i></a></div> <a href="https://www.websitecarbon.com/website/bradyhawkins-dev/" target="_blank" rel="noopener" class="svelte-1yboqac"><p>Website Carbon Rating</p></a>';return{c(){t=x("footer"),t.innerHTML=r,this.h()},l(i){t=w(i,"FOOTER",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-v66gbp"&&(t.innerHTML=r),this.h()},h(){v(t,"class","svelte-1yboqac")},m(i,e){R(i,t,e)},p:P,i:P,o:P,d(i){i&&g(t)}}}class _e extends Z{constructor(t){super(),J(this,t,null,ye,K,{})}}function xe(c){let t,r,i;return{c(){t=x("canvas"),this.h()},l(e){t=w(e,"CANVAS",{class:!0}),C(t).forEach(g),this.h()},h(){v(t,"class","svelte-1akhj9p")},m(e,s){R(e,t,s),c[2](t),r||(i=M(t,"click",c[1]),r=!0)},p:P,i:P,o:P,d(e){e&&g(t),c[2](null),r=!1,i()}}}const ae=10;function we(c,t,r){let i,e,s=0,o=0,l,d=0,p=0,u=0,y=[];oe(()=>{h(),o=performance.now(),D(),new MutationObserver(()=>{p=document.documentElement.getAttribute("data-theme")==="dark"?1:0}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}),ne(()=>{s&&cancelAnimationFrame(s)});function a(n){const f=i.getBoundingClientRect(),_=(n.clientX-f.left)/f.width,m=(n.clientY-f.top)/f.height,T=(performance.now()-o)/1e3,Q=_*40-20,E=10+m*20;y=[...y,{x:Q,z:E,time:T,amplitude:.22}],y.length>ae&&(y=y.slice(1))}function h(){if(e=i.getContext("webgl"),!e){console.error("WebGL not supported");return}S(),window.addEventListener("resize",S),F(),N()}function S(){const n=Math.min(window.devicePixelRatio,1.5),f=.5;r(0,i.width=window.innerWidth*n*f,i),r(0,i.height=window.innerHeight*n*f,i),e.viewport(0,0,i.width,i.height)}function F(){const n=`
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `,f=`
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
    `,_=b(e.VERTEX_SHADER,n),m=b(e.FRAGMENT_SHADER,f);l=e.createProgram(),e.attachShader(l,_),e.attachShader(l,m),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS)||console.error("Program link error:",e.getProgramInfoLog(l))}function b(n,f){const _=e.createShader(n);return e.shaderSource(_,f),e.compileShader(_),e.getShaderParameter(_,e.COMPILE_STATUS)||console.error("Shader compile error:",e.getShaderInfoLog(_)),_}function N(){const n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const f=e.getAttribLocation(l,"position");e.enableVertexAttribArray(f),e.vertexAttribPointer(f,2,e.FLOAT,!1,0,0)}function Y(n){if(p=document.documentElement.getAttribute("data-theme")==="dark"?1:0,p!==d&&u===0&&(u=n),u!==0){const m=Math.min((n-u)/150,1),T=m*m*(3-2*m);d=d+(p-d)*T,m>=1&&(u=0,d=p)}}function D(){const n=(performance.now()-o)/1e3;Y(n),I(n),s=requestAnimationFrame(D)}function I(n){e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(l);const f=e.getUniformLocation(l,"iResolution"),_=e.getUniformLocation(l,"iTime"),m=e.getUniformLocation(l,"u_night"),T=e.getUniformLocation(l,"u_rippleCount"),Q=e.getUniformLocation(l,"u_ripples");e.uniform2f(f,i.width,i.height),e.uniform1f(_,n),e.uniform1f(m,d),e.uniform1i(T,y.length);const E=new Float32Array(ae*4);for(let z=0;z<y.length;z++){const X=y[z];E[z*4+0]=X.x,E[z*4+1]=X.z,E[z*4+2]=X.time,E[z*4+3]=X.amplitude}e.uniform4fv(Q,E),e.drawArrays(e.TRIANGLES,0,6)}function k(n){se[n?"unshift":"push"](()=>{i=n,r(0,i)})}return[i,a,k]}class be extends Z{constructor(t){super(),J(this,t,we,xe,K,{})}}function ke(c){let t,r,i,e,s,o,l,d,p;t=new be({}),i=new pe({});var u=c[0];function y(a,h){return{}}return u&&(o=ie(u,y())),d=new _e({}),{c(){B(t.$$.fragment),r=L(),B(i.$$.fragment),e=L(),s=x("main"),o&&B(o.$$.fragment),l=L(),B(d.$$.fragment),this.h()},l(a){j(t.$$.fragment,a),r=H(a),j(i.$$.fragment,a),e=H(a),s=w(a,"MAIN",{class:!0});var h=C(s);o&&j(o.$$.fragment,h),h.forEach(g),l=H(a),j(d.$$.fragment,a),this.h()},h(){v(s,"class","svelte-1jss9dc")},m(a,h){O(t,a,h),R(a,r,h),O(i,a,h),R(a,e,h),R(a,s,h),o&&O(o,s,null),R(a,l,h),O(d,a,h),p=!0},p(a,[h]){if(h&1&&u!==(u=a[0])){if(o){ce();const S=o;W(S.$$.fragment,1,0,()=>{U(S,1)}),le()}u?(o=ie(u,y()),B(o.$$.fragment),q(o.$$.fragment,1),O(o,s,null)):o=null}},i(a){p||(q(t.$$.fragment,a),q(i.$$.fragment,a),o&&q(o.$$.fragment,a),q(d.$$.fragment,a),p=!0)},o(a){W(t.$$.fragment,a),W(i.$$.fragment,a),o&&W(o.$$.fragment,a),W(d.$$.fragment,a),p=!1},d(a){a&&(g(r),g(e),g(s),g(l)),U(t,a),U(i,a),o&&U(o),U(d,a)}}}function Ae(c,t,r){let{children:i}=t;return oe(()=>{const e=localStorage.getItem("theme")||"light";if(document.documentElement.setAttribute("data-theme",e),ee.set(e),!document.querySelector('link[href*="font-awesome"]')){const s=document.createElement("link");s.rel="stylesheet",s.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",document.head.appendChild(s)}}),c.$$set=e=>{"children"in e&&r(0,i=e.children)},[i]}class Pe extends Z{constructor(t){super(),J(this,t,Ae,ke,K,{children:0})}}export{Pe as component};
