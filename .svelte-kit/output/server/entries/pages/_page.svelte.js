import { c as create_ssr_component } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".home-container.svelte-1okvuzv.svelte-1okvuzv{margin:auto;max-width:800px;width:90%;z-index:10}.home-section.svelte-1okvuzv.svelte-1okvuzv{display:flex;flex-direction:row;align-items:flex-start;gap:2em;justify-content:center;flex-wrap:wrap}.fade-lines.svelte-1okvuzv>.svelte-1okvuzv{opacity:0;transform:translateY(10px);animation:svelte-1okvuzv-fadeIn 1s forwards}@keyframes svelte-1okvuzv-fadeIn{to{opacity:1;transform:translateY(0)}}.fade-lines.svelte-1okvuzv>.svelte-1okvuzv:nth-child(1){animation-delay:0s}.fade-lines.svelte-1okvuzv>.svelte-1okvuzv:nth-child(2){animation-delay:0.2s}.fade-lines.svelte-1okvuzv>.svelte-1okvuzv:nth-child(3){animation-delay:0.4s}.fade-lines.svelte-1okvuzv>.svelte-1okvuzv:nth-child(4){animation-delay:0.6s}.fade-lines.svelte-1okvuzv>.svelte-1okvuzv:nth-child(5){animation-delay:0.8s}.fade-lines.svelte-1okvuzv>.svelte-1okvuzv:nth-child(6){animation-delay:1.0s}.photo-container.svelte-1okvuzv.svelte-1okvuzv{display:flex;justify-content:center;align-items:center;height:auto;padding-top:3em}.home-photo.svelte-1okvuzv.svelte-1okvuzv{max-width:100%;width:350px;height:auto;border-radius:15px}p.svelte-1okvuzv.svelte-1okvuzv{margin-bottom:1rem;color:var(--text-color);line-height:2;letter-spacing:3px}@media(max-width: 1024px){.home-container.svelte-1okvuzv.svelte-1okvuzv{width:95%}.home-photo.svelte-1okvuzv.svelte-1okvuzv{width:250px}}@media(max-width: 767px){.home-container.svelte-1okvuzv.svelte-1okvuzv{width:90%}.photo-container.svelte-1okvuzv.svelte-1okvuzv{flex-direction:column;padding-top:2em}.home-photo.svelte-1okvuzv.svelte-1okvuzv{width:80%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="home-section svelte-1okvuzv" data-svelte-h="svelte-1tazf3q"><div class="home-container fade-lines svelte-1okvuzv"><p class="svelte-1okvuzv">Hi! Thanks for stopping by.</p> <p class="svelte-1okvuzv">I’m Brady, a Canadian software engineer based in the Netherlands. 
		I currently work on the financials team at Keylane. I enjoy building 
		products and features that put more control back in users’ hands</p> <p class="svelte-1okvuzv">If there&#39;s anything here that takes your interest, or something I can help
      you with, it&#39;d be great to connect. brady93hawkins(at)gmail.com</p></div> <div class="photo-container svelte-1okvuzv"><img src="/photo-me.webp" alt="Photo of Brady" class="home-photo svelte-1okvuzv"></div> </div>`;
});
export {
  Page as default
};
