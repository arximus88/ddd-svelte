<!-- Mine.svelte -->
<script>
	import { scale } from 'svelte/transition';
	import { diggingGold } from '$lib/scripts/diggingLogic';
	import Particle from './Particle.svelte';

	let particles = [];

	function handleMouseDown() {
		let audioDown = new Audio('/sounds/mouth-sound-ping-pong.wav');
		audioDown.volume = Math.random() * 0.02 + 0.08; // 8% - 10% volume
		audioDown.play();
	}

	function handleMouseUp() {
		let audioUp = new Audio('/sounds/mouth-sound-droplet-high.wav');
		audioUp.volume = Math.random() * 0.02 + 0.08; 
		diggingGold(); // digging logic
		audioUp.play(); // play sound
		for (let i = 0; i < 10; i++) {
			// 10 particles per click
			const particle = {
				start: { x: 60, y: 110 }, // center of mine
				end: { x: Math.random() * 100 - 50, y: Math.random() * 50 - 50 } // random direction
			};
			particles = [...particles, particle]; // add particle to array

			// Destroy the particles
			setTimeout(() => {
				particles = particles.filter((p) => p !== particle); // remove particle from array
			}, 15); // 15ms
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="mine"
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	transition:scale={{ duration: 150 }}
>
	<!-- Mine SVG or Image here -->
	<img src="/assets/mountain.png" alt="Mine" class="mine-img" />
	<div class="text">Копати тут</div>
	{#each particles as particle (particle)}
		<Particle start={particle.start} end={particle.end} />
	{/each}
</div>

<style>
	.mine {
		position: absolute;
		width: 150px;
		height: 150px;
		bottom: 0;
		right: 0;
	}
	.mine-img {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.text {
		user-select: none;
	}
</style>
