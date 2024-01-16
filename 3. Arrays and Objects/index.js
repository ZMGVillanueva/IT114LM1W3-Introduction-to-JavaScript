/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Calculate the minimum
const min = Math.min(...numbers);

// Calculate the maximum
const max = Math.max(...numbers);

// Calculate the average
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const average = sum / numbers.length;

console.log("Minimum:", min);
console.log("Maximum:", max);
console.log("Average:", average);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
/* Answer: Lists in Python are more versatile, allowing for the storage of elements of
different data types and providing built-in functionalities, while arrays in JavaScript
are more memory-efficient and faster due to their contiguous memory allocation. */

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
const course = {
    courseCode: "IT114L",
    courseName: "Introduction to Programming(Laboratory)",
    units: 1,
    numberOfStudents: 40
  };
  
  console.log(course);

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
course.profName = 'Job Lipat';
console.log(course.profName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term.
const courses = [
    {
        courseCode: "IT114L",
        courseName: "Web Systems And Technologies (Laboratory)",
        units: 1,
        numberOfStudents: 40,
        profName: "Job Lipat"
    },
    {
        courseCode: "PE044",
        courseName: "PATHFIT 4",
        units: 2,
        numberOfStudents: 51,
        professorName: "Ferdinand Fermin"
    },
    {
        courseCode: "CS120",
        courseName: "Structure of Programming Languages",
        units: 3,
        numberOfStudents: 37,
        professorName: "Aurelia Delos Santos"
    }
  ];
  
    console.log(courses);

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
let totalUnits = 0;

for (let i = 0; i < courses.length; i++) {
  totalUnits += courses[i].units;
}

console.log(totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
/* Answer: In Python, the equivalent of objects are dictionaries. Both objects and dictionaries are key-value data structures,
but objects in languages like JavaScript typically have more advanced features, such as methods and inheritance, compared to
dictionaries in Python which primarily focus on storing and retrieving values based on keys. */

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
let additionalNumber = 99;

let newArray = [...numbers, additionalNumber];

console.log(newArray);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
const { courseCode, units } = { ...course };

console.log(courseCode); // Output: IT114L
console.log(units); // Output: 1
