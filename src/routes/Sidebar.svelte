<!--
 *
 *
 *
-->
<script lang="ts">
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
<div class="flex flex-col fixed top-0 left-0 min-h-screen w-40 bg-stone-900 m-0 shadow-2xl">
	<nav class="text-center text-slate-200 text-lg">
		<div class="shadow-2xl">
			<a href="/">
				<img src="/Logo.svg" alt="Logo" class="object-contain bg-slate-100 hover:bg-teal-300" />
			</a>
		</div>
		<div class="flex flex-col flex-0.5 min-h-screen justify-center border-t-2 border-zinc-800">
			<hr class="border-t-2 border-zinc-800" />
			{#each pages as page}
				<a href="/{page.toLowerCase()}">
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
					<div class="pr-2">
						<a href={link}>
							<img
								src="/{svg}"
								alt={link}
								class="w-full justify-center h-6 bg-slate-100 rounded-full shadow-2xl border-2 border-neutral-400 hover:border-teal-200 hover:bg-teal-200"
							/>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</nav>
</div>
