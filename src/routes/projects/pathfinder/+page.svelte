<script lang="ts">
	import { performDFS, setGraph, result } from './dfs';
	import Node from './Node.svelte';

	enum nodeType {
		'unexplored',
		'start',
		'end',
		'explored',
		'shortestPath'
	}

	let innerWidth = 0; // pathfinder width
	let innerHeight = 0; // pathfinder height

	let topWidth: number;
	let topHeight: number;

	let tileGridWidth: number;
	let tileGridHeight: number;
	$: tileGridWidth = Math.trunc((innerWidth - (innerWidth - topWidth)) / 20);
	$: tileGridHeight = Math.trunc((innerHeight - topHeight) / 20) - 1;

	function buildNodes(rows: number, columns: number) {
		const nodes: any[] = [];
		for (let row = 0; row < rows; row++) {
			const currentRow = [];
			for (let col = 0; col < columns; col++) {
				currentRow.push(0);
			}
			nodes.push(currentRow);
		}
		return nodes;
	}
	$: nodes = buildNodes(tileGridHeight, tileGridWidth);

	$: console.log(nodes);
	$: console.log(nodes.length);

	function setStartAndEnd() {
		nodes[4][10] = nodeType.start;
		nodes[2][11] = nodeType.end;
	}

	// subscribe to the result store to update the UI
	$: result.subscribe((result) => {
		console.log(result); // [0, 1, 2]
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div bind:clientHeight={topHeight} bind:clientWidth={topWidth} class="pb-5">
	<p
		class="block text-center text-6xl lg:text-6xl sm:text-5xl font-extrabold uppercase underline from-sky-500 to-yellow-300 text-transparent bg-clip-text bg-gradient-to-r"
	>
		PathFinder
	</p>
	<p class="bold text-center text-lg">WORK IN PROGRESS</p>

	<p>Inner Width: {innerWidth}</p>
	<p>Inner Height: {innerHeight}</p>
	<p>Top Bar Width: {topWidth}</p>
	<p>Top Bar Height: {topHeight}</p>
	<p>Tile Size: 20</p>
	<p>Tile Grid Height: {tileGridHeight}</p>
	<p>Tile Grid Width: {tileGridWidth}</p>
	<button type="button" class="border-2 border-red-500" on:click={() => setGraph(nodes)}
		>Set Graph</button
	>
	<button type="button" class="border-2 border-red-500" on:click={() => {
        performDFS()
        nodes = nodes}}
		>Perform DFS</button
	>
	<button type="button" class="border-2 border-red-500" on:click={() => setStartAndEnd()}
		>Set Start and End</button
	>
	<button type="button" class="border-2 border-red-500" on:click={() => {nodes = buildNodes(tileGridHeight, tileGridWidth);}}
		>Reset</button
	>
</div>

<div class="flex flex-wrap max-w-full">
	{#each nodes as row, rowIndex}
		{#each row as node, nodeIndex}
			<Node nodeValue={nodes[rowIndex][nodeIndex]} />
		{/each}
	{/each}
</div>