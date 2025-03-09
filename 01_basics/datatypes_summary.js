// primitive

// 7 types : String, Boolean, null, undefined, Symbol, BigInt

// reference (non primitive)

// Array, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123') // Both are not same

console.log(id === anotherId);

// Arrays
const animals = ["Tiger", "Zebra", "Penguin"];

// Objects
let myObj = {
    name : "shubham",
    age : 20,
    email : "shubhamsinha7778@gmail.com"

 }

 // Function
 const myFunction = function(){
    console.log("Hello World")
 }


 // +++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack (Primitive), Heap (Non-Primitive)

 let myName = "Shubhamsinha"

 let anotherName = myName

 anotherName = "spiderman"
 console.log(myName)        //shubhamsinha
 console.log(anotherName)   //spiderman


 let userOne = {
   name : "user",
   email : "user@gmail.com",
   upi : "user@ybl"
 }

 let userTwo = userOne      // It refers to value of userOne 

 userTwo.email = "Shubham@gmail.com"  // email changed in userOne

 console.log(userOne.email)   //shubham@gmail.com
 console.log(userTwo.email)   //shubham@gmail.com