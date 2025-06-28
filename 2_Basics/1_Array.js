//Arrays level 1
//General ways to declare and initialize array
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["superman", "batman", "spiderman", "thor"];

const myArr2 = new Array(1,2,3,4);

//Accesing array
// console.log(myArr2); //full array
// console.log(myArr[3]); //with index number


//Array methods
//Push and Pop
// myArr.push(6); //adds 6 at the end 
// console.log(myArr)
// myArr.push(7);

// myArr.pop; //removes the last element
// console.log(myArr);


//unshift and shift
// myArr.unshift(9);  //adds 9 at the beginning
// console.log(myArr);  

// myArr.shift(0); //removes first element


//includes and indexOf
// console.log(myArr.includes(9));  //checks if it includes 9
// console.log(myArr.indexOf(3));   //returns the index of 3

//Join() -  converts an array into a comma-separated string
// const newArr = myArr.join('-');
// console.log(newArr);

//slice() - Returns a copy of the array from start to end (excluding end)
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

//splice() -Removes count elements starting from start
const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);

