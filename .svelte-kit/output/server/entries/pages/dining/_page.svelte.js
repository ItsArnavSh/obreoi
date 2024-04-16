import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                                                  */
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { about } = $$props;
  let { more = "" } = $$props;
  let { imageLocation } = $$props;
  let { map } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  if ($$props.more === void 0 && $$bindings.more && more !== void 0)
    $$bindings.more(more);
  if ($$props.imageLocation === void 0 && $$bindings.imageLocation && imageLocation !== void 0)
    $$bindings.imageLocation(imageLocation);
  if ($$props.map === void 0 && $$bindings.map && map !== void 0)
    $$bindings.map(map);
  return `<div class="flex flex-col items-center content-regular mt-5 mb-10 tag"><h1 class="text-2xl content m-5">${escape(name)}</h1> <a${add_attribute("href", map, 0)}><img${add_attribute("src", imageLocation, 0)}${add_attribute("alt", name, 0)} class="w-80 border border-8 border-white "></a> <p class="text-center m-3">${escape(about)}</p> <p class="text-center m-1">${escape(more)}</p></div>`;
});
const css = {
  code: ".backgrounder.svelte-1sfhgq{background-image:url('/img/toc.png');background-repeat:repeat;background-size:cover;height:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let diningData = [
    {
      name: "Suryamahal",
      about: "A daytime dining space, crowned with a sky blue, cloud brushed dome.Tables nestled in interconnecting domes afford spectacular views of the hotel's gardens",
      more: "Operational for breakfast (07am – 10:30 am) and Lunch (12pm – 03:30pm).",
      imageLocation: "/dining/a.png",
      map: ""
    },
    {
      name: "Chandni",
      about: "Offers stunning views of the City Palace and Lake Pichola. The menu spans Western and Indian cuisine.",
      more: "Operational from 7pm – 11pm",
      imageLocation: "/dining/b.png",
      map: ""
    },
    {
      name: "Udaimahal",
      about: "Evening dining space adorned with a night sky, domed ceiling. Candlelit at night, with live traditional musicians.Udaimahal epitomises romance. The menu features Indian cuisine rare dishes and reinvented classics.",
      more: "Operational from 7pm – 11pm",
      imageLocation: "/dining/c.png",
      map: ""
    },
    {
      name: "Bar",
      about: "Has an almost labyrinthine layout between domes and through arches that offer uninterrupted views of the lake and gardens. An intricate geometric pattern of green and white marble, sandstone and black granite ornaments the floor, while the antique finish bar is framed by an intricate Mewar arch",
      more: "Operational from 12pm – 12am",
      imageLocation: "/dining/d.png",
      map: ""
    }
  ];
  let diningData2 = [
    {
      name: "Aravalli",
      about: " Aravalli restaurant is the perfect setting for an early breakfast, a long leisurely start to your day at Trident, Udaipur, lunch with family, friends or business associates, and dinner at the end of a fulfilling day of sightseeing or work.",
      imageLocation: "/dining/e.png",
      map: ""
    },
    {
      name: "The Terrace",
      about: " Aravalli restaurant is the perfect setting for an early breakfast, a long leisurely start to your day at Trident, Udaipur, lunch with family, friends or business associates, and dinner at the end of a fulfilling day of sightseeing or work.",
      imageLocation: "/dining/f.png",
      map: ""
    },
    {
      name: "Amrit Mahal",
      about: "The Amrit Mahal bar at Trident, Udaipur provides the perfect setting for a quiet night cap or some high-spirited conversations with friends. Hand-picked traditional artefacts dot the contemporary and cheerful décor of Amrit Mahal. Choose from an extensive selection of spirits, wines and cocktails, expertly mixed and paired with delicious appetizers, freshly prepared just for you. Our cocktail and mocktail lists include some vintage creations which are a must try when you visit",
      imageLocation: "/dining/g.png",
      map: ""
    }
  ];
  let diningData3 = [
    {
      name: "The Dining Room",
      about: "Walk into the all-day dining restaurant that overlooks the outer courtyard and the Pichola Lake for the most refreshing and expansive breakfasts and flavoursome lunches and dinners.",
      more: "Operational for Lunch (12pm – 3pm) and Dinner (07pm – 10:30pm)",
      imageLocation: "/dining/h.png",
      map: ""
    },
    {
      name: "Sheeshmahal",
      about: " Using recipes mastered in royal kitchens, with contemporary nuances added to them, the two-level restaurant takes diners through a journey of exquisite Indian flavours",
      more: "Available in 02 slots: 07:30pm and 09:30pm for dinner",
      imageLocation: "/dining/i.png",
      map: ""
    },
    {
      name: "Library Bar:",
      about: "Walk into this intimate lounge designed like a luxury den, complete with dark wood paneling, fireplaces, fine art, books, and collectible artifacts for guests. The Library Bar is the place to hear to for unwinding. Discover the finest selections of whiskies and liquors around the world",
      more: "Operational from 12pm – 12am",
      imageLocation: "/dining/k.png",
      map: ""
    }
  ];
  let diningData4 = [
    {
      name: "THE ROYAL REPAST-(from the house of bedla)",
      about: "The Royal Repast from THE HOUSE OF BEDLA, is a specialty restaurant and it is an attempt to link and reconcile food with history and heritage. It attempts to show you a glimpse of traditional Mewar Style cooking that is counted among the legends of this glorious lands.",
      more: "Contact: +91 0294 2522362 Operational from (11am – 10:30pm)",
      imageLocation: "/dining/l.png",
      map: ""
    },
    {
      name: "Ambrai",
      about: "Ideally located on the banks of Pichola Lake with panoramic view of Jagdish Temple, Gangaur Ghat, City Palace, Lake Palace, Jag Mandir and Sajjangarh Fort. Ambrai serves excellent multi cuisine delicacies to the guests",
      more: "Contact: +91 0294 243 1589 ext. +91 0294 2431085 Operational for Lunch (12pm – 03pm) and Dinner (07pm – 10pm)",
      imageLocation: "/dining/m.png",
      map: ""
    },
    {
      name: "UPRE BY 1559",
      about: "Upré is located on the terrace of Lake Pichola Hotel with a colossal water frontage. It is an informal, open-air bar and terrace restaurant offering a selection of international and local cuisines, cocktails and wines. Operational for dinner (07pm -10pm).",
      more: "Telephone: +91 294 5100198",
      imageLocation: "/dining/n.png",
      map: ""
    },
    {
      name: "1559 A.D BISTRO LOUNGE",
      about: " The idea is to provide a memorable experience to the guests in hospitality, ambience and architecture and last but not the least mouth watering cuisines. Operational for dinner (07pm – 10pm)",
      more: "Telephone: +91 294 2433559/ 2432355",
      imageLocation: "/dining/o.png",
      map: ""
    }
  ];
  $$result.css.add(css);
  return `<div class="backgrounder flex flex-col items-center pt-10 svelte-1sfhgq"><div data-svelte-h="svelte-1u5d7w1"><h1 class="titlefont-bold text-3xl ">Dining Experience</h1></div> <h1 class="text-3xl titlefont-bold mt-10" data-svelte-h="svelte-5eyaud">THE OBEROI UDAIVILAS</h1> <p class="content-regular" data-svelte-h="svelte-1i8cl0r">Contact: +91 0294-2433300</p> <div>${each(diningData, (Dine) => {
    return `${validate_component(Section, "Section").$$render($$result, Object.assign({}, Dine), {}, {})}`;
  })}</div> <h1 class="text-3xl titlefont-bold mt-10" data-svelte-h="svelte-1g6isgk">TRIDENT UDAIPUR</h1> <p class="content-regular" data-svelte-h="svelte-15dj2xs">Contact: +91 294 243 2200</p> <div>${each(diningData2, (Dine) => {
    return `${validate_component(Section, "Section").$$render($$result, Object.assign({}, Dine), {}, {})}`;
  })}</div> <h1 class="text-3xl titlefont-bold mt-10" data-svelte-h="svelte-1ytovla">THE LEELA PALACE</h1> <p class="content-regular" data-svelte-h="svelte-1s2q38u">Contact – +91 0294 - 6701234</p> <div>${each(diningData3, (Dine) => {
    return `${validate_component(Section, "Section").$$render($$result, Object.assign({}, Dine), {}, {})}`;
  })}</div> <h1 class="text-3xl titlefont-bold mt-10" data-svelte-h="svelte-15iifos">DEVIGARH</h1> <p class="content-regular" data-svelte-h="svelte-18stj1s">Contact: +91 2953 289211</p> <div>${validate_component(Section, "Section").$$render(
    $$result,
    {
      name: "",
      ",": true,
      imageLocation: "/dining/j.png",
      about: "Devigarh offers a range of local and international cuisine to suit all tastes, and in a range of settings that show off the hidden jewels of the palace. Breakfast and Dinner are served in our restaurant, whilst Lunch can be enjoyed in the Bar"
    },
    {},
    {}
  )}</div> <h1 class="text-3xl titlefont-bold mt-10 text-center" data-svelte-h="svelte-1722b1g">STAND ALONE RESTAURANTS</h1> <div>${each(diningData4, (Dine) => {
    return `${validate_component(Section, "Section").$$render($$result, Object.assign({}, Dine), {}, {})}`;
  })}</div></div>`;
});
export {
  Page as default
};
