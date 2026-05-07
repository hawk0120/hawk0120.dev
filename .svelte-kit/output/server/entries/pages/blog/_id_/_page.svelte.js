import { c as create_ssr_component, a as subscribe } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loading.svelte-qk3ud2,.error.svelte-qk3ud2{text-align:center;padding:2rem;color:var(--text-color)}.error.svelte-qk3ud2{color:#ff5252}.blog-post.svelte-qk3ud2{max-width:800px;margin:0 auto;padding:2rem}header.svelte-qk3ud2{margin-bottom:2rem;border-bottom:1px solid var(--border-color);padding-bottom:1rem}h1.svelte-qk3ud2,h2.svelte-qk3ud2,h3.svelte-qk3ud2{color:var(--text-color)}.meta.svelte-qk3ud2{color:var(--text-color);opacity:0.7;font-size:0.9rem}.description.svelte-qk3ud2{color:var(--text-color);opacity:0.8;font-style:italic}p.svelte-qk3ud2{line-height:1.6;color:var(--text-color);margin:1rem 0}pre.svelte-qk3ud2{background-color:var(--header-bg);padding:1rem;border-radius:4px;overflow-x:auto}blockquote.svelte-qk3ud2{border-left:4px solid var(--accent-color);padding-left:1rem;margin:1rem 0;color:var(--text-color);opacity:0.8}ul.svelte-qk3ud2,ol.svelte-qk3ud2{padding-left:2rem;color:var(--text-color)}li.svelte-qk3ud2{margin:0.5rem 0}figure.svelte-qk3ud2{margin:1rem 0}img.svelte-qk3ud2{max-width:100%;height:auto;border-radius:4px}figcaption.svelte-qk3ud2{text-align:center;color:var(--text-color);opacity:0.7;font-size:0.9rem;margin-top:0.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${`<div class="loading svelte-qk3ud2" data-svelte-h="svelte-pfo6lf">Loading post...</div>`}`;
});
export {
  Page as default
};
