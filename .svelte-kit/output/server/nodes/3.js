

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DL0vmO4c.js","_app/immutable/chunks/BD5CU8nl.js","_app/immutable/chunks/DH1ey1N-.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.BJeJ6pGd.css"];
export const fonts = [];
