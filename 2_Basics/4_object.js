//Object level 2

//creating object dynamically
//const tinderUser = new Object()
const tinderUser = {}
//both are same but the second one is cleaner

//to add properties
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


//Nested objects
const regularUser = {
    email: "user@gmail.com",
    fullname : {
        userfullname : {
            firstname : "reetik",
            lastname : "bhave"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


//Combining Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//there are 3 ways to combine objects
//1.nesting inside another object (not merging and not ideal)
// const obj3 = {obj1, obj2};
// console.log(obj3);

//2.using Object.assign()
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3)

//3.spread syntax
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);


//Array of Objects
const users = [
    {id : 1, email: "h@gmail.com"},
    {id : 2, email: "h2@gmail.com"},
    {id : 3, email: "h3@gmail.com"}
];

// console.log(users[1].email);



//Object Utility methods
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Checks if a specific key exists



//Destructuring Objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "reetik"
};

console.log(course.courseInstructor); //general way 

//using destructuring
const { courseInstructor: instructor } = course;
// console.log(instructor);
//Renames the variable while destructuring.