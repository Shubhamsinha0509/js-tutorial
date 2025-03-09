const name = "shubham"
const repoCount = 10

// console.log(name + repoCount + "Value")

console.log(`my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("shubham")

console.log(gameName[3])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())

const newStringOne = "   shubham   "
console.log(newStringOne)
console.log(newStringOne.trim())    //removes extra spaces 


const url = "https://shubham.com/shubham%20sinha"
console.log(url.replace('%20','-'))               // replace %20 with -