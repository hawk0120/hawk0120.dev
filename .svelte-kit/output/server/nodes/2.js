

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.t8ifuSv8.js","_app/immutable/chunks/BD5CU8nl.js","_app/immutable/chunks/DH1ey1N-.js"];
export const stylesheets = ["_app/immutable/assets/2.DIl9CcvU.css"];
export const fonts = [];
