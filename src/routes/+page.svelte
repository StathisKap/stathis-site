<script lang="ts" defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js">
	import Logo from './Logo.svelte';
	export let name = 'Stathis';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="flex justify-center">
	<h2 class="mr-4 text-purple-900">Hello {name}!!</h2>
	<input bind:value={name} />
</div>
<p class="text-red-900">I'm looking for a job as a developer</p>