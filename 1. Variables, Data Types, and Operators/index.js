/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
var myVariable = "Hello, world!";
console.log(myVariable);

// TODO 1.2 Use the let keyword to define a variable.
let myVariable = "Hello, world!";
console.log(myVariable);

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
const myVariable = "Hello, world!";
myVariable = "Goodbye, world!"; // Error: Assignment to constant variable.

// Checkpoint 1.1 What is the difference between var, let, and const?
/* Answer: The var keyword has function scope, allowing variables to be redeclared and reassigned;
the let keyword has block scope, preventing redeclaration but allowing reassignment;
and the const keyword also has block scope, but it prevents both redeclaration and reassignment after initialization. */

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
let num1 = 10;
let num2 = 5;

// Addition
let sum = num1 + num2; // Output: 15

// Subtraction
let difference = num1 - num2; // Output: 5

// Multiplication
let product = num1 * num2; // Output: 50

// Division
let quotient = num1 / num2; // Output: 2

// Modulo
let remainder = num1 % num2; // Output: 0

// Exponentiation
let result = num1 ** num2; // Output: 100000

console.log(sum, difference, product, quotient, remainder, result);


// Checkpoint 1.2 What operators did you use?
// Answer: I used +, -, *, /, %, and **.
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators

// String Interpolation
let name = "John";
let greeting = `Hello, ${name}!`; // Output: "Hello, John!"

// String Conversion
let number = 42;
let str = number.toString(); // Output: "42"

// Checkpoint 1.3 What operators did you use?
// Answer: I used the String Interpolation and the String Conversion.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
let x = 5;
let y = 10;

// Logical AND
let result1 = (x > 0) && (y < 20); // Output: true

// Logical OR
let result2 = (x > 0) || (y > 20); // Output: true

// Logical NOT
let result3 = !(x > 0); // Output: false

console.log(result1, result2, result3);

// Checkpoint 1.4 What operators did you use?
// Answer: I used Logical AND(&&), OR(||), NOT(!).


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
let number1 = 5;
let number2 = 10;

console.log(number1 < number2); // Output: true
console.log(number1 > number2); // Output: false
console.log(number1 <= number2); // Output: true
console.log(number1 >= number2); // Output: false
console.log(number1 == number2); // Output: false
console.log(number1 != number2); // Output: true
console.log(number1 === number2); // Output: false
console.log(number1 !== number2); // Output: true




// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
/* Answer: [] == false evaluates to true because the empty array [] is coerced to an empty string "",
and both an empty string and false are considered falsy values in JavaScript. Type coercion in JavaScript
can lead to unexpected results, so it's generally recommended to use the strict equality operator (===) for
more predictable comparisons. */