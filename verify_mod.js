const {Dex} = require('./dist/sim/dex');

const mod = Dex.mod('experimentos');
const move = mod.moves.get('meneatuchapa');

console.log("Mod 'experimentos' exists:", mod.currentMod === 'experimentos');
console.log("Move 'meneatuchapa' exists:", move.exists);
console.log("Move Name:", move.name);
console.log("Move Num:", move.num);
console.log("Has onHit:", typeof move.onHit === 'function');

