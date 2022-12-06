<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import { fade } from 'svelte/transition';
	import Mouse_Circle from './Mouse_Circle.svelte';
	import { onMount } from 'svelte';
	import "../app.css";
	let is_mounted = false;


	onMount(async () => {
		is_mounted = true;
	});
</script>


<svelte:head>
	<title>Stathis Kapnidis</title>
	<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
</svelte:head>

<div class="flex">
	<div class="w-36 min-h-screen relative">
		<Sidebar/>
	</div>
	{#if is_mounted}
		<div in:fade={{delay: 1000}}>
			 <Mouse_Circle/> 
		</div>

		<main class="bg-zinc-900 flex-1 items-stretch min-h-screen text-slate-300 pl-10 pr-10 pt-5">
			<slot/>
		</main>
	{/if}
</div>
