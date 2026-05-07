import { c as create_ssr_component, a as subscribe, v as validate_component, o as onDestroy, b as add_attribute } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function createThemeStore() {
  const stored = typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
  const initial = stored || "dark";
  const { subscribe: subscribe2, set, update } = writable(initial);
  return {
    subscribe: subscribe2,
    set: (value) => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", value);
      }
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", value);
      }
      set(value);
    },
    toggle: () => {
      update((current) => {
        const next = current === "light" ? "dark" : "light";
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("theme", next);
        }
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-theme", next);
        }
        return next;
      });
    }
  };
}
const theme = createThemeStore();
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".header.svelte-12x2163.svelte-12x2163{display:flex;align-items:center;justify-content:space-between;padding:1rem 2rem;background-color:var(--header-bg);color:var(--header-text);position:relative;z-index:10}.photo-container.svelte-12x2163.svelte-12x2163{display:flex;align-items:center}.hero-photo.svelte-12x2163.svelte-12x2163{border-radius:50%;object-fit:cover}.header-right.svelte-12x2163.svelte-12x2163{display:flex;gap:1.5rem;align-items:center}.header-right.svelte-12x2163 a.svelte-12x2163{text-decoration:none;color:var(--header-text);font-weight:500;transition:opacity 0.2s}.header-right.svelte-12x2163 a.svelte-12x2163:hover{opacity:0.8}.header-right.svelte-12x2163 a.active.svelte-12x2163{border-bottom:2px solid var(--accent-color);padding-bottom:2px}.icon-btn.svelte-12x2163.svelte-12x2163{background:none;border:none;color:var(--header-text);font-size:1.5rem;cursor:pointer;padding:0.5rem;border-radius:50%;transition:background-color 0.2s}.icon-btn.svelte-12x2163.svelte-12x2163:hover{background-color:rgba(255, 255, 255, 0.1)}@media(max-width: 640px){.header.svelte-12x2163.svelte-12x2163{flex-direction:column;gap:1rem}.header-right.svelte-12x2163.svelte-12x2163{flex-wrap:wrap;justify-content:center}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  let $page, $$unsubscribe_page;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$3);
  $$unsubscribe_theme();
  $$unsubscribe_page();
  return `<header class="header svelte-12x2163"><div class="photo-container svelte-12x2163" data-svelte-h="svelte-1wg5dvz"><a href="/"><img src="/favicon.webp" alt="Brady Hawkins" width="40" height="40" class="hero-photo svelte-12x2163"></a></div> <div class="header-right svelte-12x2163"><a href="/" class="${["svelte-12x2163", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-jzyh0p">home</a> <a href="/blog" class="${["svelte-12x2163", $page.url.pathname.startsWith("/blog") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-iiqsb1">writing</a> <a href="/contact" class="${[
    "svelte-12x2163",
    $page.url.pathname.startsWith("/contact") ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-rzlz9j">contact</a> <button class="icon-btn svelte-12x2163" aria-label="Toggle dark mode">${$theme === "dark" ? `<i class="fa-solid fa-campground"></i>` : `<i class="fa-solid fa-fire"></i>`}</button></div> </header>`;
});
const CarbonBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark = false } = $$props;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  return `<div id="wcb" class="${["carbonbadge", dark ? "wcb-d" : ""].join(" ").trim()}"></div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'footer.svelte-1hqmfki.svelte-1hqmfki{padding:1rem 2rem;background-color:var(--footer-bg);color:var(--footer-text);font-size:0.9rem;margin-top:auto}.footer-content.svelte-1hqmfki.svelte-1hqmfki{display:flex;justify-content:space-between;align-items:center}.carbon-wrapper.svelte-1hqmfki.svelte-1hqmfki{display:flex;align-items:center}.carbon-wrapper.svelte-1hqmfki #wcb.carbonbadge{--b1:var(--footer-text) !important;--b2:var(--accent-color) !important;background:transparent !important}.carbon-wrapper.svelte-1hqmfki #wcb.carbonbadge.wcb-d{--b1:#e0e0e0 !important;--b2:var(--accent-color) !important}.carbon-wrapper.svelte-1hqmfki #wcb.carbonbadge:not(.wcb-d){--b1:#1a1a1a !important;--b2:var(--accent-color) !important}.carbon-wrapper.svelte-1hqmfki #wcb a{background:transparent !important}.carbon-wrapper.svelte-1hqmfki #wcb #wcb_g{background:transparent !important;border:none !important}.carbon-wrapper.svelte-1hqmfki #wcb #wcb_a{background:transparent !important;border:none !important}.carbon-wrapper.svelte-1hqmfki .carbonbadge,.carbon-wrapper.svelte-1hqmfki .wcb,.carbon-wrapper.svelte-1hqmfki #wcb{background:transparent !important;background-color:transparent !important;--wcb-bg:transparent !important}.carbon-wrapper.svelte-1hqmfki .carbonbadge.wcb-d,.carbon-wrapper.svelte-1hqmfki .wcb-d{color:#e0e0e0 !important}.carbon-wrapper.svelte-1hqmfki a{color:var(--footer-text) !important;text-decoration:none !important;background:transparent !important}.carbon-wrapper.svelte-1hqmfki #wcb.carbonbadge.wcb-d a{color:#e0e0e0 !important}[data-theme="light"] .carbon-wrapper.svelte-1hqmfki #wcb.carbonbadge{color:#1a1a1a !important;background:transparent !important}[data-theme="light"] .carbon-wrapper.svelte-1hqmfki #wcb.carbonbadge a{color:#1a1a1a !important}.icon-container.svelte-1hqmfki.svelte-1hqmfki{display:flex;gap:1.5rem}.icon-container.svelte-1hqmfki a.svelte-1hqmfki{color:var(--footer-text);text-decoration:none;transition:opacity 0.2s}.icon-container.svelte-1hqmfki a.svelte-1hqmfki:hover{opacity:0.8}footer.svelte-1hqmfki a.svelte-1hqmfki{color:var(--footer-text);text-decoration:underline}footer.svelte-1hqmfki a.svelte-1hqmfki:hover{opacity:0.8}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$2);
  $$unsubscribe_theme();
  return `<footer class="svelte-1hqmfki"><div class="footer-content svelte-1hqmfki"><div class="carbon-wrapper svelte-1hqmfki">${validate_component(CarbonBadge, "CarbonBadge").$$render($$result, { dark: $theme === "dark" }, {}, {})}</div> <div class="icon-container svelte-1hqmfki" data-svelte-h="svelte-1u5a6fb"><a href="https://www.linkedin.com/in/brady-hawkins" class="svelte-1hqmfki"><i class="fab fa-linkedin fa-2x"></i></a> <a href="https://github.com/hawk0120" class="svelte-1hqmfki"><i class="fab fa-github fa-2x"></i></a> <a href="https://bsky.app/profile/bradyhawkins.dev" class="bluesky-link svelte-1hqmfki" aria-label="Bluesky"><svg viewBox="0 0 600 530" width="28" height="25" xmlns="http://www.w3.org/2000/svg"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="currentColor"></path></svg></a></div></div> </footer>`;
});
const Water_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "canvas.svelte-1akhj9p{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:auto}",
  map: null
};
const Water = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  let canvas;
  onDestroy(() => {
  });
  $$result.css.add(css$1);
  $$unsubscribe_theme();
  return `<canvas class="svelte-1akhj9p"${add_attribute("this", canvas, 0)}></canvas>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{min-height:100vh;display:flex;flex-direction:column}#svelte{display:flex;flex-direction:column;flex:1}.layout.svelte-1s2ylak{display:flex;flex-direction:column;flex:1}[data-theme="dark"]{--bg-color:#0a0a0a;--text-color:#e0e0e0;--header-bg:transparent;--header-text:#e0e0e0;--footer-bg:transparent;--footer-text:#e0e0e0;--border-color:#333;--accent-color:#64b5f6}[data-theme="light"]{--bg-color:#ffffff;--text-color:#1a1a1a;--header-bg:transparent;--header-text:#1a1a1a;--footer-bg:transparent;--footer-text:#1a1a1a;--border-color:#ddd;--accent-color:#1976d2}main.svelte-1s2ylak{flex:1;padding:2rem;max-width:1200px;margin:0 auto;width:100%}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="layout svelte-1s2ylak">${validate_component(Water, "Water").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1s2ylak">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
