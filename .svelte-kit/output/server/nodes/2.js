

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Dv9lz2xo.js","_app/immutable/chunks/BD5CU8nl.js","_app/immutable/chunks/CuF5X48q.js"];
export const stylesheets = ["_app/immutable/assets/2.CAfXxMGF.css"];
export const fonts = [];
