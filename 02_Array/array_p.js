const marvel_heros=['ironman', 'thor', 'spiderman']

const dc_heros=['superman', 'batman']

marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

const allarr=marvel_heros.concat(dc_heros)
// console.log(allarr);

const all_new_heros=[...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const another_arr=[1,2,3,[4,5],6,[7,8,[3,6,0]],10];
const real_arr= another_arr.flat(Infinity);
console.log(real_arr);

console.log((Array.isArray("Shama")));
console.log(Array.from('Sarang'));
console.log(Array.from({name:'Rssy'}));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));

