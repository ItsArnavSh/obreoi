<script>
    import Section from "../dining/section.svelte";
    let diningData = [
        {
            name:"Suryamahal",
            about: "A daytime dining space, crowned with a sky blue, cloud brushed dome.Tables nestled in interconnecting domes afford spectacular views of the hotel's gardens.",
            more: "Operational for breakfast (07A.M.– 10:30 A.M.) and Lunch (12P.M. – 03:30P.M.).",
            imageLocation: "/dining/a.png",
            map : ""
        },
        {
            name:"Chandni",
            about:"Offers stunning views of the City Palace and Lake Pichola. The menu spans Western and Indian cuisine.",
            more:"Operational from 7P.M. – 11P.M.",
            imageLocation:"/dining/b.png",
            map:""
        },
        {
            name:"Udaimahal",
            about:"Evening dining space adorned with a night sky, domed ceiling. Candlelit at night, with live traditional musicians. Udaimahal epitomises romance. The menu features Indian cuisine rare dishes and reinvented classics.",
            more:"Operational from 7P.M. – 11P.M.",
            imageLocation:"/dining/c.png",
            map:""
        },
        {
            name:"Bar",
            about:"Has an almost labyrinthine layout between domes and through arches that offer uninterrupted views of the lake and gardens. An intricate geometric pattern of green and white marble, sandstone and black granite ornaments the floor, while the antique finish bar is framed by an intricate Mewar arch.",
            more:"Operational from 12P.M. – 12A.M.",
            imageLocation:"/dining/d.png",
            map:""
        },
    ];
    let diningData2 = [
        {
            name:"Aravalli",
            about: " Aravalli restaurant is the perfect setting for an early breakfast, a long leisurely start to your day at Trident, Udaipur, lunch with family, friends or business associates, and dinner at the end of a fulfilling day of sightseeing or work."
            ,imageLocation:"/dining/e.png",
            map:""
        },
        {
            name:"The Terrace",
            about: "In the warm evening air, open to the stars and furnished with candlelit tables, The Terrace is a lovely setting for an intimate dinner with the one you love, a relaxed evening meal with family, or a special business dinner with clients."
            ,imageLocation:"/dining/f.png",
            map:""
        },
        {
            name:"Amrit Mahal",
            about: "The Amrit Mahal bar at Trident, Udaipur provides the perfect setting for a quiet night cap or some high-spirited conversations with friends. Hand-picked traditional artefacts dot the contemporary and cheerful décor of Amrit Mahal. Choose from an extensive selection of spirits, wines and cocktails, expertly mixed and paired with delicious appetizers, freshly prepared just for you. Our cocktail and mocktail lists include some vintage creations which are a must try when you visit."
            ,imageLocation:"/dining/g.png",
            map:""
        }
    ]
    let diningData3=[
        {
            name:"The Dining Room",
            about:"Walk into the all-day dining restaurant that overlooks the outer courtyard and the Pichola Lake for the most refreshing and expansive breakfasts and flavoursome lunches and dinners.",
            more:"Operational for Lunch (12P.M. – 3P.M.) and <br>Dinner (07P.M. – 10:30P.M.)<br><br>Minimum spend- INR 2500 plus taxes per person.",
            imageLocation:"/dining/h.png",
            map:""
        },
        {
            name:"Sheeshmahal",
            about:" Using recipes mastered in royal kitchens, with contemporary nuances added to them, the two-level restaurant takes diners through a journey of exquisite Indian flavours",
            more:"Available in 02 slots: 07:30P.M. and 09:30P.M. for dinner<br>Minimum spend- INR 3500 plus taxes per person.",
            imageLocation:"/dining/i.png",
            map:""
        },
        {
            name:"Library Bar",
            about:"Walk into this intimate lounge designed like a luxury den, complete with dark wood paneling, fireplaces, fine art, books, and collectible artifacts for guests. The Library Bar is the place for unwinding. Discover the finest selections of whiskies and liquors around the world.",
            more:"12 A.M to 12 P.M<br><br>Minimum spend- INR 2500 plus taxes per person.",
            imageLocation:"/dining/k.png",
            map:""
        },
    ]
    let diningData4=[
        {
            name:"THE ROYAL REPAST<br><p class = 'text-xl text-center'>(from the house of bedla)</p>",
            about: "The Royal Repast from THE HOUSE OF BEDLA, is a specialty restaurant and it is an attempt to link and reconcile food with history and heritage. It attempts to show you a glimpse of traditional Mewar Style cooking that is counted among the legends of this glorious lands.",
            more: "Operational from (11A.M.– 10:30P.M.)",
            imageLocation: "/dining/l.png",
            map : "",
            contact:"Contact: +91 0294 2522362 "
        },
        {
            name:"AMBRAI",
            about: "Ideally located on the banks of Pichola Lake with panoramic view of Jagdish Temple, Gangaur Ghat, City Palace, Lake Palace, Jag Mandir and Sajjangarh Fort. Ambrai serves excellent multi cuisine delicacies to the guests",
            more: "Operational for Lunch (12P.M. – 03P.M.) <br>Dinner (07P.M. – 10P.M.)",
            imageLocation: "/dining/m.png",
            map : "",
            contact:"Contact: +91 0294 243 1589 ext. +91 0294 2431085 "
        },
        {
            name:"UPRE BY 1559",
            about: "Upré is located on the terrace of Lake Pichola Hotel with a colossal water frontage. It is an informal, open-air bar and terrace restaurant offering a selection of international and local cuisines, cocktails and wines. Operational for dinner (07P.M. -10P.M.).",
            more: "",
            imageLocation: "/dining/n.png",
            map : "",
            contact:"Telephone: +91 294 5100198",
        },
        {
            name:"1559 A.D BISTRO LOUNGE",
            about: " The idea is to provide a memorable experience to the guests in hospitality, ambience and architecture and last but not the least mouth watering cuisines. Operational for dinner (07P.M. – 10P.M.)",
            more: "",
            imageLocation: "/dining/o.png",
            map : "",
            contact:"Telephone: +91 294 2433559/ 2432355"
        },
    ]
</script>
<style>
    .backgrounder {
      background-image: url('/img/toc.png');
      background-repeat: repeat;
      height:auto;
    }
</style>
<div class = "backgrounder flex flex-col items-center pt-10">
    <div>
        <h1 class = "titlefont-bold text-3xl text-center">
            Dining options in Udaipur
        </h1>
    </div>
    <h1 class = "text-3xl titlefont-bold mt-10">THE OBEROI UDAIVILAS</h1>
    <p class = "content-regular">Contact: +91 0294-2433300</p>
    <div>
{#each diningData as Dine}
<Section {...Dine}/>
{/each}
</div>
<h1 class = "text-3xl titlefont-bold mt-10">TRIDENT UDAIPUR</h1>
    <p class = "content-regular">Contact: +91 294 243 2200</p>
    <div>
{#each diningData2 as Dine}
<Section {...Dine}/>
{/each}
</div>


<h1 class = "text-3xl titlefont-bold mt-10">THE LEELA PALACE</h1>
    <p class = "content-regular">Contact – +91 0294 - 6701234</p>
    <div>
{#each diningData3 as Dine}
<Section {...Dine}/>
{/each}
</div>

<h1 class = "text-3xl titlefont-bold mt-10">DEVIGARH</h1>
    <p class = "content-regular">Contact: +91 2953 289211</p>
    <div>

<Section name = {""} , imageLocation = "/dining/j.png" about =  {"Devigarh offers a range of local and international cuisine to suit all tastes, and in a range of settings that show off the hidden jewels of the palace. Breakfast and Dinner are served in our restaurant, whilst Lunch can be enjoyed in the Bar."} more =  {"Multi cuisine restaurant, 27 km from the hotel."}/>
</div>

<h1 class = "text-3xl titlefont-bold mt-10 text-center">STAND ALONE RESTAURANTS</h1>
<div>
    {#each diningData4 as Dine}
    <Section {...Dine}/>
    {/each}
    </div>
    <p class = "content text-center p-2">Our concierge would be delighted to make a reservation in any of the above mentioned restaurants.</p>
</div>
