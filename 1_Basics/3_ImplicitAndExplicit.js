//Implicit Datatype conversion

console.log("5" + 2); //number converted into string
console.log("5" - 2); //string converted to number
console.log(true + 1);  //true -> 1
console.log(false + "2"); //false -> string
console.log(null + 1);  //null -> 0
console.log(undefined + 1);  //NaN (undefined -> NaN)
console.log("--------------------------------------------------");

//Explicit Conversion

//1. number to string
let number = 123;
let numberToString = String(number);

console.log(numberToString);
console.log(typeof numberToString)
console.log("--------------------------------------------------");

//2.string to number
let id = "321";
console.log(typeof id);

let idToNumber = Number(id);
console.log(idToNumber);
console.log(typeof idToNumber);

//positive value to negative
let value = 7

let negValue = -value;
console.log(negValue)

//3.Boolean conversion
let num1 = 0;
let num1ToBoolean = Boolean(num1);

console.log(num1ToBoolean);