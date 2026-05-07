import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loading.svelte-3b4mzt.svelte-3b4mzt,.error.svelte-3b4mzt.svelte-3b4mzt{text-align:center;padding:2rem;color:var(--text-color)}.error.svelte-3b4mzt.svelte-3b4mzt{color:#ff5252}.blog-post.svelte-3b4mzt.svelte-3b4mzt{list-style:none;padding:0;max-width:800px;margin:0 auto}.blog-post.svelte-3b4mzt li.svelte-3b4mzt{padding:1rem 0;border-bottom:1px solid var(--border-color)}.blog-post.svelte-3b4mzt li.svelte-3b4mzt:last-child{border-bottom:none}.blog-post.svelte-3b4mzt a.svelte-3b4mzt{color:var(--text-color);text-decoration:none;font-size:1.2rem;font-weight:500}.blog-post.svelte-3b4mzt small.svelte-3b4mzt{color:var(--text-color);opacity:0.7;margin-left:0.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${`<div class="loading svelte-3b4mzt" data-svelte-h="svelte-10i8mbc">Loading posts...</div>`}`;
});
export {
  Page as default
};
