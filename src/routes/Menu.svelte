<script lang="ts">
	import Logo from './Logo.svelte';
	import { fade } from 'svelte/transition';

	let pages: Array<string> = ['Projects', 'Contact'];
	let links = {
		'GH.svg': 'https://github.com/StathisKap',
		'Youtube.svg': 'https://www.youtube.com/channel/UCWKcP-sabZ7XJpHVsqA1Ikg/videos',
		'THM.svg': 'https://tryhackme.com/p/St.K',
		'LinkedIn.svg': 'https://www.linkedin.com/in/stathis-kapnidis-1b6676138'
	};

	export let isOpen: boolean = false;
</script>

{#if isOpen}
		<div class="flex flex-col top-0 left-0 h-full w-full bg-stone-900 m-0 shadow-2xl fixed z-10" in:fade={{duration: 250}} out:fade={{duration: 250}}>
		<nav class="text-center text-slate-200 text-lg">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="p-4 space-y-2 rounded shadow right-0 fixed bg-gray-800" on:click={() => {isOpen = false}}>
				<span class="block w-8 h-0.5 bg-gray-100" />
				<span class="block w-8 h-0.5 bg-gray-100" />
				<span class="block w-8 h-0.5 bg-gray-100" />
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="shadow-2xl" on:click={() => {isOpen = false}}>
				<Logo />
			</div>
			<div class="flex flex-col flex-0.5 min-h-screen justify-center border-t-2 border-zinc-800">
				<hr class="border-t-2 border-zinc-800" />
				{#each pages as page}
					<a href="/{page.toLowerCase()}" on:click={() => {isOpen = false}}>
						<div class="border-b-2 border-zinc-800 hover:text-teal-300">
							<div class="m-3 leading-8">
								{page}
							</div>
						</div>
					</a>
				{/each}
				<div class="h-40" />
				<div class="flex self-center relative bottom-1/4">
					{#each Object.entries(links) as [svg, link]}
						<div class="pr-2 w-12 h-12 sm:w-16 sm:h-16 md:w-34 md:h-34">
							<a href={link}>
								<img
									src="/{svg}"
									alt={link}
									class="justify-center bg-slate-100 rounded-full shadow-2xl border-2 border-neutral-400 hover:border-teal-200 hover:bg-teal-200"
								/>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</nav>
	</div>
{/if}
