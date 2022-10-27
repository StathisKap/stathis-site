<script lang="ts" defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	export let name = 'Stathis';
	let visible:boolean = false;

	onMount(async () => {
		visible = true;
	});
</script>

{#if visible}
	<div transition:fade>
		<h1>Welcome to SvelteKit</h1>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

		<h2 class="mr-4 text-purple-900">Hello {name}!!</h2>
		<input bind:value={name} />
		<p class="text-red-900">I'm looking for a job as a developer</p>
	</div>
{/if}