<!--
 *
 *
 *
-->
<script lang="ts">
	import { fly } from 'svelte/transition';

	/**
	 *
	 *
	 *
	 */
	export let isOpen: boolean = false;

	/**
	 *
	 *
	 *
	 */
	let pages: Array<string> = ['Projects', 'Contact'];
	let links = {
		'GH.svg': 'https://github.com/StathisKap',
		'Youtube.svg': 'https://www.youtube.com/channel/UCWKcP-sabZ7XJpHVsqA1Ikg/videos',
		'THM.svg': 'https://tryhackme.com/p/St.K',
		'LinkedIn.svg': 'https://www.linkedin.com/in/stathis-kapnidis-1b6676138'
	};
</script>


<!--
 *
 *
 *
-->
{#if isOpen}
	<div
		class="fixed inset-0 bg-black bg-opacity-50 z-40"
		on:click={() => {isOpen = false}}
		on:keydown={(e) => e.key === 'Escape' && (isOpen = false)}
		role="button"
		tabindex="0"
	></div>

	<div
		class="fixed top-0 right-0 h-full w-80 bg-zinc-900 shadow-2xl z-50 flex flex-col"
		in:fly={{x: 320, duration: 300}}
		out:fly={{x: 320, duration: 300}}
	>
		<button
			class="absolute top-4 right-4 text-slate-200 hover:text-teal-300 transition-colors"
			on:click={() => {isOpen = false}}
			aria-label="Close menu"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
			</svg>
		</button>

		<div class="flex flex-col h-full text-slate-200 pt-16">
			<div class="px-6 pb-8 border-b-2 border-zinc-800">
				<a href="/" on:click={() => {isOpen = false}}>
					<img src="/Logo.svg" alt="Logo" class="w-full mx-auto bg-slate-100 hover:bg-teal-300 transition-colors shadow-2xl shadow-black" />
				</a>
			</div>

			<nav class="flex-1 py-6 text-center">
				{#each pages as page}
					<a
						href="/{page.toLowerCase()}"
						on:click={() => {isOpen = false}}
						class="block px-6 py-4 text-lg border-b border-zinc-800 hover:text-teal-300 hover:bg-zinc-800 transition-colors"
					>
						{page}
					</a>
				{/each}
			</nav>

			<!-- Social Links -->
			<div class="px-6 py-8 border-t-2 border-zinc-800">
				<div class="flex justify-center space-x-4">
					{#each Object.entries(links) as [svg, link]}
						<a
							href={link}
							class="w-10 h-10 bg-slate-100 rounded-full border-2 border-neutral-400 hover:border-teal-200 hover:bg-teal-200 transition-colors flex items-center justify-center"
						>
							<img src="/{svg}" alt={link} class="w-6 h-6" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}