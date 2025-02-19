let score = "33abc"


console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) 

// 33abc is not a number but it shows number in typeof 
// "33" => 33
// "33abc" => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn) // true

