const user = {
    username : "shubahm",
    pricde : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to my website`)
        // console.log(this)   //  
    }
}

// user.welcomeMessage()     // shubahm, welcome to my website
// user.username = "Sammy"
// user.welcomeMessage()    // Sammy, welcome to my website


// function chai (){
//     let username = "shubham"
//     console.log(this.username)    // undefined
// }
// chai()

const chai = ()=> {
    let username = "shubham"
    console.log(this.username)    // undefined
}

chai ()

// const addTwo =(num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,3))

const addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(3,5))