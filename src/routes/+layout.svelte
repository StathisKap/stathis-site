<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import Logo from './Logo.svelte';
	import { fade } from 'svelte/transition';
	import Mouse_Circle from './Mouse_Circle.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	let is_mounted = false;

	onMount(async () => {
		is_mounted = true;
	});

	let screen_is_large = true;

	onMount(() => {
		window.addEventListener('resize', handleResize);
	});

	function handleResize() {
		if (window.innerWidth < 768) {
			screen_is_large = false;
		} else {
			screen_is_large = true;
		}
	}
</script>

<svelte:head>
	<title>Stathis Kapnidis</title>
	<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
</svelte:head>

<div class="flex">
	{#if screen_is_large}
		<div class="w-36 min-h-screen relative">
			<Sidebar />
		</div>
	{:else}
	<header class="flex justify-between items-center h-12 bg-stone-800 fixed inset-x-0 top-0">
		<div class="h-16 w-32 pt-1">
		  <Logo />
		</div>
		<div class="flex-grow-2"></div>
		<div class="p-4 space-y-2 rounded shadow">
		  <span class="block w-8 h-0.5 bg-gray-100"></span>
		  <span class="block w-8 h-0.5 bg-gray-100"></span>
		  <span class="block w-8 h-0.5 bg-gray-100"></span>
		</div>
	  </header>
	{/if}
	{#if is_mounted}
		{#if screen_is_large}
			<div in:fade={{ delay: 1000 }}>
				<Mouse_Circle />
			</div>
		{/if}

		<main class="bg-zinc-900 flex-1 items-stretch min-h-screen text-slate-300 pl-10 pr-10 md:pt-5 lg:pt-5 xl:pt-5 2xl:pt-5 pt-16">
			<slot />
		</main>
	{/if}
</div>
