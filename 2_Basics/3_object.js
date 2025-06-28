//Object
//Object literal
// const JsUser = {
//     name: "Reetik", //these are key-value pairs
//     age: 22,
//     email: "reetik@google.com"
// }

// console.log(JsUser.name) 

//Singleton Object
//created when constructors like new Object() or Object.create() is used
const obj = Object.create(null); //creates an object with no prototype


//Object literal with symbol as key
const mySym = Symbol("key1");

//using the symbol in object as key
const JsUser = {
    name : "Reetik",
    [mySym] : "mykey1", //using symbol as key
    age : 18,
    location : "Chandigarh",
    email : "reetik@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email);        // Dot notation
// console.log(JsUser["email"]);     // Bracket notation
// console.log(JsUser["full name"]); // Bracket required for space
// console.log(JsUser[mySym]);       // Accessing symbol key


//Object.freeze() - locking the object
// Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft.com"; // Won’t change if object is frozen

// console.log(JsUser)


//Adding methods(functions) to Object
JsUser.greeting = function() {
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
JsUser.greeting();
JsUser.greetingTwo();