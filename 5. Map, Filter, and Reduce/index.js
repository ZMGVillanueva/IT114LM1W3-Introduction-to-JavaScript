/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const squaredNumbers = numbers.map((num) => num ** 2);

console.log(squaredNumbers); // Output: [1, 4, 16, 16, 25]

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 4]

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);
// Output: 16



// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const uppercaseWords = words.map((word) => word.toUpperCase());
console.log(uppercaseWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const filteredWords = words.filter(word => word.length > 4);
console.log(filteredWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const concatenatedString = words.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(concatenatedString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
/* Answer: 
map is a method that creates a new array by applying a provided function to each element of the original array.
filter is a method that creates a new array containing only the elements that pass a provided test function.
reduce is a method that applies a provided function to each element of the array to reduce it to a single value. */