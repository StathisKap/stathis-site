<script lang="ts" defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';
	let visible = false;
	let blink = false;
	let interval = 300;

	onMount(async () => {
		visible = true;
	});

	function TypewriterDone() {
		blink = true;
	}
</script>

{#if visible}
	<div transition:fade>
		<h1>Welcome to SvelteKit</h1>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
		<!--<Mouse_Circle/>  -->
		<table>
			<tr>
				<td data-static>$ </td>
				<Typewriter
					{interval}
					delay={interval * 3}
					--cursor-color="#d3e5f5"
					on:done={TypewriterDone}
				>
					<td>whoami</td>
				</Typewriter>
				{#if blink}
					<td class="animate-blink">▐▌</td>
				{/if}
			</tr>
		</table>
	</div>
{/if}
