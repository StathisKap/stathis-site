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
		allMarkdownLoaded = true;
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
	<Loading />
{/if}
<p
	class="block text-center text-6xl xl:text-6xl sm:text-5xl font-extrabold uppercase underline from-sky-500 to-yellow-300 text-transparent bg-clip-text bg-gradient-to-r pb-10"
>
	Garduino
</p>

<div id="Images" class="flex flex-col gap-3 justify-center items-center align-middle pb-7">
	<iframe
		src="https://www.youtube.com/embed/Hn0Y_s4RmP8"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
		class="w-5/6 aspect-video"
	/>
	<img src="/Garduino1.png" alt="Garduino" class="w-5/6 aspect-video" />
	<!--	<img src="/Garduino2.png" alt="Garduino" class="w-[560px]" /> -->
</div>
<div class="flex flex-row justify-center items-center pt-5 pr-12 gap-10">
	<a href='https://github.com/StathisKap/Garduino'>
		<button
			class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium group bg-gradient-to-br from-indigo-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-slate-200 focus:ring-4 focus:outline-none  focus:ring-fuchsia-800 hover:animate-pan"
		>
			<span
				class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0"
			>
				GitHub Repo
			</span>
		</button>
	</a>
</div>

<p id="MD" class="prose xl:max-w-none text-inherit">
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
