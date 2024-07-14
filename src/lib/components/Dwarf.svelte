<!-- Dwarf.svelte -->
<script>
	/**
	 * @type {{ name: any; image: any; colorvar: number; }}
	 */
	export let dwarf;
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { diggingGold } from '$lib/scripts/diggingLogic';

	let digging = false;

	async function dig() {
		digging = true;
		await new Promise((r) => setTimeout(r, 3000));
		diggingGold();
		digging = false;
		dig();
	}

	dig();
</script>

<div class="dwarf" transition:fly={{ x: digging ? -200 : 0, duration: 600, easing: cubicOut }}>
	<div class="dwarf-name">{dwarf.name}</div>
	<img
		src={dwarf.image}
		class="dwarf-image"
		alt="Dwarf Worker"
		style="filter: hue-rotate({dwarf.colorvar}deg);"
	/>
</div>

<style>
	.dwarf {
		width: 40px;
		height: 50px;
		position: relative;
	}

	.dwarf-name {
		position: absolute;
		width: 100%;
		opacity: 0;
		transform: translateY(-80%);
		transition: all 0.3s ease;
		/* Other styles to position and style the name... */
	}

	.dwarf:hover .dwarf-name {
		opacity: 0.8;
		transform: translateY(-105%);
	}

	.dwarf-image {
		scale: 2;
		width: 100%;
		/* height: 100%; */
		transform: scaleX(-1);
		/* object-fit: cover; */
	}
</style>
