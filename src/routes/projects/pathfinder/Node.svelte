<script lang="ts">
	export let tileSize: number;
	export let isStart: boolean;
	export let isEnd: boolean;
</script>

<div
	class="border-black border-2 w-[{tileSize}px] h-[{tileSize}px]
    {isStart ? 'bg-red-700' : 'bg-white'}
    {isEnd ? 'bg-yellow-500' : 'bg-white'}"
/>