//Numbers and Methods
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); //rounds to 1 decimal place(as a string)

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); //rounded to 4 digits

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-US'));


//Maths 
console.log(Math); //logs the full Math object
console.log(Math.abs(-4)); //4 (absolute value)
console.log(Math.round(4.6)); //4 (Nearest integer)
console.log(Math.ceil(4.2));  //5 (rounds up)
console.log(Math.floor(4.9)); //4 (rounds down)
console.log(Math.min(4, 3, 6)); //3 (smallest value)
console.log(Math.max(4, 3, 6)); //6 (largest value)
console.log("-----------------------------------------------------")

//Math.random
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 60;

//return a random integer between 10 and 20 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);