<!-- game/+page.svelte -->
<script lang="ts">
	import { buyDwarf, gameStore, dwarves } from '$lib/stores/gameStore';
	import Header from '$lib/components/Header.svelte';
	import Building from '$lib/components/Building.svelte';
	import Mine from '$lib/components/Mine.svelte';
	import Dwarf from '$lib/components/Dwarf.svelte';
	import SkyBox from '$lib/components/SkyBox.svelte';

	function handleBuyDwarf() {
		// If the player has enough money, decrement the money count and increment the dwarf count
		if ($gameStore.gold >= 10) {
			$gameStore.gold -= 10;
			buyDwarf(); // use the buyDwarf function from gameStore.ts
			gameStore.set($gameStore); // Update the game state in the store
		}
	}

	function saveGameState() {
		let gameStateToSave = {
			money: $gameStore.gold,
			dwarves: $gameStore.dwarves
			// Додайте тут будь-яку іншу інформацію про гру, яку ви хочете зберегти
		};
		let gameStateString = JSON.stringify(gameStateToSave);
		localStorage.setItem('gameState', gameStateString);
	}

	function loadGameState() {
		// Check if the code is running in the browser before accessing localStorage
		if (typeof window !== 'undefined') {
			const savedState = localStorage.getItem('gameState');
			return savedState ? JSON.parse(savedState) : null;
		}
		return null;
	}

	let loadedState = loadGameState(); // Виклик функції при завантаженні гри
	if (loadedState) {
		gameStore.set(loadedState); // Оновлення стану гри в магазині, якщо було завантажено збережений стан
	}
</script>

<svelte:head>
	<title>Dig! - Digging Down Dwarves</title>
	<meta name="description" content="Digging Down Dwarves Game" />
</svelte:head>
<Header {saveGameState} />

<div class="game-container">
	<div class="ground">
		<Building on:click={handleBuyDwarf} />
		<div class="dwarf-workers">
			{#each $dwarves as dwarf (dwarf.id)}
				<!-- use each loop to render dwarves -->
				<Dwarf {dwarf} />
			{/each}
		</div>
		<Mine />
	</div>
	<SkyBox />
</div>

<style>
	.dwarf-workers {
		position: absolute;
		bottom: 20px;
		left: 180px;
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.game-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100vh;
	}

	.ground {
		position: absolute;
		bottom: 0;
		height: 20px; /* Adjust the height to suit your game */
		width: 100%;
		background: #617B47; /* A brown color to represent the ground */
	}
</style>
