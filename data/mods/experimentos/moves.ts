export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	meneatuchapa: {
		num: 900,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Menea tu Chapa",
		ignoreImmunity: true,
		desc: "Hace que tu pokemon le menee la chapa al rival",
		baseMoveType: "Water",
		pp: 30,
		priority: 6,
		flags: { snatch: 1, metronome: 1 },
		alwaysHit: true,
		target: "normal",
		type: "Water",
		onHit(target, source, move) {
			target.addVolatile('torment');
			target.addVolatile('embargo');
			target.addVolatile('partiallytrapped', source, move);
			target.addVolatile('healblock');
			target.addVolatile('taunt');
			target.addVolatile('disable');
			target.addVolatile('encore');
			target.addVolatile('saltcure');
			target.side.addSideCondition('stealthrock');
			target.side.addSideCondition('spikes');
			target.side.addSideCondition('toxicspikes');
			target.side.addSideCondition('stickyweb');
			target.side.addSideCondition('gmaxsteelsurge');
			this.field.setWeather('raindance');
		},
		self: {
			boosts: {
				atk: 6,
				spa: 6,
				spd: 6,
				def: 6,
				spe: 6,
				accuracy: 6,
				evasion: 6,
			},
		},
		secondary: {
			boosts: {
				atk: -6,
				spa: -6,
				spd: -6,
				def: -6,
				spe: -6,
				accuracy: -6,
				evasion: -6,
			},
		}
	},

	unlimitedvoid: {
		num: 901,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: 'Unlimited Void',
		pp: 5,
		priority: 4,
		flags: { metronome: 1 },
		weather: 'unlimitedvoid',
		secondary: null,
		target: "all",
		type: "Dark",
	},

	// === MOVIMIENTOS DE GOJO ===
	// Blue - Psíquico - Poder 100 - Baja 1 nivel de Defensa Especial
	blue: {
		num: 902,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Blue",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
	},

	// Red - Psíquico - Poder 110 - Baja 1 nivel de Defensa
	red: {
		num: 903,
		accuracy: 100,
		basePower: 110,
		category: "Special",
		name: "Red",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Psychic",
	},

	// Hollow Purple - Hada - Poder 130 - +30% si se usó Blue o Red antes
	hollowpurple: {
		num: 904,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Hollow Purple",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		onBasePower(basePower, pokemon) {
			// Si el último movimiento usado fue Blue o Red, aumenta el poder en 30%
			if (pokemon.lastMove?.id === 'blue' || pokemon.lastMove?.id === 'red') {
				this.debug('Hollow Purple boost from Blue/Red');
				return this.chainModify(1.3);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
	},
};
