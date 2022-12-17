<svelte:window bind:innerWidth bind:innerHeight />
<script lang="ts">
    import {performDFS, setGraph, result} from './dfs'
    import Node from './Node.svelte'

    let innerWidth = 0; // pathfinder width
    let innerHeight = 0; // pathfinder height 

    let topWidth:number;
    let topHeight:number;

    let tileSize = 20;
    let tileGridWidth: number;
    let tileGridHeight: number;
    $: tileGridWidth = Math.trunc((innerWidth - (innerWidth - topWidth)) / tileSize);
    $: tileGridHeight = Math.trunc((innerHeight - topHeight) / tileSize) - 1;
//    let graph = Array.from(Array(tileGridHeight), () => new Array(tileGridWidth))

    // set the graph that the DFS will be performed on
//    setGraph(graph);
    
    // perform DFS starting from node 0
    //    performDFS(0);

    // subscribe to the result store to update the UI
    $: result.subscribe((result) => {
      console.log(result); // [0, 1, 2]
    });

</script>

<div bind:clientHeight={topHeight} bind:clientWidth={topWidth} class="pb-5">

    <p
    	class="block text-center text-6xl lg:text-6xl sm:text-5xl font-extrabold uppercase underline from-sky-500 to-yellow-300 text-transparent bg-clip-text bg-gradient-to-r"
    >
    	PathFinder
    </p>

    <p> Inner Width: {innerWidth} </p>
    <p> Inner Height: {innerHeight} </p>
    <p> Top Bar Width:  {topWidth} </p>
    <p> Top Bar Height: {topHeight} </p>
    <p> Tile Size: {tileSize} </p>
    <p> Tile Grid Height: {tileGridHeight} </p>
    <p> Tile Grid Width: {tileGridWidth} </p>
</div>

<div class="flex flex-wrap max-w-full">
    {#each {length: tileGridWidth * tileGridHeight} as _, i}
        <Node tileSize={tileSize}
        isStart={ i == (0 * tileGridWidth) + 0 ? true : false}
        isEnd={ i == (14 * tileGridWidth) + 15  ? true : false}/>
    {/each}
</div>