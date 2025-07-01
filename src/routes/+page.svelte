<!--
 *
 *
 *
-->
<script lang="ts" defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js">
  import { fade, fly } from 'svelte/transition';
  import Typewriter from 'svelte-typewriter';
  import { is_blinking, load_content, is_subtitle_done } from '../lib/store';

  /**
   *
   *
   *
   */
  const subheadings = [
    'Software Dev',
    'Mechanical Engineering',
    'Machine Learning',
    'DevOps',
  ]

  /**
   *
   *
   *
   */
  const bullet_points = [
    'DevOps Engineer with a passion for automation and cloud technologies.',
    'AI Engineer with experience in Computer Vision and Natural Language Processing. (CNNs, RNNs, LLMs)',
    'Web Developer w/ SvelteKit and TailwindCSS',
    'Kubernetes, Hadoop, Spark, Ansible, Terraform, PostgresSQL',
    'Highly proficient in Linux, C, and Python.',
    'Mechanical Engineering with Robotics graduate from the University of Sussex',
  ]

  /**
   *
   *
   *
   */
  let imageLoaded = false;

  function handleImageLoad() {
    imageLoaded = true;
  }

  /**
   *
   *
   *
   */
  $: load_content.set($is_blinking);

  /**
   *
   *
   *
   */
  $: canShowContent = $is_subtitle_done && imageLoaded;

  /**
   *
   *
   *
   */
  document.addEventListener('keypress', function (event) {
    if (event.code == 'Space') {
      $load_content = true;
      $is_blinking = true;
    }
  });
</script>


<!--
 *
 *
 *
-->
<div in:fade class="text-lg">
  <table>
    <tr>
      <td class="pr-1">$</td>
      <Typewriter
        interval={300}
        delay={1000}
        --cursor-color="#cbd5e1"
        on:done={function () {
          $is_blinking = true;
        }}
      >
        <td class="font-Menlo">whoami</td>
      </Typewriter>
      {#if $is_blinking}
        <td class="animate-blink">▋</td>
      {/if}
    </tr>
  </table>
</div>

{#if $load_content}
  <div in:fly={{ y: -40, duration: 1500 }} class="flex justify-center">
    <span
      class="block font-mono text-center sm:text-8xl text-7xl font-extrabold uppercase pt-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-800 to-indigo-500 animate-pan"
      style="background-size:200%;">Stathis Kapnidis</span
    >
  </div>
  <div
    class="text-center justify-center text-lg sm:text-xl whitespace-nowrap uppercase pt-6 font-Menlo flex flex-wrap w-full"
  >
    <span
      in:fly={{ y: 40, duration: 1000, delay: 1000 }}
      class="inline-block"
      on:introend={function () {
        $is_subtitle_done = true;
      }}>Software Dev</span
    >
    {#each subheadings as subheading}
      <span in:fly={{ y: 40, duration: 1000, delay: 1125 }} class="inline-block">&nbsp/&nbsp</span>
      <span in:fly={{ y: 40, duration: 1000, delay: 1250 }} class="inline-block" >{subheading}</span>
    {/each}
  </div>
{/if}

{#if $is_subtitle_done}
  <div in:fade class="pt-12 text-lg container mx-auto max-w-6xl">
    <hr class="my-12" />
    <div class="py-5 flex flex-col sm:flex-row justify-center align-middle items-center">
      <div class="relative flex w-full sm:w-1/2 px-5 mb-8 sm:mb-0">
        {#if !imageLoaded}
          <div class="w-full h-64 bg-gray-800 animate-pulse rounded"></div>
        {/if}
        <picture class="w-full transition-opacity duration-500 {imageLoaded ? 'opacity-100' : 'opacity-0'} {!imageLoaded ? 'absolute inset-0' : ''}">
          <source srcset="/Crosswalk.avif" type="image/avif">
          <source srcset="/Crosswalk.webp" type="image/webp">
          <img
            src="/Crosswalk.avif"
            alt="Stathis"
            class="w-full h-auto object-cover"
            loading="eager"
            on:load={handleImageLoad}
          >
        </picture>
      </div>
      <div class="px-10 flex place-self-stretch w-full sm:w-auto">
        <ul class="list-disc space-y-4">
          {#each bullet_points as bullet_point}
            <li>
              {bullet_point}
            </li>
          {/each}
        </ul>
      </div>
    </div>

    {#if canShowContent}
      <div in:fade={{ delay: 300 }} class="flex flex-row justify-center items-center pt-5 gap-10">
        <a href="/contact">
          <button
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium group bg-gradient-to-br from-indigo-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-slate-200 focus:ring-4 focus:outline-none  focus:ring-fuchsia-800 hover:animate-pan transition-all duration-500"
          >
            <span
              class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0"
            >
              Contact Me!!
            </span>
          </button>
        </a>
        <a href="https://cdn.stathis-kapnidis.com/stathis-site/documents/CV.pdf" target="_blank">
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

      <hr class="my-12" />
      <p class="text-xl text-slate-500 text-justify">
        Website is being developed with Svelte, Typescript, and Tailwind. It
        is hosted on my k3s cluster on a Hetzner server.
        <br>
        <br>
        The pictures and CV are hosted on my own minIO server.
      </p>
      <hr class="my-12" />
    {/if}
  </div>
{/if}
