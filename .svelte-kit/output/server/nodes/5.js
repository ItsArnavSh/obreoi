

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/intro/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.D0lrqZPT.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.BP0ve0e9.js"];
export const stylesheets = ["_app/immutable/assets/5.DtaIyKKt.css"];
export const fonts = [];
