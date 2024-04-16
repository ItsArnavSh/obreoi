

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contents/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BCAMwLvF.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.BP0ve0e9.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.CA19_blS.css"];
export const fonts = [];
