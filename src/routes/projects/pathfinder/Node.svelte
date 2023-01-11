<script lang="ts">
	import { onMount } from 'svelte';
	export let tileSize:number;

	onMount(async () => {
		tileSize = 20;
	});

	enum nodeType {"unexplored", "start", "end", "explored", "shortestPath"};
	let state = {	[nodeType.unexplored as number]: "bg-white",
	 				[nodeType.start as number]: "bg-red-700",
					[nodeType.end as number]: "bg-yellow-500",
					[nodeType.explored as number]: "bg-blue-300",
					[nodeType.shortestPath as number]: "bg-green-500"};
	export let nodeValue:number = 0;

	let nodeClass:string;
	$: nodeClass = state[nodeValue];
</script>

<div
	class="border-black border-2
	w-[{tileSize}px] h-[{tileSize}px]
	{nodeClass}"/>