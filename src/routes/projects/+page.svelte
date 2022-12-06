<script lang="ts">
	import { fade } from 'svelte/transition';
	import { hover } from './hover';

	let slugs = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
</script>

<div
	in:fade={{ delay: 100 }}
	class="flex flex-wrap gap-3 max-w-full w-auto justify-center items-center"
	use:hover
	id="cards"
>
	{#each slugs as slug, index}
		<div class="h-64 w-80 bg-white bg-opacity-10 rounded-lg cursor-none relative card">
			<div class="card-content bg-zinc-900 p-1">
				{index} - {slug}
			</div>
		</div>
	{/each}
</div>

<style>
	#cards:hover > .card::after,
	.card:hover::after,
	.card:hover::before {
		opacity: 1;
	}

	.card::after,
	.card::before {
		height: 100%;
		width: 100%;
		left: 0px;
		top: 0px;
		position: absolute;
		content: '';
		opacity: 0;
		transition: opacity 500ms;
		border-radius: inherit;
	}

	.card::before {
		background: radial-gradient(
			800px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.06),
			transparent 40%
		);
		z-index: 3;
	}

	.card::after {
		background: radial-gradient(
			600px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.4),
			transparent 40%
		);
		z-index: 1;
	}

	.card > .card-content {
		border-radius: inherit;
		margin: 1px;
		height: calc(100% - 2px);
		width: calc(100% - 2px);
		position: relative;
		z-index: 2;
	}
</style>
