<script>
	import { fade, fly } from 'svelte/transition';

	export let start = { x: 0, y: 0 };
	export let end = { x: 0, y: 0 };
</script>

<div
	class="particle"
	style="left: {start.x}px; top: {start.y}px;"
	in:fade={{ duration: 1 }}
	out:fly={{ y: end.y - 50, x: end.x, duration: 333 }}
></div>

<style>
	.particle {
		position: absolute;
		width: 4px;
		height: 4px;
		background-color: #918692;
	}
</style>
