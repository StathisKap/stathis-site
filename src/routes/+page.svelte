<script lang="ts" defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';
	let visible = false;
	let blink = false;

	onMount(async () => {
		visible = true;
	});
</script>

{#if visible}
	<div transition:fade class="text-lg">

		<!--<Mouse_Circle/>  -->
		<table>
			<tr>
				<td class="pr-1">$</td>
				<Typewriter
					interval={300}
					delay={1000}
					--cursor-color="#d3e5f5"
					on:done={function () {
						blink = true;
					}}
				>
				<td class="font-Menlo">whoami</td>
				</Typewriter>
				{#if blink}
					<td class="animate-blink">▐▌</td>
				{/if}
			</tr>
		</table>
	</div>
{/if}

{#if blink}
<div transition:fly="{{ y: -40, duration: 1500 }}">
	<span class="block font-mono text-center text-8xl font-extrabold uppercase pt-10">Stathis Kapnidis</span>
</div>
{/if}