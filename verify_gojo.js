const {Dex} = require('./dist/sim/dex');
const dex = Dex.forFormat('[Gen 9] Experimentos');

console.log('=== VERIFICACIÓN DE GOJO ===');
const gojo = dex.species.get('gojo');
console.log('Exists:', gojo.exists);
console.log('Name:', gojo.name);
console.log('Types:', gojo.types);
console.log('Abilities:', gojo.abilities);

console.log('\n=== VERIFICACIÓN DE BLUE ===');
const blue = dex.moves.get('blue');
console.log('Exists:', blue.exists);
console.log('Name:', blue.name);
console.log('Type:', blue.type);
console.log('Base Power:', blue.basePower);

console.log('\n=== VERIFICACIÓN DE LIMITLESS ===');
const limitless = dex.abilities.get('limitless');
console.log('Exists:', limitless.exists);
console.log('Name:', limitless.name);
