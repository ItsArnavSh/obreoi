<style>
    .backgrounder {
      background-image: url('/img/toc.png');
      background-repeat: no-repeat;
      background-size: cover;
      height:100vh;
    }
</style>
<script>
    let contents = [["Dining options in Udaipur","dining"],["Elevated Dining experience at Udaivilas","elevated"],["Guest experiences","experience"],["Shopping options","shopping"],["Sightseeing options","sightseeing"],["The Oberoi Spa","spa"]];
</script>
<div class = "backgrounder">
    <div class = "text-3xl titlefont-regular p-5 pt-40 text-center">
        Navigating Your Stay
    </div>
    <div class = "text-center">
    {#each contents as content}
    <a href = "./{content[1]}"><p class = "text-black content-regular m-10 text-xl ">{content[0]}</p></a>
    {/each}
    </div>
</div>