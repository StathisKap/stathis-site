<script lang="ts" defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js">
	import { fade, fly } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import Typewriter from 'svelte-typewriter';
	import { onDestroy } from 'svelte';

	let is_blinking = false;
	let load_content = false;
	let is_subtitle_done = false;

	$: load_content = is_blinking;

	document.addEventListener('keypress', function (event) {
		if (event.code == 'Space') {
			load_content = true;
		}
	});
</script>

<div in:fade class="text-lg">
	<table>
		<tr>
			<td class="pr-1">$</td>
			<Typewriter
				interval={300}
				delay={1000}
				--cursor-color="#cbd5e1"
				on:done={function () {
					is_blinking = true;
				}}
			>
				<td class="font-Menlo">whoami</td>
			</Typewriter>
			{#if is_blinking}
				<td class="animate-blink">▋</td>
			{/if}
		</tr>
	</table>
</div>

{#if load_content}
	<div in:fly={{ y: -40, duration: 1500 }}>
		<span
			class="block font-mono text-center sm:text-8xl text-7xl font-extrabold uppercase pt-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-800 to-indigo-500 animate-pan"
			style="background-size:200%;">Stathis Kapnidis</span
		>
	</div>
	<div
		class="text-center justify-center text-lg sm:text-xl whitespace-nowrap uppercase pt-6 font-Menlo flex flex-wrap"
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
		<span in:fly={{ y: 40, duration: 1000, delay: 1500 }} class="inline-block"
			>Machine Learning</span
		>
		<span in:fly={{ y: 40, duration: 1000, delay: 1375 }} class="inline-block">&nbsp/&nbsp</span>
		<span in:fly={{ y: 40, duration: 1000, delay: 1500 }} class="inline-block">Robotics</span>
	</div>
{/if}

{#if is_subtitle_done}
	<div in:fade class="pt-12 text-lg">
		<hr class="mt-12 mb-12" />
		<div class="flex flex-row">
			<!--<img src="/Crosswalk.jpg"  alt="Stathis" class="flex w-1/2 h-1/2">-->
			<p class="p-10 text-justify flex flex-1">
				Hello, my name is Stathis Kapnidis, and I am a recent Mechanical Engineering with Robotics
				graduate from the University of Sussex. My passion for robotics and coding has led me to
				pursue a career in Software or Data Engineering. I am highly proficient in Linux, C, and
				Python and possess a broad range of knowledge across various aspects of technology. I
				recently completed a DFE software development bootcamp from QA and scored a perfect 10/10 on
				the final project in August 2022. I am continually expanding my skillset through various
				books and courses on coding. As a team player, I thrive on collaborating with others to
				tackle complex problems and achieve common goals. I am eagerly seeking opportunities to
				contribute my technical expertise and work ethic to challenging projects. I am excited about
				the prospect of joining a driven team and bringing my enthusiasm and dedication to solving
				challenging and important problems.
			</p>
		</div>
		<div class="flex flex-row justify-center items-center pt-5 gap-10">
			<a href="/contact">
				<button
					class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium group bg-gradient-to-br from-indigo-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-slate-200 focus:ring-4 focus:outline-none  focus:ring-fuchsia-800 hover:animate-pan"
				>
					<span
						class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0"
					>
						Contact Me!!
					</span>
				</button>
			</a>
			<a href="/CV.pdf" download>
				<button
					class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium group bg-gradient-to-br from-indigo-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-slate-200 focus:ring-4 focus:outline-none  focus:ring-fuchsia-800 hover:animate-pan"
				>
					<span
						class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0"
					>
						Download CV
					</span>
				</button>
			</a>
		</div>

		<hr class="mt-12 mb-12" />
		<p class="text-xl text-slate-500 text-justify pb-10">
			Website is a work in progress. It is being developed with Svelte, Typescript, and Tailwind. It
			is hosted as a node server within an LXC container on the ProxMox Type 1 Hypervisor, running
			on an old laptop in my house in Greece. The site is accessible through a cloudflare argos
			tunnel, using the `cloudflared` deamon on a different LXC container. The domain name is a free
			one from freenom. So this entire site is 100% from scrath and 100% free. (except power bill
			ofc)
		</p>
	</div>
{/if}
