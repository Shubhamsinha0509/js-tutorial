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