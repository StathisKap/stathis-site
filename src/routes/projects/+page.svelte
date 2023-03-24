<script lang="ts">
	import { fade } from 'svelte/transition';
	import { hover } from './hover';

	let projects = ['Blasteroids', 'PathFinder', 'Garduino']; // , 'Third', 'Fourth', 'Fifth', 'Sixth'];
</script>

<div in:fade={{ delay: 100 }}>
	<div>
		<span
			class="block font-mono text-center text-6xl lg:text-6xl sm:text-5xl font-extrabold uppercase pt-5 pb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-800 to-indigo-500 animate-pan"
			style="background-size:200%;">Projects</span
		>
	</div>
	<div
		class="flex flex-wrap gap-3 max-w-full w-auto justify-center items-center align-middle"
		use:hover
		id="cards"
	>
		{#each projects as project, index}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<a href="/projects/{project.toLowerCase()}" class="flex">
				<div class="h-64 w-80 bg-white bg-opacity-10 rounded-lg cursor-none relative card">
					<div class="card-content bg-zinc-900 p-1">
						<div class="flex h-full">
							<div class="text-center m-auto">
								{project}
							</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	#cards:hover > a > .card::after,
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
