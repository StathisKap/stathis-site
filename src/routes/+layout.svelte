<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import Logo from './Logo.svelte';
	import { fade } from 'svelte/transition';
	import Mouse_Circle from './Mouse_Circle.svelte';
	import { onMount } from 'svelte';
	import Device from 'svelte-device-info'
	import '../app.css';
	import Menu from './Menu.svelte';

	let isMenuOpen: boolean = false;
	let is_mounted = false;
	let screen_is_large = true;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleResize() {
		if (window.innerWidth < 768) {
			screen_is_large = false;
		} else {
			screen_is_large = true;
		}
	}

	onMount(() => {
		is_mounted = true;
	});
</script>

<svelte:head>
	<title>Stathis Kapnidis</title>
	<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
</svelte:head>

<div class="flex">
		<div class="w-36 min-h-screen relative hidden sm:block">
			<Sidebar />
		</div>
		<header class="flex justify-between items-center h-13 bg-stone-800 fixed inset-x-0 z-40 sm:hidden">
			<div class="h-full w-32">
				<Logo />
			</div>
			<div class="flex-grow-2" />
			<div class="p-4 space-y-2 rounded shadow" on:click={toggleMenu} on:keydown={toggleMenu}>
				<span class="block w-8 h-0.5 bg-gray-100" />
				<span class="block w-8 h-0.5 bg-gray-100" />
				<span class="block w-8 h-0.5 bg-gray-100" />
			</div>
		</header>
		<Menu isOpen={isMenuOpen} />
	{#if is_mounted}
		{#if !Device.isPhone}
			<div in:fade={{ delay: 1000 }}>
				<Mouse_Circle />
			</div>
		{/if}
		<main
			class="bg-zinc-900 flex-1 h-full w-full items-stretch min-h-screen text-slate-300 mx-3 sm:mx-10 sm:pt-5 pt-16"
		>
			<slot />
		</main>
	{/if}
</div>
