//Date and Time

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);
// console.log(myDate.toLocaleString())



//Creating Specific Dates
let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());


//timestamps
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime() / 1000); //converted to seconds


//Extracting dates
let newDate = new Date();
// console.log(newDate); //full date object with current time

// console.log(newDate.getMonth() + 1);
//return current month (add 1 because months are based 0-based)

console.log(newDate.getDay());


//Custom format with toLocaleString()
let formatted = newDate.toLocaleString('en-IN',{
    weekday : "long",
    year : "numeric",
    month: "numeric",
    
});

console.log(formatted)