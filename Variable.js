const accountId = 10000
let accountEmail = "Vishal@gmail.com"
var accountPassword = "12345"
accountCity = "Bengluru"


//accountId = 2 // not allowed because you can't change const value

accountEmail = "Priyam@gmail"
accountPassword = "2323232323"
accountCity = "Muzaffarpur"

console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
prefer not to use var
because of issue in block scope and functionnal scope
*/