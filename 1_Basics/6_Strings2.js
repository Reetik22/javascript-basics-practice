//Exercise for String
let gameName = "Reetik-rb";

// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const url = 'http://reetik.com';
console.log(url.replace('reetik', '342'));

console.log(url.includes('sundar'));

gameName = "reetik-r-b"
console.log((gameName.split('-'))) //converts the string into array using a separator

//splice
let arr = [1, 2, 3, 4, 5];

// Remove 2 items from index 1 and add 'a', 'b'
arr.splice(2, 2, "a", "b");
console.log(arr); // [1, "a", "b", 4, 5]
