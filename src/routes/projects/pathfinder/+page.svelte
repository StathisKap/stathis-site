<svelte:window bind:innerWidth bind:innerHeight />
<script lang="ts">
	import { afterUpdate } from 'svelte';
    import {performDFS, setGraph, result} from './dfs'
    import Node from './Node.svelte'
	
    enum nodeType {"unexplored", "start", "end", "explored", "shortestPath"};

    let innerWidth = 0; // pathfinder width
    let innerHeight = 0; // pathfinder height 

    let topWidth:number;
    let topHeight:number;

    let tileSize = 20;
    let tileGridWidth: number;
    let tileGridHeight: number;
    $: tileGridWidth = Math.trunc((innerWidth - (innerWidth - topWidth)) / tileSize);
    $: tileGridHeight = Math.trunc((innerHeight - topHeight) / tileSize) - 1;

    function buildNodes(rows:number, columns:number){
        const nodes: any[] = [];
        for (let row = 0; row < rows; row++){
            const currentRow = [];
            for (let col = 0; col < columns; col++){
                currentRow.push(0);
            }
            nodes.push(currentRow);
        }
        return nodes;
    }
    $: nodes = buildNodes(tileGridHeight, tileGridWidth);

    $: console.log(nodes);
    $: console.log(nodes.length);

    function setStartAndEnd(){
        nodes[0][0] = 1;
        nodes[14][0] = 2;
    };

    // set the graph that the DFS will be performed on
    //    setGraph(nodes);
    
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
    <button type="button" class="border-2 border-red-500" on:click={() => setGraph(nodes)}>Set Graph</button>
    <button type="button" class="border-2 border-red-500" on:click={() => performDFS(0)}>Perform DFS</button>
    <button type="button" class="border-2 border-red-500" on:click={() => setStartAndEnd()}>Set Start and End</button>
</div>

<div class="flex flex-wrap max-w-full">
    {#each nodes as row, rowIndex}
            {#each row as node, nodeIndex}
                <Node tileSize={tileSize} nodeValue={nodes[rowIndex][nodeIndex]}/>
            {/each}
    {/each}
</div>