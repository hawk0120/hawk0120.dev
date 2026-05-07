import { c as create_ssr_component } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.home.svelte-e7w2q7.svelte-e7w2q7{max-width:800px;margin:0 auto;padding:2rem}.hero.svelte-e7w2q7.svelte-e7w2q7{text-align:center;margin-bottom:3rem}.profile-photo.svelte-e7w2q7.svelte-e7w2q7{border-radius:50%;object-fit:cover;margin-bottom:1rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.1)}h1.svelte-e7w2q7.svelte-e7w2q7{font-size:2.5rem;margin:0.5rem 0;color:var(--text-color)}.tagline.svelte-e7w2q7.svelte-e7w2q7{font-size:1.2rem;color:var(--text-color);opacity:0.8}.content.svelte-e7w2q7 section.svelte-e7w2q7{margin-bottom:2rem}h2.svelte-e7w2q7.svelte-e7w2q7{color:var(--text-color);border-bottom:2px solid var(--accent-color);padding-bottom:0.5rem;margin-bottom:1rem}p.svelte-e7w2q7.svelte-e7w2q7{line-height:1.6;color:var(--text-color)}ul.svelte-e7w2q7.svelte-e7w2q7{list-style-type:none;padding:0}li.svelte-e7w2q7.svelte-e7w2q7{padding:0.5rem 0;padding-left:1.5rem;position:relative;color:var(--text-color)}li.svelte-e7w2q7.svelte-e7w2q7:before{content:"→";position:absolute;left:0;color:var(--accent-color)}@media(max-width: 640px){.home.svelte-e7w2q7.svelte-e7w2q7{padding:1rem}h1.svelte-e7w2q7.svelte-e7w2q7{font-size:2rem}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="home svelte-e7w2q7" data-svelte-h="svelte-rdds5"><div class="hero svelte-e7w2q7"><img src="/photo-me.webp" alt="Brady Hawkins" class="profile-photo svelte-e7w2q7" width="200" height="200"> <h1 class="svelte-e7w2q7">Brady Hawkins</h1> <p class="tagline svelte-e7w2q7">Full Stack Developer &amp; Creative Technologist</p></div> <div class="content svelte-e7w2q7"><section class="svelte-e7w2q7"><h2 class="svelte-e7w2q7">About Me</h2> <p class="svelte-e7w2q7">I&#39;m a passionate developer with experience in building modern web applications,
        mobile apps, and exploring the intersection of technology and creativity.
        My work spans from enterprise solutions to experimental AI projects.</p></section> <section class="svelte-e7w2q7"><h2 class="svelte-e7w2q7">What I Do</h2> <ul class="svelte-e7w2q7"><li class="svelte-e7w2q7">Build responsive web applications with modern frameworks</li> <li class="svelte-e7w2q7">Develop mobile applications with React Native</li> <li class="svelte-e7w2q7">Experiment with AI and machine learning</li> <li class="svelte-e7w2q7">Create tools that simplify complex problems</li></ul></section></div> </div>`;
});
export {
  Page as default
};
