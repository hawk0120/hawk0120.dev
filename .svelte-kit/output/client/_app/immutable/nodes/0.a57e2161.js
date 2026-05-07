import{s as W,n as H,c as J,o as Q,d as oe,b as re,e as se,u as ne,g as le,f as ce}from"../chunks/scheduler.dd196d9e.js";import{S as V,i as U,g as y,s as C,h as _,j as S,x as B,c as E,f as m,k as h,y as P,a as z,z as g,A as ae,r as j,u as G,v as K,d as O,t as N,w as Z}from"../chunks/index.08a51704.js";import{w as fe}from"../chunks/singletons.1a660378.js";import{p as de}from"../chunks/stores.10f24618.js";import{_ as he}from"../chunks/preload-helper.a4192956.js";function ue(){const e=(typeof localStorage<"u"?localStorage.getItem("theme"):null)||"dark",{subscribe:i,set:o,update:a}=fe(e);return{subscribe:i,set:t=>{typeof localStorage<"u"&&localStorage.setItem("theme",t),typeof document<"u"&&document.documentElement.setAttribute("data-theme",t),o(t)},toggle:()=>{a(t=>{const r=t==="light"?"dark":"light";return typeof localStorage<"u"&&localStorage.setItem("theme",r),typeof document<"u"&&document.documentElement.setAttribute("data-theme",r),r})}}}const q=ue();function me(n){let e;return{c(){e=y("i"),this.h()},l(i){e=_(i,"I",{class:!0}),S(e).forEach(m),this.h()},h(){h(e,"class","fa-solid fa-fire")},m(i,o){z(i,e,o)},d(i){i&&m(e)}}}function ve(n){let e;return{c(){e=y("i"),this.h()},l(i){e=_(i,"I",{class:!0}),S(e).forEach(m),this.h()},h(){h(e,"class","fa-solid fa-campground")},m(i,o){z(i,e,o)},d(i){i&&m(e)}}}function pe(n){let e,i,o='<a href="/"><img src="/favicon.webp" alt="Brady Hawkins" width="40" height="40" class="hero-photo svelte-12x2163"/></a>',a,t,r,k="home",d,l,v="writing",f,s,p="contact",T,A,D,F;function Y(w,b){return w[0]==="dark"?ve:me}let M=Y(n),R=M(n);return{c(){e=y("header"),i=y("div"),i.innerHTML=o,a=C(),t=y("div"),r=y("a"),r.textContent=k,d=C(),l=y("a"),l.textContent=v,f=C(),s=y("a"),s.textContent=p,T=C(),A=y("button"),R.c(),this.h()},l(w){e=_(w,"HEADER",{class:!0});var b=S(e);i=_(b,"DIV",{class:!0,"data-svelte-h":!0}),B(i)!=="svelte-1wg5dvz"&&(i.innerHTML=o),a=E(b),t=_(b,"DIV",{class:!0});var c=S(t);r=_(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),B(r)!=="svelte-jzyh0p"&&(r.textContent=k),d=E(c),l=_(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),B(l)!=="svelte-iiqsb1"&&(l.textContent=v),f=E(c),s=_(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),B(s)!=="svelte-rzlz9j"&&(s.textContent=p),T=E(c),A=_(c,"BUTTON",{class:!0,"aria-label":!0});var u=S(A);R.l(u),u.forEach(m),c.forEach(m),b.forEach(m),this.h()},h(){h(i,"class","photo-container svelte-12x2163"),h(r,"href","/"),h(r,"class","svelte-12x2163"),P(r,"active",n[1].url.pathname==="/"),h(l,"href","/blog"),h(l,"class","svelte-12x2163"),P(l,"active",n[1].url.pathname.startsWith("/blog")),h(s,"href","/contact"),h(s,"class","svelte-12x2163"),P(s,"active",n[1].url.pathname.startsWith("/contact")),h(A,"class","icon-btn svelte-12x2163"),h(A,"aria-label","Toggle dark mode"),h(t,"class","header-right svelte-12x2163"),h(e,"class","header svelte-12x2163")},m(w,b){z(w,e,b),g(e,i),g(e,a),g(e,t),g(t,r),g(t,d),g(t,l),g(t,f),g(t,s),g(t,T),g(t,A),R.m(A,null),D||(F=ae(A,"click",n[2]),D=!0)},p(w,[b]){b&2&&P(r,"active",w[1].url.pathname==="/"),b&2&&P(l,"active",w[1].url.pathname.startsWith("/blog")),b&2&&P(s,"active",w[1].url.pathname.startsWith("/contact")),M!==(M=Y(w))&&(R.d(1),R=M(w),R&&(R.c(),R.m(A,null)))},i:H,o:H,d(w){w&&m(e),R.d(),D=!1,F()}}}function ge(n,e,i){let o,a;J(n,q,r=>i(0,o=r)),J(n,de,r=>i(1,a=r));function t(){const r=o==="light"?"dark":"light";q.set(r),document.documentElement.setAttribute("data-theme",r)}return[o,a,t]}class ye extends V{constructor(e){super(),U(this,e,ge,pe,W,{})}}function _e(n){let e;return{c(){e=y("div"),this.h()},l(i){e=_(i,"DIV",{id:!0,class:!0}),S(e).forEach(m),this.h()},h(){h(e,"id","wcb"),h(e,"class","carbonbadge"),P(e,"wcb-d",n[0])},m(i,o){z(i,e,o)},p(i,[o]){o&1&&P(e,"wcb-d",i[0])},i:H,o:H,d(i){i&&m(e)}}}function xe(n,e,i){let{dark:o=!1}=e;return Q(async()=>{await he(()=>import("../chunks/b.min.a5536f9c.js"),[],import.meta.url),o===void 0&&window.matchMedia&&(i(0,o=window.matchMedia("(prefers-color-scheme: dark)").matches),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>i(0,o=a.matches)))}),n.$$set=a=>{"dark"in a&&i(0,o=a.dark)},[o]}class we extends V{constructor(e){super(),U(this,e,xe,_e,W,{dark:0})}}function ke(n){let e,i,o,a,t,r,k='<a href="https://www.linkedin.com/in/brady-hawkins" class="svelte-1hqmfki"><i class="fab fa-linkedin fa-2x"></i></a> <a href="https://github.com/hawk0120" class="svelte-1hqmfki"><i class="fab fa-github fa-2x"></i></a> <a href="https://bsky.app/profile/bradyhawkins.dev" class="bluesky-link svelte-1hqmfki" aria-label="Bluesky"><svg viewBox="0 0 600 530" width="28" height="25" xmlns="http://www.w3.org/2000/svg"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="currentColor"></path></svg></a>',d;return a=new we({props:{dark:n[0]==="dark"}}),{c(){e=y("footer"),i=y("div"),o=y("div"),j(a.$$.fragment),t=C(),r=y("div"),r.innerHTML=k,this.h()},l(l){e=_(l,"FOOTER",{class:!0});var v=S(e);i=_(v,"DIV",{class:!0});var f=S(i);o=_(f,"DIV",{class:!0});var s=S(o);G(a.$$.fragment,s),s.forEach(m),t=E(f),r=_(f,"DIV",{class:!0,"data-svelte-h":!0}),B(r)!=="svelte-1u5a6fb"&&(r.innerHTML=k),f.forEach(m),v.forEach(m),this.h()},h(){h(o,"class","carbon-wrapper svelte-1hqmfki"),h(r,"class","icon-container svelte-1hqmfki"),h(i,"class","footer-content svelte-1hqmfki"),h(e,"class","svelte-1hqmfki")},m(l,v){z(l,e,v),g(e,i),g(i,o),K(a,o,null),g(i,t),g(i,r),d=!0},p(l,[v]){const f={};v&1&&(f.dark=l[0]==="dark"),a.$set(f)},i(l){d||(O(a.$$.fragment,l),d=!0)},o(l){N(a.$$.fragment,l),d=!1},d(l){l&&m(e),Z(a)}}}function be(n,e,i){let o;return J(n,q,a=>i(0,o=a)),Q(()=>{const a=new MutationObserver(()=>{const t=document.getElementById("wcb");t&&t.classList.toggle("wcb-d",o==="dark")});return a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>a.disconnect()}),[o]}class Ae extends V{constructor(e){super(),U(this,e,be,ke,W,{})}}function Re(n){let e,i,o;return{c(){e=y("canvas"),this.h()},l(a){e=_(a,"CANVAS",{class:!0}),S(e).forEach(m),this.h()},h(){h(e,"class","svelte-1akhj9p")},m(a,t){z(a,e,t),n[3](e),i||(o=ae(e,"click",n[1]),i=!0)},p:H,i:H,o:H,d(a){a&&m(e),n[3](null),i=!1,o()}}}const ie=10;function Se(n,e,i){let o;J(n,q,c=>i(2,o=c));let a,t,r=0,k=0,d,l=1,v=1,f=0,s=[];Q(()=>{T(),k=performance.now(),R()}),oe(()=>{r&&cancelAnimationFrame(r)});function p(c){const u=a.getBoundingClientRect(),x=(c.clientX-u.left)/u.width,L=(c.clientY-u.top)/u.height,ee=(performance.now()-k)/1e3,te=x*40-20,I=10+L*20;s=[...s,{x:te,z:I,time:ee,amplitude:.22}],s.length>ie&&(s=s.slice(1))}function T(){if(t=a.getContext("webgl"),!t){console.error("WebGL not supported");return}A(),window.addEventListener("resize",A),D(),Y()}function A(){const c=Math.min(window.devicePixelRatio,1.5),u=.5;i(0,a.width=window.innerWidth*c*u,a),i(0,a.height=window.innerHeight*c*u,a),t.viewport(0,0,a.width,a.height)}function D(){const c=`
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `,u=`
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
    `,x=F(t.VERTEX_SHADER,c),L=F(t.FRAGMENT_SHADER,u);d=t.createProgram(),t.attachShader(d,x),t.attachShader(d,L),t.linkProgram(d),t.getProgramParameter(d,t.LINK_STATUS)||console.error("Program link error:",t.getProgramInfoLog(d))}function F(c,u){const x=t.createShader(c);return t.shaderSource(x,u),t.compileShader(x),t.getShaderParameter(x,t.COMPILE_STATUS)||console.error("Shader compile error:",t.getShaderInfoLog(x)),x}function Y(){const c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const u=t.getAttribLocation(d,"position");t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0)}function M(c){if(v!==l&&f===0&&(f=c),f!==0){const x=Math.min((c-f)/150,1),L=x*x*(3-2*x);l=l+(v-l)*L,x>=1&&(f=0,l=v)}}function R(){const c=(performance.now()-k)/1e3;M(c),w(c),r=requestAnimationFrame(R)}function w(c){t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(d);const u=t.getUniformLocation(d,"iResolution"),x=t.getUniformLocation(d,"iTime"),L=t.getUniformLocation(d,"u_night"),ee=t.getUniformLocation(d,"u_rippleCount"),te=t.getUniformLocation(d,"u_ripples");t.uniform2f(u,a.width,a.height),t.uniform1f(x,c),t.uniform1f(L,l),t.uniform1i(ee,s.length);const I=new Float32Array(ie*4);for(let $=0;$<s.length;$++){const X=s[$];I[$*4+0]=X.x,I[$*4+1]=X.z,I[$*4+2]=X.time,I[$*4+3]=X.amplitude}t.uniform4fv(te,I),t.drawArrays(t.TRIANGLES,0,6)}function b(c){re[c?"unshift":"push"](()=>{a=c,i(0,a)})}return n.$$.update=()=>{n.$$.dirty&4&&(v=o==="dark"?1:0)},[a,p,o,b]}class Te extends V{constructor(e){super(),U(this,e,Se,Re,W,{})}}function Pe(n){let e,i,o,a,t,r,k,d,l;i=new Te({}),a=new ye({});const v=n[1].default,f=se(v,n,n[0],null);return d=new Ae({}),{c(){e=y("div"),j(i.$$.fragment),o=C(),j(a.$$.fragment),t=C(),r=y("main"),f&&f.c(),k=C(),j(d.$$.fragment),this.h()},l(s){e=_(s,"DIV",{class:!0});var p=S(e);G(i.$$.fragment,p),o=E(p),G(a.$$.fragment,p),t=E(p),r=_(p,"MAIN",{class:!0});var T=S(r);f&&f.l(T),T.forEach(m),k=E(p),G(d.$$.fragment,p),p.forEach(m),this.h()},h(){h(r,"class","svelte-1s2ylak"),h(e,"class","layout svelte-1s2ylak")},m(s,p){z(s,e,p),K(i,e,null),g(e,o),K(a,e,null),g(e,t),g(e,r),f&&f.m(r,null),g(e,k),K(d,e,null),l=!0},p(s,[p]){f&&f.p&&(!l||p&1)&&ne(f,v,s,s[0],l?ce(v,s[0],p,null):le(s[0]),null)},i(s){l||(O(i.$$.fragment,s),O(a.$$.fragment,s),O(f,s),O(d.$$.fragment,s),l=!0)},o(s){N(i.$$.fragment,s),N(a.$$.fragment,s),N(f,s),N(d.$$.fragment,s),l=!1},d(s){s&&m(e),Z(i),Z(a),f&&f.d(s),Z(d)}}}function Ce(n,e,i){let{$$slots:o={},$$scope:a}=e;return Q(()=>{const t=localStorage.getItem("theme")||"dark";if(q.set(t),!document.querySelector('link[href*="font-awesome"]')){const r=document.createElement("link");r.rel="stylesheet",r.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",document.head.appendChild(r)}}),n.$$set=t=>{"$$scope"in t&&i(0,a=t.$$scope)},[a,o]}class ze extends V{constructor(e){super(),U(this,e,Ce,Pe,W,{})}}export{ze as component};
