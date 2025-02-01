const accountId = 123456;
let accountEmail = "shubham123@gmail.com";
var accountPassword = "234567"
accountCity = "Bihar"

accountEmail = "shubhamsinha@gmail.com"
accountPassword = "909090"
accountCity = "Pune"

// console.log(accountPassword)

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])