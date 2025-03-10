// singleton
// object.create

// object literals

const mySym =  Symbol("key1")
 const user = {
    name : "shubham",
    [mySym] : "myKey1",
    email : "shubham@gmail.com",
    isLoggedIn : false,
    location : "Bhopal",
    loggedInDays : ["Monday","Tuesday"]
 }

//  console.log(user.email)
//  console.log(user["email"])
//  console.log(user[mySym])

 user.email = "shubham@google.com"
//  Object.freeze(user)              // no further changes applied
 user.email = "shubham@chatgpt.com"

//  console.log(user)

user.greeting = function(){
    console.log("Hello World")
}

// console.log(user.greeting)       // [function (anonymous)]

console.log(user.greeting())       // Hello world

user.greetingTwo = function(){
    console.log(`Hello user , ${this.name}`)
}

console.log(user.greetingTwo())
