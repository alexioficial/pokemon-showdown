export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
	// ===== CLIMA CUSTOM =====
	// "Unlimited Void" - Clima de Gojo
	unlimitedvoid: {
		name: 'Unlimited Void',
		effectType: 'Weather',
		duration: 3,
		durationCallback(source, effect) {
			// Si el Pokémon tiene un item que extiende el clima
			// if (source?.hasItem('damprock')) {
			// 	return 8;
			// }
			return 3;
		},
		// Cuando el clima empieza
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Unlimited Void', '[from] ability: ' + effect.name, `[of] ${source}`);
			} else {
				this.add('-weather', 'Unlimited Void');
			}
			// Sube SPA y SPE del usuario en +2
			if (source) {
				this.boost({ spa: 2, spe: 2 }, source);
			}
		},
		// Cada turno
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Unlimited Void', '[upkeep]');
			this.eachEvent('Weather'); // Activa eventos de clima en todos los Pokémon
		},
		// Daño residual: 5% a todos los rivales
		onWeather(target) {
			// Obtiene el Pokémon que activó el clima
			const source = this.effectState.source;

			// Si el target NO es el usuario ni su aliado, hace daño
			if (source && !target.isAlly(source)) {
				this.damage(target.baseMaxhp / 20); // 5% de daño (1/20)
			}
		},
		// Cuando el clima termina
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
};
