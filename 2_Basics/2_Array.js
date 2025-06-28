//Arrays - 2

//Merging Arrays
//using push() method
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // adds whole array as one element
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]); //// "flash" → because it's inside the nested array

//using concat() method
const allHeros = marvel_heros.concat(dc_heros); //joins arrays into a new array
// console.log(allHeros)

//Using soread operator(''')- modern and clean:
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros)


//Flattening Arrays- flat() -- Removes nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(another_array);
// console.log(real_another_array)


//Array Type and Conversion
console.log(Array.isArray("Reetik")); //Checks if a value is an array

console.log(Array.from("REETIK")); //Converts string to array (each character)

console.log(Array.from({name : "Reetik"})); //it can’t convert an object without `.length` or `.map` function


//Array.of() creates an array from given values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))