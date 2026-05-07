import { c as create_ssr_component, a as subscribe, o as onDestroy, b as add_attribute, v as validate_component, m as missing_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function createThemeStore() {
  const stored = typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
  const initial = stored || "light";
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
  code: ".header.svelte-92enzi.svelte-92enzi{display:flex;align-items:center;justify-content:space-between;padding:1rem 2rem;background-color:var(--header-bg);color:var(--header-text);border-bottom:1px solid var(--border-color);position:relative;z-index:10}.photo-container.svelte-92enzi.svelte-92enzi{display:flex;align-items:center}.hero-photo.svelte-92enzi.svelte-92enzi{border-radius:50%;object-fit:cover}.header-right.svelte-92enzi.svelte-92enzi{display:flex;gap:1.5rem;align-items:center}.header-right.svelte-92enzi a.svelte-92enzi{text-decoration:none;color:var(--header-text);font-weight:500;transition:opacity 0.2s}.header-right.svelte-92enzi a.svelte-92enzi:hover{opacity:0.8}.header-right.svelte-92enzi a.active.svelte-92enzi{border-bottom:2px solid var(--accent-color);padding-bottom:2px}.icon-btn.svelte-92enzi.svelte-92enzi{background:none;border:none;color:var(--header-text);font-size:1.5rem;cursor:pointer;padding:0.5rem;border-radius:50%;transition:background-color 0.2s}.icon-btn.svelte-92enzi.svelte-92enzi:hover{background-color:rgba(255, 255, 255, 0.1)}@media(max-width: 640px){.header.svelte-92enzi.svelte-92enzi{flex-direction:column;gap:1rem}.header-right.svelte-92enzi.svelte-92enzi{flex-wrap:wrap;justify-content:center}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  let $page, $$unsubscribe_page;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { navigate } = $$props;
  if ($$props.navigate === void 0 && $$bindings.navigate && navigate !== void 0)
    $$bindings.navigate(navigate);
  $$result.css.add(css$3);
  $$unsubscribe_theme();
  $$unsubscribe_page();
  return `<header class="header svelte-92enzi"><div class="photo-container svelte-92enzi"><a href="/" data-svelte-h="svelte-1nzinyc"><img src="/favicon.webp" alt="Brady Hawkins" width="40" height="40" class="hero-photo svelte-92enzi"></a></div> <div class="header-right svelte-92enzi"><a href="/" class="${["svelte-92enzi", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1ta5ei0">home</a> <a href="/blog" class="${["svelte-92enzi", $page.url.pathname.startsWith("/blog") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-e7dunv">writing</a> <a href="/contact" class="${[
    "svelte-92enzi",
    $page.url.pathname.startsWith("/contact") ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-kbthu9">contact</a> <button class="icon-btn svelte-92enzi" aria-label="Toggle dark mode">${$theme === "dark" ? `<i class="fa-solid fa-campground"></i>` : `<i class="fa-solid fa-fire"></i>`}</button></div> </header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-1yboqac.svelte-1yboqac{text-align:center;padding:2rem;background-color:var(--footer-bg);color:var(--footer-text);font-size:0.9rem}.icon-container.svelte-1yboqac.svelte-1yboqac{display:flex;justify-content:center;gap:1.5rem;margin-bottom:1.5rem}.icon-container.svelte-1yboqac a.svelte-1yboqac{color:var(--footer-text);text-decoration:none;transition:opacity 0.2s}.icon-container.svelte-1yboqac a.svelte-1yboqac:hover{opacity:0.8}footer.svelte-1yboqac a.svelte-1yboqac{color:var(--footer-text);text-decoration:underline}footer.svelte-1yboqac a.svelte-1yboqac:hover{opacity:0.8}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-1yboqac" data-svelte-h="svelte-v66gbp"><div class="icon-container svelte-1yboqac"><a href="https://www.linkedin.com/in/brady-hawkins" class="svelte-1yboqac"><i class="fab fa-linkedin fa-2x"></i></a> <a href="https://github.com/hawk0120" class="svelte-1yboqac"><i class="fab fa-github fa-2x"></i></a> <a href="https://bsky.app/profile/bradyhawkins.dev" class="svelte-1yboqac"><i class="fab fa-bluesky fa-2x"></i></a></div> <a href="https://www.websitecarbon.com/website/bradyhawkins-dev/" target="_blank" rel="noopener" class="svelte-1yboqac"><p>Website Carbon Rating</p></a> </footer>`;
});
const Water_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "canvas.svelte-1akhj9p{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:auto}",
  map: null
};
const Water = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  onDestroy(() => {
  });
  $$result.css.add(css$1);
  return `<canvas class="svelte-1akhj9p"${add_attribute("this", canvas, 0)}></canvas>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `body{margin:0;padding:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;background-color:var(--bg-color);color:var(--text-color);transition:background-color 0.3s, color 0.3s}[data-theme="dark"]{--bg-color:#0a0a0a;--text-color:#e0e0e0;--header-bg:#1a1a1a;--header-text:#e0e0e0;--footer-bg:#1a1a1a;--footer-text:#e0e0e0;--border-color:#333;--accent-color:#64b5f6}[data-theme="light"]{--bg-color:#ffffff;--text-color:#1a1a1a;--header-bg:#f5f5f5;--header-text:#1a1a1a;--footer-bg:#f5f5f5;--footer-text:#1a1a1a;--border-color:#ddd;--accent-color:#1976d2}main.svelte-1jss9dc{min-height:calc(100vh - 120px);padding:2rem;max-width:1200px;margin:0 auto}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { children } = $$props;
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  $$result.css.add(css);
  return `${validate_component(Water, "Water").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1jss9dc">${validate_component(children || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
