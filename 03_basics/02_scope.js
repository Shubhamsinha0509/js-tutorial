let a  = 100
if(true){
    let a = 10
    const b = 20
    console.log("INNER :", a)   // INNER : 10

}

// console.log(a)  // 100

function  one (){
    const username = "shubham"

    function two (){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}
// one()

if(true){
    const username = "shubham"
    if(username === "shubham"){
        const website = " youtube"
        console.log(username + website)    // shubham youtube
    }
    
}




//+++++++++++++++++++++++++++++++++++++++++++++++++++

function addOne (num){
    return num + 1
}

console.log(addOne(5))

