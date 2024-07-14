<!-- Building.svelte -->
<script lang="ts">
	import { buyDwarf, dwarfCost } from '$lib/stores/gameStore';

	function handleBuildingClick() {
		buyDwarf();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="building" on:click={handleBuildingClick} role="button" tabindex="0">
	<div class="text">Купити Дварфа <br />({$dwarfCost} Золота)</div>
	<img src="/assets/build.png" alt="Building" class="building-img" />
</div>

<style>
	.building {
		position: absolute;
		width: 150px;
		height: 250px;
		bottom: 0;

	}
	.building-img {
		position: absolute;
		width: 150px;
		height: 150px;
		bottom: 0;
	}
	.text {
		user-select: none;
	}
</style>
