<script lang="ts">
	import Logo from './Logo.svelte';
	let pages: Array<string> = ['Projects', 'Contact'];
</script>

<div class="flex flex-col flex-1 fixed top-0 left-0 min-h-screen w-1/5 bg-stone-900 m-0">
	<nav
		class="
        text-center
      text-gray-100
    	text-lg
        "
	>
		<Logo />
		<div class="flex-1">
			{#each pages as page}
				<a href="/{page.toLowerCase()}">
					<div class="border-b-2 border-zinc-800 hover:text-teal-300 duration-200">
						<div class="m-3 leading-8 ">
							{page}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</nav>
</div>
