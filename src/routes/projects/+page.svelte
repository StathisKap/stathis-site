<script lang="ts">
	import { fade } from 'svelte/transition';

	function handleMouse(e:MouseEvent) {
		for (const card of document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>){
			const rect = card.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;
			
			card.style.setProperty("--mouse-x", `$(x)px`);
			card.style.setProperty("--mouse-y", `$(y)px`);
		}
	}
</script>


<div
	in:fade={{ delay: 100 }}
	class="flex flex-wrap gap-3 max-w-full w-auto justify-center items-center"
>
	<div class="h-64 w-80 bg-zinc-900 border-2 border-white border-opacity-10 cursor-none relative card" />
	<div class="h-64 w-80 bg-zinc-900 border-2 border-white border-opacity-10 cursor-none relative card" />
	<div class="h-64 w-80 bg-zinc-900 border-2 border-white border-opacity-10 cursor-none relative card" />
	<div class="h-64 w-80 bg-zinc-900 border-2 border-white border-opacity-10 cursor-none relative card" />
	<div class="h-64 w-80 bg-zinc-900 border-2 border-white border-opacity-10 cursor-none relative card" />
	<div class="h-64 w-80 bg-zinc-900 border-2 border-white border-opacity-10 cursor-none relative card" />
</div>

<style>
	.card::before {
		background: radial-gradient(
/*			800px circle at var(--mouse-x) var(--mouse-y), */
			800px circle at 100px 100px,
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
