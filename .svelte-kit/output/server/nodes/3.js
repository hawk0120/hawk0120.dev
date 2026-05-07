

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Xl93yWy3.js","_app/immutable/chunks/BD5CU8nl.js","_app/immutable/chunks/CuF5X48q.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.DI6RPvwA.css"];
export const fonts = [];
