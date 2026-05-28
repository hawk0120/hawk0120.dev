

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BYn9nEMw.js","_app/immutable/chunks/BD5CU8nl.js","_app/immutable/chunks/CuF5X48q.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/5.DJSd0v_Y.css"];
export const fonts = [];
