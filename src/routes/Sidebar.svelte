<script lang="ts">
	import Logo from './Logo.svelte';
	let pages: Array<string> = ['Projects', 'Contact'];
</script>

<div class="flex flex-col fixed top-0 left-0 min-h-screen w-1/5 bg-stone-900 m-0 shadow-2xl">
	<nav
		class="
        text-center
      text-gray-100
    	text-lg
        "
	>
		<div class="shadow-2xl">
			<Logo />
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
				<div class="pr-2">
					<a href="https://github.com/StathisKap">
						<img
							src="/GH.svg"
							alt="https://github.com/StathisKap"
							class="w-full justify-center h-6 bg-slate-100 rounded-full shadow-2xl border-2 border-neutral-400"
						/>
					</a>
				</div>
				<div class="pr-2">
					<a href="https://www.youtube.com/channel/UCWKcP-sabZ7XJpHVsqA1Ikg/videos">
						<img
							src="/Youtube.svg"
							alt="https://www.youtube.com/channel/UCWKcP-sabZ7XJpHVsqA1Ikg/videos"
							class="w-full justify-center bg-slate-100 h-6 rounded-full border-2 border-neutral-400"
						/>
					</a>
				</div>
				<div>
					<a href="https://tryhackme.com/p/St.K">
						<img
							src="/THM.svg"
							alt="https://fontawesomeicons.com/download/saveSvg"
							class="w-full justify-center bg-slate-100 h-6 rounded-full border-2 border-neutral-400"
						/>
					</a>
				</div>
			</div>
		</div>
	</nav>
</div>
