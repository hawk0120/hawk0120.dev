import { c as create_ssr_component, f as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const projects = [
  {
    name: "Thomas",
    description: "Agentic AI that mimics natural intelligence through persistent memory and various tools.",
    url: "https://bsky.app/profile/thomasmind54.bsky.social"
  },
  {
    name: "clammy",
    description: "The project is a Insurance Claim Management Platform, powered by Angular on the front end. I wrote the REST Service in Java/Spring and TypeScript/Express as an experiment in verbosity. The user can create, resolve and retrieve insurance claims.",
    url: "https://github.com/hawk0120/clammy"
  },
  {
    name: "debby",
    description: "debby is file based database system. I enjoy the speed and ease of sqlLite, but found myself wanting something even simpler so I built a database system that stores data in a file. It has read, write, and update commands. It loads the entire database into memory when the read command is called. Its a simple solution for small projects.",
    url: "https://github.com/hawk0120/debby"
  },
  {
    name: "Weapy",
    description: "Developed a mobile application that tracks and displays real-time pollen levels for trees, grass, weeds, and mold based on the user's current location. Used React Native, @rneui/themed for custom theming, and react-native-elements for UI components. Features include automatic location-based updates, a manual location reset modal, and animated indicators for pollen severity.",
    url: "https://www.bradyhawkins.dev/blog/"
  },
  {
    name: "Songbird Tribe",
    description: "The project is a React based landing page for a musician that I designed and developed.",
    url: "http://www.songbirdtribe.com"
  },
  {
    name: "bowmaneconomics.ca",
    description: "A static website written in vanilla javascript, html, and css. The client wanted a stripped down UI to market their services.",
    url: "https://www.bowmaneconomics.ca"
  },
  {
    name: "ScottyAuto.ca",
    description: "A standalone single-page application developed with React and TypeScript, providing customers with a dedicated portal for interacting with Scotty's Auto services. It features a contact form utilizing Formspree for seamless communication with the company.",
    url: "https://www.scottysauto.ca"
  },
  {
    name: "Personal portfolio site",
    description: "Used Angular to create personal website that dynamically render markdown files in blog posts",
    url: "https://www.bradyhawkins.dev"
  },
  {
    name: "compassionatekenora.ca",
    description: "A wordpress multipage application that to brought awareness to the grassroots organization. Lead the designed and implementation.",
    url: "https://www.compassionatekenora.ca"
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-container.svelte-122f3fg.svelte-122f3fg{max-width:1000px;margin:0 auto;padding:2rem}h2.svelte-122f3fg.svelte-122f3fg{color:var(--text-color);border-bottom:2px solid var(--accent-color);padding-bottom:0.5rem;margin-bottom:2rem}.projects-grid.svelte-122f3fg.svelte-122f3fg{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:1.5rem}.project-card.svelte-122f3fg.svelte-122f3fg{background-color:var(--bg-color);border:1px solid var(--border-color);border-radius:8px;padding:1.5rem;transition:transform 0.2s, box-shadow 0.2s}.project-card.svelte-122f3fg.svelte-122f3fg:hover{transform:translateY(-4px);box-shadow:0 4px 12px rgba(0, 0, 0, 0.1)}.project-card.svelte-122f3fg h3.svelte-122f3fg{margin-top:0;margin-bottom:0.5rem}.project-card.svelte-122f3fg a.svelte-122f3fg{color:var(--accent-color);text-decoration:none}.project-card.svelte-122f3fg a.svelte-122f3fg:hover{text-decoration:underline}.project-card.svelte-122f3fg p.svelte-122f3fg{color:var(--text-color);line-height:1.6;margin:0;font-size:0.95rem}@media(max-width: 640px){.projects-container.svelte-122f3fg.svelte-122f3fg{padding:1rem}.projects-grid.svelte-122f3fg.svelte-122f3fg{grid-template-columns:1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="projects-container svelte-122f3fg"><h2 class="svelte-122f3fg" data-svelte-h="svelte-7jt1gw">Projects</h2> <div class="projects-grid svelte-122f3fg">${each(projects, (project) => {
    return `<div class="project-card svelte-122f3fg"><h3 class="svelte-122f3fg"><a${add_attribute("href", project.url, 0)} target="_blank" rel="noopener" class="svelte-122f3fg">${escape(project.name)}</a></h3> <p class="svelte-122f3fg">${escape(project.description)}</p> </div>`;
  })}</div> </div>`;
});
export {
  Page as default
};
