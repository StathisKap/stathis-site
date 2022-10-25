<script lang="ts">
	import Logo from './Logo.svelte';

	let pages: Array<String> = ['Projects', 'Contact'];
</script>

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
<link rel="stylesheet" href="/src/output.css" />

<div class="flex min-h-screen">
	<aside
		class="
        w-1/5
      bg-gray-700
        text-center
      text-gray-100
        text-lg
        inset-y-0
        left-0
        z-10
        "
	>
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
	</aside>
	<div>
		<slot />
	</div>
</div>