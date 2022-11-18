<script lang="ts" defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js">
	import { fade, fly } from 'svelte/transition';
	import Typewriter from 'svelte-typewriter';
	let is_blinking = false;
	let is_subtitle_done = false;

</script>

<div in:fade class="text-lg">
	<table>
		<tr>
			<td class="pr-1">$</td>
			<Typewriter
				interval={300}
				delay={1000}
				--cursor-color="#d3e5f5"
				on:done={function () {
					is_blinking = true;
				}}
			>
			<td class="font-Menlo">whoami</td>
			</Typewriter>
			{#if is_blinking}
				<td class="animate-blink">▐▌</td>
			{/if}
		</tr>
	</table>
</div>

{#if is_blinking}
<div in:fly="{{ y: -40, duration: 1500 }}">
	<span class="block font-mono text-center text-8xl lg:text-8xl sm:text-5xl font-extrabold uppercase pt-10">Stathis Kapnidis</span>
</div>
<div class="text-center text-xl lg:text-xl sm:text-lg whitespace-nowrap uppercase pt-6 font-Menlo">
	<span in:fly="{{ y: 40, duration: 1000, delay: 1000}}" class="inline-block"  on:introend={function () { is_subtitle_done = true}}>Software Dev</span>
	<span in:fly="{{ y: 40, duration: 1000, delay: 1125}}" class="inline-block">&nbsp/&nbsp</span>
	<span in:fly="{{ y: 40, duration: 1000, delay: 1250}}" class="inline-block">Mechanical Engineering</span>
	<span in:fly="{{ y: 40, duration: 1000, delay: 1375}}" class="inline-block">&nbsp/&nbsp</span>
	<span in:fly="{{ y: 40, duration: 1000, delay: 1500}}" class="inline-block">Robotics</span>
</div>
{/if}

{#if is_subtitle_done}
	<div in:fade class="pt-12 text-lg">
		&nbsp;
		&nbsp;
		&nbsp;
		&nbsp;
		Mechanical Engineering with Robotics Graduate from the University of Sussex looking for an Engineering or Software Engineering Job.
 		Preferably in London.
 		I have the right to work in the UK under the EUSS.
 		I have Pre-settled Status, and am currently applying for fully settled.
 		Fluent in English.
 		Fast Learner.
 		Very eager to work.

		<hr class="p-12">

	</div>
{/if}