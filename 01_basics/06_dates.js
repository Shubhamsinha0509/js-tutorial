const myDate = new Date()

// console.log(myDate)

// console.log(myDate.toString())

// console.log(myDate.toDateString())  //sun mar 09 2025

// console.log(myDate.toISOString())

// console.log(myDate.toJSON())

// console.log(myDate.toLocaleDateString())  // 3/9/2025

// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate)  //object

// let myCreatedDate = new Date(2025,0,5)

// console.log(myCreatedDate.toDateString())  // sun Jan 05 2025

let myCreatedDate = new Date ("2025-01-14")
// console.log(myCreatedDate.toLocaleString())  // 1/14/25,  12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))  // to convert in seconds
