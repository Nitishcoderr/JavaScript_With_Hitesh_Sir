const marvel_heroes = ["thor", "Ironman", "spiderman"]

const dc_heroes = ["Superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes)

// console.log(all_heroes);

const allNew_heroes = [...marvel_heroes,...dc_heroes]

// console.log(allNew_heroes);

const another_array = [1,2,3,[4,5,6],7,[23,45,43,[4,5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);



console.log(Array.isArray("Nitish"));
console.log(Array.from("Nitish"));
console.log(Array.from({name:"hitish"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));