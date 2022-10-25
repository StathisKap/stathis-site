<script lang="ts">
	import Logo from './Logo.svelte';

	let pages: Array<String> = ['Projects', 'Contact'];
</script>

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
<link rel="stylesheet" href="/src/output.css" />

<div class="flex flex-row">
	<aside
		class="
        w-1/5
      bg-gray-700
        text-center
      text-gray-100
        text-lg
        fixed 
        inset-y-0
        left-0
        z-10
        "
	>
		<div class="flex flex-col">
			<div class="bg-slate-100">
				<Logo />
			</div>
			{#each pages as page}
				<div class="border-b-2 border-black">
					<div class="m-3 leading-8">
						<a href="/{page.toLowerCase()}">{page}</a>
					</div>
				</div>
			{/each}
		</div>
	</aside>
	<div class="inline-flex right-0 w-4/5">
		<slot />
	</div>
</div>
