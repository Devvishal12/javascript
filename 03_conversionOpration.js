let score = "33";  
// Declaring a variable 'score' and assigning it a string value "33"

console.log(typeof score);  
// Output: "string" (since score is a string)

console.log(typeof (score));  
// Output: "string" (parentheses don’t change anything, still a string)

let valueInNumber = Number(score);  
// The Number() function converts the string "33" into a numeric value 33

console.log(typeof valueInNumber);  
// Output: "number" (since the value has been converted from string to number)

// Type conversion examples:
console.log(Number("33"));   // 33 (valid conversion)
console.log(Number("33abc")); // NaN (Not-a-Number, invalid conversion)
console.log(Number(true));    // 1 (true is converted to 1)
console.log(Number(false));   // 0 (false is converted to 0)

// Boolean conversion
let isLoggedIn = 1;  
// Declaring a variable 'isLoggedIn' and assigning it the number 1 (truthy value)

let booleanIsloggedIn = Boolean(isLoggedIn);  
// The Boolean() function converts 1 to true

console.log(booleanIsloggedIn);  
// Output: true (since 1 is truthy in JavaScript)

// Type conversion from number to string
let someNumber = 33;  
// Declaring a variable 'someNumber' and assigning it a number 33

let stringNumber = String(someNumber);  
// The String() function converts the number 33 into a string "33"

console.log(stringNumber);  
// Output: "33" (now it's a string)

console.log(typeof stringNumber);  
// Output: "string" (confirming the conversion)
