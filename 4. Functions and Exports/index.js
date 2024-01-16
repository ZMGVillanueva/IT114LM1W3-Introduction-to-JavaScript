/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
function greet(name) {
    console.log('Hey there, ' + name + '! Welcome Back!');
}

greet('Zhen');

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
/* Answer: A function declaration is defined using the function keyword followed by the function name,
and it can be called before it is defined, while a function expression is defined by assigning a function
to a variable or constant, and it must be defined before it is called. */

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
const calculateArea = function(length, width) {
    return length * width;
};

const length = 5;
const width = 8;
const area = calculateArea(length, width);

console.log("The area of the rectangle is: ", area);

// Checkpoint 4.2 What is a callback function? Provide an example.
/* Answer: A callback function is a function that is passed as an argument
to another function and is executed at a later point in time or when a specific
event occurs. It allows for asynchronous programming and enables functions to be
more flexible and reusable. */

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
function modifyArray(array, modifierFunction) {
    const modifiedArray = [];
    for (let i = 0; i < array.length; i++) {
        modifiedArray.push(modifierFunction(array[i]));
    }
    return modifiedArray;
}

const numbers = [1, 2, 3, 4, 5];

function incrementByOne(number) {
    return number + 1;
}
  
const modifiedNumbers = modifyArray(numbers, incrementByOne);
console.log(modifiedNumbers);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
const { add, PI } = require('./mathUtils');

const num1 = 5;
const num2 = 3;
const sum = add(num1, num2);

console.log('Sum:', sum);
console.log('PI:', PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
const isPalindrome = require('./isPalindrome')
const result = isPalindrome('civic');
console.log(result); // Output: true



// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
/* Answer: The require function is used in Node.js to import modules or files, while module.exports
is used to export functionality from a module. They provide a way to share and use code between
different files in a Node.js application. The import and export keywords are newer syntax options that
provide similar functionality and are commonly used in modern JavaScript environments. */
