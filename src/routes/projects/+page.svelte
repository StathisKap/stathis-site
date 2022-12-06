<script lang="ts">
	import { fade } from 'svelte/transition';
	import { hover } from "./hover.ts"

	let slugs = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];

</script>

<div
	in:fade={{ delay: 100 }}
	class="flex flex-wrap gap-3 max-w-full w-auto justify-center items-center"
	use:hover
>
	{#each slugs as slug, index}
		<div class="h-64 w-80 bg-zinc-900 border-2 border-white border-opacity-10 cursor-none relative card">
			{index} - {slug}
		</div>
	{/each}
</div>

<style>
	.card::before {
		background: radial-gradient(
		800px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.1),
			transparent 40%
		);
		height: 100%;
		width: 100%;
		left: 0px;
		top: 0px;
		position: absolute;
		content: '';
		border-radius: inherit;
		z-index: 2;
	}
</style>
