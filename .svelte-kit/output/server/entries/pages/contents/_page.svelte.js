import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".backgrounder.svelte-1t9r6ik{background-image:url('/img/toc.png');background-repeat:no-repeat;background-size:cover;height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contents = [
    ["Dining Experience", "dining"],
    ["Elevated Dining Experience at Udaivilas", "elevated"],
    ["Experiences", "Experiences"],
    ["Shopping Options", "shopping"],
    ["Sightseeing Options", "sightseeing"],
    ["The Oberoi Spa"]
  ];
  $$result.css.add(css);
  return `<div class="backgrounder svelte-1t9r6ik"><div class="text-3xl titlefont-regular p-5 pt-40 text-center" data-svelte-h="svelte-tdp3am">Navigating Your Stay</div> <div class="text-center">${each(contents, (content) => {
    return `<a href="${"./" + escape(content[1], true)}"><p class="text-black content-regular m-10 text-xl ">${escape(content[0])}</p></a>`;
  })}</div></div>`;
});
export {
  Page as default
};
