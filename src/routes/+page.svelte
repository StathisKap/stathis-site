<script lang="ts" defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js">
	import { fade, fly } from 'svelte/transition';
	import { writable } from 'svelte/store'; 
	import Typewriter from 'svelte-typewriter';
	import { onDestroy } from 'svelte';

	let is_blinking = writable(false);
	let load_content = $is_blinking;
	let is_subtitle_done = false;

	const unsubscribe = is_blinking.subscribe(value => {
		load_content = value;
	})

	document.addEventListener('keypress', function (event) {
		if (event.code == "Space"){
			load_content = true;
		}
	});

	onDestroy(unsubscribe);
</script>

<div in:fade class="text-lg">
	<table>
		<tr>
			<td class="pr-1">$</td>
			<Typewriter
				interval={300}
				delay={1000}
				cursor={false}
				on:done={function () {
					is_blinking.set(true);
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

{#if load_content}
	<div in:fly={{ y: -40, duration: 1500 }}>
		<span
			class="block font-mono text-center text-8xl lg:text-8xl sm:text-5xl font-extrabold uppercase pt-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-800 to-indigo-500 animate-pan"
			style="background-size:200%;">Stathis Kapnidis</span
		>
	</div>
	<div
		class="text-center text-xl lg:text-xl sm:text-lg whitespace-nowrap uppercase pt-6 font-Menlo"
	>
		<span
			in:fly={{ y: 40, duration: 1000, delay: 1000 }}
			class="inline-block"
			on:introend={function () {
				is_subtitle_done = true;
			}}>Software Dev</span
		>
		<span in:fly={{ y: 40, duration: 1000, delay: 1125 }} class="inline-block">&nbsp/&nbsp</span>
		<span in:fly={{ y: 40, duration: 1000, delay: 1250 }} class="inline-block"
			>Mechanical Engineering</span
		>
		<span in:fly={{ y: 40, duration: 1000, delay: 1375 }} class="inline-block">&nbsp/&nbsp</span>
		<span in:fly={{ y: 40, duration: 1000, delay: 1500 }} class="inline-block">Robotics</span>
	</div>
{/if}

{#if is_subtitle_done}
	<div in:fade class="pt-12 text-lg">
		<hr class="mt-12 mb-12" />

		<div class="flex flex-row">
			<!--			<img src="/Crosswalk3.jpg"  alt="Stathis" class="flex w-1/2 h-1/2"> -->
			<p class="flex flex-1 p-5 text-center">
				&nbsp; &nbsp Mechanical Engineering with Robotics Graduate from the University of Sussex
				looking for an Engineering or Software Engineering Job. Preferably in London. I have the
				right to work in the UK under the EUSS. I have Pre-settled Status, and am currently applying
				for fully settled. Fluent in English. Fast Learner. Very eager to work.
			</p>
		</div>
		<hr class="mt-12 mb-12" />
		<p class="text-xl text-slate-500 text-center">
			Website is a work in progress. It is being developed with Svelte, Typescript, and Tailwind. It
			is hosted as a node server within an LXC container on the ProxMox Type 1 Hypervisor, running
			on an old laptop in my house in Greece. The site is accessible through a cloudflare argos
			tunnel, using the `cloudflared` deamon on a different LXC container. The domain name is a free
			one from freenom. So this entire site is 100% from scrath and 100% free. (except power bill
			ofc)
		</p>
	</div>
{/if}
