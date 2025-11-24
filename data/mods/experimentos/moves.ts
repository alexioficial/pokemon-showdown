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
};
