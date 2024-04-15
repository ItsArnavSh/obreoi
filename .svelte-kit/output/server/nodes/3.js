

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/intro/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CshHEtYC.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.SI4Zq0WL.js"];
export const stylesheets = ["_app/immutable/assets/3.Ybm52rml.css"];
export const fonts = [];
