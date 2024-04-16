

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dining/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.B6e3g4iV.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.BP0ve0e9.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/_page.DLdoi496.css"];
export const fonts = [];
