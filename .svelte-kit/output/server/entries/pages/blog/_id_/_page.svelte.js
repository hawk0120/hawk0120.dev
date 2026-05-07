import { c as create_ssr_component, a as subscribe } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loading.svelte-qa019f,.error.svelte-qa019f{text-align:center;padding:2rem;color:var(--text-color)}.error.svelte-qa019f{color:#ff5252}.blog-post.svelte-qa019f{max-width:800px;margin:0 auto;padding:2rem}header.svelte-qa019f{margin-bottom:2rem;border-bottom:1px solid var(--border-color);padding-bottom:1rem}h1.svelte-qa019f,h2.svelte-qa019f,h3.svelte-qa019f{text-decoration:none !important;color:var(--text-color)}.meta.svelte-qa019f{color:var(--text-color);opacity:0.7;font-size:0.9rem}.description.svelte-qa019f{color:var(--text-color);opacity:0.8;font-style:italic}p.svelte-qa019f{line-height:1.6;color:var(--text-color);margin:1rem 0}pre.svelte-qa019f{background-color:var(--header-bg);padding:1rem;border-radius:4px;overflow-x:auto}blockquote.svelte-qa019f{border-left:4px solid var(--accent-color);padding-left:1rem;margin:1rem 0;color:var(--text-color);opacity:0.8}ul.svelte-qa019f,ol.svelte-qa019f{padding-left:2rem;color:var(--text-color)}li.svelte-qa019f{margin:0.5rem 0}figure.svelte-qa019f{margin:1rem 0}img.svelte-qa019f{max-width:100%;height:auto;border-radius:4px}figcaption.svelte-qa019f{text-align:center;color:var(--text-color);opacity:0.7;font-size:0.9rem;margin-top:0.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${`<div class="loading svelte-qa019f" data-svelte-h="svelte-pfo6lf">Loading post...</div>`}`;
});
export {
  Page as default
};
