// Array

const myArray = [0, 1, 2, 3, 4, 5]

// console.log(myArray[4])  //4

const myArr2 = new Array(2,3,4,5)

// Array methods

myArr2.push(7)

// console.log(myArr2)  // [2,3,4,5,7]

myArr2.pop()       // Removes last element

// console.log(myArr2) // [2,3,4,5]

// console.log(myArr2.includes(9))  // false

// console.log(myArr2.indexOf(19))  // -1

const newArray = myArray.join()  // converts arrays to string

// console.log(myArray)  // [0, 1, 2, 3, 4, 5]
// console.log(newArray) // 0,1,2,3,4,5

// slice, splice

// console.log("A", myArray)
const myn1 = myArray.slice(1,3)   // includes 1,2 and excludes rest [1, 2]

// console.log(myn1)
// console.log("B",myArray)

const myn2 = myArray.splice(1,3)  // [1, 2, 3]
// console.log(myn2)  
// console.log("C",myArray)      // [0,4,5]  splice manupulates original array  



const heroes = ["thor", "CaptainAmerica", "IronMan"]

const dcHeroes = ["Batman","Superman","Flash"]

// heroes.push(dcHeroes)

// console.log(heroes)
// console.log(heroes[3][0]) 

const allHeroes = heroes.concat(dcHeroes) // ["thor","CaptainAmerica","IronMan","Batman","Superman","Flash"]
console.log(allHeroes)   // merges all arrays into single new array 

// Spread operator  another way of merging two arrays

const allNewHeroes =[...heroes,...dcHeroes]
console.log(allNewHeroes) // ["thor","CaptainAmerica","IronMan","Batman","Superman","Flash"]
