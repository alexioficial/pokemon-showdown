export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	// Habilidad de Gojo: Limitless
	limitless: {
		name: "Limitless",
		// Al entrar al campo, sube evasión +3
		onStart(pokemon) {
			this.boost({ evasion: 3 }, pokemon);
		},
		// Ignora Reflect y Light Screen
		onModifyDamage(damage, source, target, move) {
			// Ignora las pantallas del lado rival
			if (move.category === 'Special') {
				const ignoreLightScreen = true;
				if (ignoreLightScreen) {
					this.debug('Limitless ignoring Light Screen');
				}
			}
			if (move.category === 'Physical') {
				const ignoreReflect = true;
				if (ignoreReflect) {
					this.debug('Limitless ignoring Reflect');
				}
			}
		},
		// Esto hace que ignore las pantallas
		onModifyMove(move, pokemon) {
			move.infiltrates = true; // Ignora Reflect, Light Screen, etc.
		},
		// +10% de precisión en movimientos Psíquicos
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (move.type === 'Psychic' && typeof accuracy === 'number') {
				this.debug('Limitless boosting Psychic accuracy');
				return this.chainModify([4505, 4096]); // ~1.1x (10% boost)
			}
		},
		shortDesc: "On switch-in: +3 Evasion. Ignores screens. Psychic moves: +10% accuracy.",
		desc: "On switch-in, this Pokemon's evasion is raised by 3 stages. This Pokemon's moves ignore the effects of Reflect, Light Screen, and Aurora Veil. Psychic-type moves used by this Pokemon have their accuracy multiplied by 1.1.",
	},
};
