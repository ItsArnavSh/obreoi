

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BykQ1rkJ.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.BP0ve0e9.js","_app/immutable/chunks/entry.BcmNoOoK.js"];
export const stylesheets = [];
export const fonts = [];
