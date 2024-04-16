<script>
    export let name;
    export let about;
    export let more = "";
    export let imageLocation;
    export let map;
</script>
<style>

</style>

<div class = "flex flex-col items-center content-regular mt-5 mb-10 tag">
    <h1 class = "text-2xl content m-5">{name}</h1>
    <a href = "{map}"><img src = "{imageLocation}" alt = "{name}" class = "w-80 border border-8 border-white "></a>
    <p class = "text-center m-3">{about}</p>
    <p class = "text-center m-1">{more}</p>
</div>