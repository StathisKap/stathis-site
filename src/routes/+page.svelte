<script lang="ts">
	import { onMount } from 'svelte';
	
	export let name = 'Stathis';

	let canvas:HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		let frame = requestAnimationFrame(loop);

		function loop(t:number) {
			frame = requestAnimationFrame(loop);

			const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height);

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4;
				const x = i % canvas.width;
				const y = i / canvas.width >>> 0;

				const r = 64 + (128 * x / canvas.width) + (64 * Math.sin(t / 1000));
				const g = 64 + (128 * y / canvas.height) + (64 * Math.cos(t / 1000));
				const b = 128;

				imageData.data[p + 0] = r;
				imageData.data[p + 1] = g;
				imageData.data[p + 2] = b;
				imageData.data[p + 3] = 255;
			}

			ctx!.putImageData(imageData, 0, 0);
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2 style="color:violet">
	Hello {name}!!
</h2>
<input bind:value={name}>

<div>
	<p style="color:red">
		I'm looking for a job as a developer
	</p>
</div>

<canvas
	bind:this={canvas}
	width={32}
	height={32}
></canvas>


<style>
	canvas {
		width: 100%;
		height: 100%;
		background-color: #666;
		-webkit-mask: url(/assets/logo.svg) 50% 50% no-repeat;
		mask: url(/assets/logo.svg) 50% 50% no-repeat;
	}
</style>

