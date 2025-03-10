function sayMyName (){               
    console.log("s")
    console.log("h")
    console.log("u")
    console.log("b")
    console.log("h")
    console.log("a")
    console.log("m")
}

// sayMyName()

// function addTwonumbers (number1,number2){  // parameters
//     console.log(number1 + number2)
// }

// addTwonumbers(2,4)   // arguments

function addTwonumbers (number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwonumbers(4,5)
// console.log("result",result)



function logInUserMessage(username){
    return `${username} just logged in`
}

// console.log(logInUserMessage("shubham"))  // shubham just logged in

// console.log(logInUserMessage())          // undefined just logged in


// function calculateCartPrice(...num1){    // rest operator
//     return num1
// }

// console.log(calculateCartPrice(200,100,400))   // [ 200, 100, 400 ]


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300,400))   // [ 300, 400 ]

const user = {
    username : "tanya",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)       // username is tanya and price is 199

handleObject({
    username : "shiv",
    price : 299
})                        // username is shiv and price is 299


const myNewArr = [100,200,300,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr))   // 200