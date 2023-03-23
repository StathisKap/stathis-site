<script>
	import { onMount } from 'svelte';
	import Loading from '../Loading.svelte';

	let allImagesLoaded = false;

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

{#if !allImagesLoaded}
	<Loading />
{/if}
<p
	class="block text-center text-6xl lg:text-6xl sm:text-5xl font-extrabold uppercase underline from-sky-500 to-yellow-300 text-transparent bg-clip-text bg-gradient-to-r"
>
	Blasteroids
</p>
<div id="Images" class="flex gap-3 max-w-full w-auto justify-center items-center align-middle">
	<img src="/Blasteroids1.png" alt="Blasteroids" class="w-1/2" />
	<img src="/Blasteroids2.png" alt="Blasteroids" class="w-1/2" />
</div>

<p>
	<span class="underline text-lg bold font-Menlo pt-10">How This Works:</span>
</p>
<p>
	<span> It uses C and allegro 5 to recreate the asteroids game </span>
</p>
