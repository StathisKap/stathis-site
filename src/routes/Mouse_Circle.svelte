<script>
	import { spring } from 'svelte/motion';

	let coords1 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.25
		}
	);

	let coords2 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.55,
			damping: 0.55
		}
	);

	let size = spring(10);
	let color1  = 'lightgray', color2 = 'darkgray';

</script>

<svelte:window
	on:mousemove={(e) => {
		coords1.set({ x: e.clientX, y: e.clientY })
		coords2.set({ x: e.clientX, y: e.clientY })
	}}
	on:mousedown={(e) => {
		size.set(30);
		color1 = "#00f1f1";
		color2 = "#00f1f1";
	}}
	on:mouseup={(e) => {
		size.set(10);
		color1 = "lightgray";
		color2 = "darkgray";
	}}
/>

<svg
	class ="w-full min-h-screen z-50"
>
	<circle cx={$coords1.x} cy={$coords1.y} r={$size} stroke={color1} stroke-width="1" fill-opacity="0"/>
	<circle cx={$coords2.x} cy={$coords2.y} r={$size/4} fill={color2}/>
</svg>

<style>
	:global(body) {
		cursor: none;
	}
	

	
	svg {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
	}
</style>