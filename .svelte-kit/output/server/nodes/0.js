

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DpyRoW2y.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.BP0ve0e9.js"];
export const stylesheets = ["_app/immutable/assets/0.B924akuk.css"];
export const fonts = [];
