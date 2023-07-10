const name = 'nitish'
const repoCount = 30

// console.log(name + repoCount + " Value");

console.log(`${name} ${repoCount} Itna sara`);

const gameName = new String('Nitish-Game-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
// console.log(newString);

console.log(name.length);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);

const newString1 = "      nitish      "
console.log(newString1);
console.log(newString1.trim());

const url = "https://nitish.com/nitish%20chaurasiya"

console.log(url.replace('%20','-'));

console.log(url.includes('nitisha'));

console.log(gameName.split('-'));