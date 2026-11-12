import { c as create_ssr_component, f as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const projects = [
  {
    name: "Watney4",
    description: "A self-hosted AI assistant built in Kotlin that combines persistent memory, tool execution, voice interactions, and automation workflows. Powered by local and remote language models, Watney4 explores practical agentic AI while maintaining complete ownership of data, infrastructure, and execution.",
    url: "https://github.com/hawk0120/watney4",
    section: "Featured"
  },
  {
    name: "Thomas",
    description: "The first iteration of what would become Watney4. An experimental AI assistant exploring memory, reflection, and long-term interaction through a Kotlin/Spring Boot architecture. Established the core ideas around persistent memory, tool-based actions, and long-term context that later evolved into more sophisticated implementations.",
    url: "https://github.com/hawk0120/Thomas",
    section: "Featured"
  },
  {
    name: "Turtles",
    description: "A modern terminal file manager written in Kotlin that brings desktop-style interactions to the command line. Features mouse-driven navigation, drag-and-drop operations, visual selection modes, live search, file previews, and GraalVM native compilation for fast startup and minimal runtime overhead.",
    url: "https://github.com/hawk0120/turtles",
    section: "Featured"
  },
  {
    name: "clammy",
    description: "An insurance claims management platform built to explore backend architecture and API design. Supports claim creation, retrieval, and resolution workflows through RESTful services implemented in both Java/Spring Boot and TypeScript/Express, enabling comparison of different backend approaches against the same domain model.",
    url: "https://github.com/hawk0120/clammy",
    section: "Featured"
  },
  {
    name: "ToolRunner",
    description: "A Kotlin framework for building and orchestrating reusable tools and workflows. Designed to provide a strongly typed foundation for automation, agent execution, and developer productivity applications.",
    url: "https://github.com/hawk0120/ToolRunner",
    section: "Featured"
  },
  {
    name: "debby",
    description: "A lightweight file-based database engine created as an experiment in simplifying data persistence. Supports read, write, and update operations while storing structured data directly on disk, making it ideal for small projects that prioritize simplicity over traditional database complexity.",
    url: "https://github.com/hawk0120/debby",
    section: "Featured"
  },
  {
    name: "Weapy",
    description: "A mobile application that tracks and displays real-time pollen levels for trees, grass, weeds, and mold based on the user's current location. Built with React Native, featuring automatic location detection, severity indicators, and location-aware environmental reporting.",
    url: "https://www.bradyhawkins.dev/blog/",
    section: "Featured"
  }
];
const css = {
  code: '.page-label.svelte-1s3642c.svelte-1s3642c{font-family:var(--font-mono);font-size:10.5px;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin:0 0 40px;display:flex;align-items:center;gap:14px}.page-label.svelte-1s3642c.svelte-1s3642c::after{content:"";flex:1;height:1px;background:var(--border-color)}.index-row.svelte-1s3642c.svelte-1s3642c{display:flex;align-items:baseline;gap:24px;padding:22px 0;border-bottom:1px solid var(--border-color);text-decoration:none}.index-row.svelte-1s3642c .no.svelte-1s3642c{font-family:var(--font-mono);font-size:10.5px;color:var(--text-muted);width:26px;flex-shrink:0}.index-row.svelte-1s3642c .body.svelte-1s3642c{flex:1;min-width:0}.index-row.svelte-1s3642c .title.svelte-1s3642c{font-family:var(--font-serif);font-size:20px;font-weight:600;letter-spacing:-0.01em;color:var(--text-color);transition:color 0.15s}.index-row.svelte-1s3642c:hover .title.svelte-1s3642c{color:var(--accent)}.index-row.svelte-1s3642c .desc.svelte-1s3642c{font-size:13.5px;color:var(--text-muted);margin-top:5px;line-height:1.6;max-width:58ch}.index-row.svelte-1s3642c .meta.svelte-1s3642c{font-family:var(--font-mono);font-size:10.5px;color:var(--text-muted);white-space:nowrap;letter-spacing:0.05em}@media(max-width: 860px){.index-row.svelte-1s3642c.svelte-1s3642c{flex-wrap:wrap;gap:4px 14px}.index-row.svelte-1s3642c .meta.svelte-1s3642c{width:100%}}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { projects } from '$lib/stores/projects';\\n<\/script>\\n\\n<div class=\\"page-label\\">02 / Projects</div>\\n\\n<div class=\\"index\\">\\n  {#each projects as project, i}\\n    <a class=\\"index-row\\" href={project.url} target=\\"_blank\\" rel=\\"noopener\\">\\n      <span class=\\"no\\">{String(i + 1).padStart(2, '0')}</span>\\n      <span class=\\"body\\">\\n        <span class=\\"title\\">{project.name}</span>\\n        <div class=\\"desc\\">{project.description}</div>\\n      </span>\\n      {#if project.tag}\\n        <span class=\\"meta\\">{project.tag.toUpperCase()}</span>\\n      {/if}\\n    </a>\\n  {/each}\\n</div>\\n\\n<style>\\n  .page-label {\\n    font-family: var(--font-mono);\\n    font-size: 10.5px;\\n    letter-spacing: 0.12em;\\n    text-transform: uppercase;\\n    color: var(--text-muted);\\n    margin: 0 0 40px;\\n    display: flex;\\n    align-items: center;\\n    gap: 14px;\\n  }\\n\\n  .page-label::after {\\n    content: \\"\\";\\n    flex: 1;\\n    height: 1px;\\n    background: var(--border-color);\\n  }\\n\\n  .index-row {\\n    display: flex;\\n    align-items: baseline;\\n    gap: 24px;\\n    padding: 22px 0;\\n    border-bottom: 1px solid var(--border-color);\\n    text-decoration: none;\\n  }\\n\\n  .index-row .no {\\n    font-family: var(--font-mono);\\n    font-size: 10.5px;\\n    color: var(--text-muted);\\n    width: 26px;\\n    flex-shrink: 0;\\n  }\\n\\n  .index-row .body {\\n    flex: 1;\\n    min-width: 0;\\n  }\\n\\n  .index-row .title {\\n    font-family: var(--font-serif);\\n    font-size: 20px;\\n    font-weight: 600;\\n    letter-spacing: -0.01em;\\n    color: var(--text-color);\\n    transition: color 0.15s;\\n  }\\n\\n  .index-row:hover .title {\\n    color: var(--accent);\\n  }\\n\\n  .index-row .desc {\\n    font-size: 13.5px;\\n    color: var(--text-muted);\\n    margin-top: 5px;\\n    line-height: 1.6;\\n    max-width: 58ch;\\n  }\\n\\n  .index-row .meta {\\n    font-family: var(--font-mono);\\n    font-size: 10.5px;\\n    color: var(--text-muted);\\n    white-space: nowrap;\\n    letter-spacing: 0.05em;\\n  }\\n\\n  @media (max-width: 860px) {\\n    .index-row {\\n      flex-wrap: wrap;\\n      gap: 4px 14px;\\n    }\\n\\n    .index-row .meta {\\n      width: 100%;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsBE,yCAAY,CACV,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,MAAM,CACtB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CAEA,yCAAW,OAAQ,CACjB,OAAO,CAAE,EAAE,CACX,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,cAAc,CAChC,CAEA,wCAAW,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QAAQ,CACrB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,cAAc,CAAC,CAC5C,eAAe,CAAE,IACnB,CAEA,yBAAU,CAAC,kBAAI,CACb,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,CACf,CAEA,yBAAU,CAAC,oBAAM,CACf,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,CACb,CAEA,yBAAU,CAAC,qBAAO,CAChB,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,OAAO,CACvB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,UAAU,CAAE,KAAK,CAAC,KACpB,CAEA,yBAAU,MAAM,CAAC,qBAAO,CACtB,KAAK,CAAE,IAAI,QAAQ,CACrB,CAEA,yBAAU,CAAC,oBAAM,CACf,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,UAAU,CAAE,GAAG,CACf,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IACb,CAEA,yBAAU,CAAC,oBAAM,CACf,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MAClB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,wCAAW,CACT,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GAAG,CAAC,IACX,CAEA,yBAAU,CAAC,oBAAM,CACf,KAAK,CAAE,IACT,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="page-label svelte-1s3642c" data-svelte-h="svelte-mxtu8k">02 / Projects</div> <div class="index">${each(projects, (project, i) => {
    return `<a class="index-row svelte-1s3642c"${add_attribute("href", project.url, 0)} target="_blank" rel="noopener"><span class="no svelte-1s3642c">${escape(String(i + 1).padStart(2, "0"))}</span> <span class="body svelte-1s3642c"><span class="title svelte-1s3642c">${escape(project.name)}</span> <div class="desc svelte-1s3642c">${escape(project.description)}</div></span> ${project.tag ? `<span class="meta svelte-1s3642c">${escape(project.tag.toUpperCase())}</span>` : ``} </a>`;
  })} </div>`;
});
export {
  Page as default
};
