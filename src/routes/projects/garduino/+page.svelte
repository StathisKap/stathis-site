<script lang="ts">
	import { onMount } from 'svelte';
	import Loading from '../Loading.svelte';
	import Markdown from 'svelte-markdown';

	let markdownContent: string;
	let allImagesLoaded = false;
	let allMarkdownLoaded = false;
	let allLoaded = false;
	$: allLoaded = true ? allImagesLoaded && allMarkdownLoaded : false;

	async function loadMarkdown() {
		const response = await fetch(
			'https://raw.githubusercontent.com/StathisKap/Garduino/main/README.md'
		);
		markdownContent = await response.text();
	}

	onMount(() => {
		loadMarkdown();
		allMarkdownLoaded = true
	});


	onMount(() => {
		const imagesDiv = document.getElementById('Images');
		const images = imagesDiv?.querySelectorAll('img');
		let loadedCount = 0;

		images?.forEach((img) => {
			img.addEventListener('load', () => {
				loadedCount++;
				if (loadedCount === images.length) {
					allImagesLoaded = true;
				}
			});
		});
	});
</script>

{#if !allLoaded}
	<Loading/>
{/if}
<p
	class="block text-center text-6xl lg:text-6xl sm:text-5xl font-extrabold uppercase underline from-sky-500 to-yellow-300 text-transparent bg-clip-text bg-gradient-to-r pb-10"
>
    Garduino	
</p>

<div id="Images" class="flex flex-col gap-3 justify-center items-center align-middle pb-7">
    <iframe src="https://www.youtube.com/embed/Hn0Y_s4RmP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="w-[560px] h-[315px] lg:w-[1120px] lg:h-[630px]"></iframe>
	<img src="/Garduino1.png" alt="Garduino" class="w-[560px] h-[315px] lg:w-[1120px] lg:h-[630px]" />
<!--	<img src="/Garduino2.png" alt="Garduino" class="w-[560px]" /> -->
</div>

<p id="MD" class="prose lg:max-w-none text-inherit">
	<Markdown
		source={markdownContent}
		options={{
			gfm: true
		}}
	/>
</p>

<style>
	.prose {
		--tw-prose-headings: rgb(203 213 225);
		--tw-prose-links: rgb(203 213 225);
		--tw-prose-code: rgb(203 213 225);
		--tw-prose-bold: rgb(203 213 225);
		--tw-prose-quotes: rgb(203 213 225);
	}
</style>

