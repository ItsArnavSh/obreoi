import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const Scroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const css = {
  code: ".intro.svelte-18tm91f{background-image:url('/img/title.png');background-repeat:no-repeat;background-size:cover;height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="intro svelte-18tm91f"><div class="text-center flex flex-col justify-center"><h1 class="text-3xl titlefont-bold text-white mt-20" data-svelte-h="svelte-1imcoe0">The Spirit of <br>The Oberoi Udaivilas</h1> <div class="content text-white text-lg pb-10 pt-10 text-container" data-svelte-h="svelte-1kygg1w"><p class="pb-4">Nestled amidst the majestic Aravalli Mountain Range, The Oberoi Udaivilas stands as a mesmerizing tribute to the opulent legacy of Mewar. Our sanctuary exudes an aura of tranquility and romance, promising to immerse you in an unforgettable journey of splendor.</p> <p class="pt-40 mt-20">With meticulous attention to detail and heartfelt hospitality, we strive to craft an experience that transcends ordinary luxury. Each moment spent with us is infused with warmth and sincerity, destined to weave a tapestry of happiness that lingers in your memory.</p></div> ${validate_component(Scroll, "Scroll").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
