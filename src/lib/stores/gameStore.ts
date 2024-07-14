// lib/stores/gameStore.ts

import { writable } from 'svelte/store';

export const gold = writable(0);
export const dwarfCost = writable(10);

// Define the type for a Dwarf
interface Dwarf {
	id?: number;
	name: string;
	energy: number;
	happiness: number;
	strength: number;
	speed: number;
	intelligence: number;
	yearsOld: number;
	expectedLifeDuration: number;
	image: string; // Add this line
	colorvar: number; // Add this line
	color: string; // Add this line
}
const dwarfImages = [
	'assets/dwarf.png',
  ];

export const dwarves = writable<Dwarf[]>([]);

interface GameState {
	gold: number;
	dwarves: Dwarf[];
}

const initialState: GameState = {
	gold: 0,
	dwarves: []
	// Initialize any other properties you need for your game state
};

// Generate unique properties for each dwarf
function createDwarf() {
	const image = dwarfImages[Math.floor(Math.random() * dwarfImages.length)];
	// Generate a random color
	const colorvar = Math.floor(Math.random() * 360); // Generate a random number between 0 and 360
	const color = `hsl(${colorvar}, 100%, 50%)`; // Convert the number to a color
	
	return {
		id: Math.floor(Math.random() * 1000000),
		name: 'Dwarf ' + Math.floor(Math.random() * 1000),
		energy: Math.floor(Math.random() * 100),
		happiness: Math.floor(Math.random() * 100),
		strength: Math.floor(Math.random() * 10),
		speed: Math.floor(Math.random() * 10),
		intelligence: Math.floor(Math.random() * 10),
		yearsOld: Math.floor(Math.random() * 100),
		expectedLifeDuration: Math.floor(Math.random() * 100),
		image, // Add this line
		colorvar, // Add this line
		color, // Add this line
	};
}

// Function to buy a dwarf
export function buyDwarf() {
	let cost: number = 0; // Get the current value of dwarfCost
	dwarfCost.subscribe((value) => (cost = value))();

	let currentGold: number = 0; // Get the current value of gold
	gold.subscribe((value) => (currentGold = value))();

	if (currentGold >= cost) {
		gold.update((value) => value - cost);
		dwarfCost.update((value) => value * 1.1);
		dwarves.update((dwarfs) => [...dwarfs, createDwarf()]); // Add a new dwarf to the dwarves array
	} else {
		console.log('Not enough gold to buy a dwarf!');
	}
}

// Exports for the game store and the dwarves store
export const gameStore = writable<GameState>(initialState);
