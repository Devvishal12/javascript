let score = "33";  // Declaring a variable 'score' and assigning it a string value "33"

console.log(typeof score);  
// Output: "string" (since score is a string)

console.log(typeof (score));  
// Output: "string" (parentheses don’t change anything, still a string)

let valueInNumber = Number(score);  
// The Number() function converts the string "33" into a number 33

console.log(typeof valueInNumber);  
// Output: "number" (since the value has been converted from string to number)

// "33" => 33
// "33abc" => NaN
// ture => 1; false => 0

let isLoggedIn = 1


let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);