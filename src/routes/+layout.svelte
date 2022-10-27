<script lang="ts">
	import Sidebar from "./Sidebar.svelte";
</script>

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
<link rel="stylesheet" href="/src/output.css" />

<svelte:head>
	<title>Stathis Kapnidis</title>
</svelte:head>

<div class="flex bg-gray-900">
	<div class="w-1/5 min-h-screen">
	<Sidebar/>
	</div>
	<main class="bg-gray-500 flex-1 min-h-screen">
		<slot/>
	</main>
</div>