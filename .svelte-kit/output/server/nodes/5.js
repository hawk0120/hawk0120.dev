

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DjmNJKqh.js","_app/immutable/chunks/BD5CU8nl.js","_app/immutable/chunks/CuF5X48q.js"];
export const stylesheets = ["_app/immutable/assets/5.DThALlCj.css"];
export const fonts = [];
