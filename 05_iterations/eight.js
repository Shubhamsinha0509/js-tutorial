const myNums = [1, 2, 3]

const newNums = myNums.reduce(function(acc, currValue){
    console.log(`acc is ${acc} and curValue is ${currValue}`)   // acc is 0 and curValue is 1
    return acc + currValue                                      // acc is 1 and curValue is 2
},0)                                                            // acc is 3 and curValue is 3

console.log (newNums)  // 6

const shoppingCart = [
    {
        course : "javascript",
        price : 1999
    },
    {
        course : "Python",
        price : 999
    },
    {
        course : "React js",
        price : 2999
    },
    {
        course : "kubernetes",
        price : 1599
    },
    {
        course : "Docker",
        price : 999
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price, 0)

console.log(priceToPay)   // 8595