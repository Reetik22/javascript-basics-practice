"use strict"; //treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser


//Variable
const label = 1;
var name = 'reetik';
let id = 987;

console.log([label, name, id]);
console.log("The label number is ",label);
 
//cannot change const
//label = 9;  

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


//DataTypes
//there are 2 types of datatypes
//Primitive and Non-primitive(reference)

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

let num = 34;
let employee = "rahul";
let isLoggedIn = true;
const number = undefined;

console.log([num, employee, isLoggedIn, number]);



