<script>
	import { writable } from 'svelte/store';

	const user = writable({
		name: 'Stathis Kapnidis',
		phone: '07444637458',
		email: 'stathiskap75@gmail.com',
		message: 'Write message here'
	});
</script>

<code class="text-2xl pb-10">// Contact form WIP</code>
<div class="sm:w-full lg:pr-44 lg:pl-44">
	<h1 class="text-slate-200 text-2xl italic border-2 border-neutral-600 p-2">Contact Form</h1>
	<form class="grid">
        <div>
            <p class="font-Menlo inline-block">To:</p>
            <code class="text-center text-lg inline-block underline mt-5">stathiskap75@gmail.com</code>
        </div>
		<div class="relative z-0 mt-5">
			<input
				type="text"
				id="floating_standard"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
			/>
			<label
				for="floating_standard"
				class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Name</label
			>
		</div>
		<div class="relative z-0 mt-5">
			<input
				type="text"
				id="floating_standard"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
			/>
			<label
				for="floating_standard"
				class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Email</label
			>
		</div>
		<textarea class="h-40 bg-neutral-700 p-2 mt-10" placeholder="Message" />
        <div class="relative z-0 mt-5 m-auto">
		    <button
		    	class="w-32 bg-transparent hover:bg-fuchsia-600 text-blue-600 font-semibold hover:text-white border border-blue-400 hover:border-transparent rounded "
		    >
		    	<input type="submit" />
		    </button>
        </div>

	</form>
</div>
