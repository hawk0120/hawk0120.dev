

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/library/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CPRMk-Rl.js","_app/immutable/chunks/BD5CU8nl.js","_app/immutable/chunks/DH1ey1N-.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/5.C8aWosjl.css"];
export const fonts = [];
