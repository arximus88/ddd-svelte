<!-- Header.svelte -->
<script lang="ts">
	import { gold, dwarves } from '$lib/stores/gameStore';
	import { goto } from '$app/navigation';
	// This will automatically update the header when the gold or dwarves change
	let currentGold = 0;
	gold.subscribe((value) => (currentGold = value));
	let currentDwarvesCount = 0;
	dwarves.subscribe((value) => (currentDwarvesCount = value.length));

	export let saveGameState: () => void; // Function to save the game state

	function handleBackClick() {
		saveGameState();
		goto('/'); // Go to the home page
	}
</script>

<div class="topNav">
    <div class="title">Digging Down Dwarf</div>
    <div class="resources">
        <div>Gold: {currentGold}</div>
        <div>Dwarves: {currentDwarvesCount}</div>
    </div>
	<div>
		<button on:click={saveGameState}>Зберегти гру</button>
		<button on:click={handleBackClick}>На головну</button>
	</div>
	<!-- Display the number of dwarves -->
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		background: #333; /* Add a background color */
		color: #fff; /* Add a text color */
	}
</style>
