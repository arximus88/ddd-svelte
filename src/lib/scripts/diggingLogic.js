// lib/scripts/diggingLogic.ts
import { gold } from '$lib/stores/gameStore';

export function diggingGold() {
    gold.update(n => n + 1);
}
