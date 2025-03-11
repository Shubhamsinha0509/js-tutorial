// if

// if( 2 == "2"){
//     console.log("Executed")   // Executed
// }

if(2 === "2"){
    console.log("Executed")    // === also checks data type 
}

const temp = 43 

if(temp < 50){
    console.log("Temperature is less than 50")
} else {
    console.log("Temperature is greater than 50")
}


const score = 200

if (score > 100){
    const power = "fly"
    console.log(`user power : ${power}`)   // user power : fly
}

// console.log(`user power : ${power}`)     // power is not defined    this is because power is out of scope 


// const balance = 1000 

// if(balance < 500){
//     console.log("less than 500")
// } else if (balance < 750){
//     console.log("less than 750")
// } else {
//     console.log("less then 1200")
// }



const userLoggedIn = true 
const debitCard = true
const loggedINFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to purchase course")
}

if (loggedINFromGoogle || LoggedInFromEmail){
    console.log("Allowed to enroll")
}