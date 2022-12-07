<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{delay: 100}} class="sm:w-full lg:pr-44 lg:pl-44 text-slate-200">
	<h1 class="text-2xl italic border-2 border-neutral-600 p-2 flex justify-between items-center">
		Contact Form
			<a href="/CV.pdf" download>
				<button
					class="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium group bg-gradient-to-br from-indigo-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-slate-200 focus:ring-4 focus:outline-none  focus:ring-fuchsia-800 hover:animate-pan"
				>
					<span
						class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0"
					>
						Download CV
					</span>
				</button>
			</a>
	</h1>
	<form class="grid" action="https://formsubmit.co/7521ddf3e3eb46d2668f8f9b2deeda2a" method="POST">
		<div>
			<p class="font-Menlo inline-block">To:</p>
			<code class="text-center text-lg inline-block underline mt-5">stathiskap75@gmail.com</code>
		</div>
		<div class="relative z-0 mt-5 cursor-none">
			<input
				type="text"
				name="Name"
				class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-none"
				placeholder=" "
				required
			/>
			<label
				for="floating_standard"
				class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  cursor-none"
				>Name</label
			>
		</div>
		<div class="relative z-0 mt-5 cursor-none">
			<input
				type="email"
				name="Email"
				class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-none"
				placeholder=" "
				required
			/>
			<label
				for="floating_standard"
				class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-none"
				>Email</label
			>
		</div>
		<div class="relative z-0 mt-5 cursor-none">
			<input
				type="text"
				name="Subject"
				class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-none"
				placeholder=" "
			/>
			<label
				for="floating_standard"
				class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-none"
				>Subject</label
			>
		</div>
		<textarea class="h-40 bg-neutral-700 p-2 mt-10" placeholder="Message" name="Message" required />
		<div class="relative z-0 mt-5 m-auto">
			<button
				class="w-32 bg-transparent hover:bg-fuchsia-600 text-blue-600 font-semibold hover:text-white border border-blue-400 hover:border-transparent rounded 0"
			>
			<input type="submit"/>
			</button>
		</div>
	</form>
</div>
