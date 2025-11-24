export const Learnsets: import('../../../sim/dex-species').ModdedLearnsetDataTable = {
	// Define qué movimientos puede aprender tu Pokémon custom
	mipokemon: {
		learnset: {
			// Movimientos por nivel (formato: S = Gen 9/Scarlet Violet)
			tackle: ["9L1"],
			ember: ["9L5"],
			dragonbreath: ["9L10"],
			flamethrower: ["9L20"],
			dragonclaw: ["9L30"],
			fireblast: ["9L40"],
			dracometeor: ["9L50"],

			// TMs (M = Machine)
			protect: ["9M"],
			substitute: ["9M"],
			terablast: ["9M"],

			// Tu movimiento custom
			meneatuchapa: ["9L1"], // Puede aprenderlo desde nivel 1
		},
	},

	// Movimientos de Gojo
	gojo: {
		learnset: {
			blue: ["9L1"],
			red: ["9L1"],
			hollowpurple: ["9L1"],
			unlimitedvoid: ["9L1"],
			protect: ["9M"],
			substitute: ["9M"],
		},
	},
};
