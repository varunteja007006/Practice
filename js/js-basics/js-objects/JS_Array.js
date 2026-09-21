/*
    JavaScript Arrays

    JavaScript Array is a single variable that is used to store elements of different 
    data types. JavaScript arrays are zero-indexed. 

    Arrays can be declared two ways:
    1. Creating an array using the array literal.
    2. Creating an array using the JavaScript 'new' keyword.
*/

// Initializing while declaring the array 'courses'
let courses = ["HTML", "CSS", "Javascript", "React"];

// Using the 'new' keyword create array
let arr = new Array(2);
arr[0] = "item one"; // array is zero indexed
arr[1] = "item two";

console.log(arr);

// Creates an array having elements 10, 20, 30, 40, 50
let numArr = new Array(10, 20, 30, 40, 50);
console.log("Array of numbers: ", numArr);

// Creates an array of 5 undefined elements
let undef_arr = new Array(5);
console.log("Array of undefined elements: ", undef_arr);

// Creates an array with one element
let fruits = new Array("Apple 🍎");
console.log("Fruits : ", fruits);

// Accessing Elements of an Array
console.log("\nAccessing Elements of an Array");
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);

// Change elements from a pre-defined array
console.log("\nChange elements from a pre-defined array");
console.log("Before changing array", courses);
courses[1] = "💣"; // we changed the element of an array at index 1
console.log("After changing the array", courses);

console.log("\n");

// Increase and decrease the length of an array :
courses.length = 5; // Increasing array length to 5
console.log("Array after increased length: ", courses);
courses.length = 2; // Decreasing array length to 2
console.log("Array after decreased length: ", courses);

console.log("\n");

// We can also update an array after initialization (change existing or add new element)
courses[2] = "PhP";
courses[3] = "React";

// push method on Array
courses.push("🦁");
console.log("Array after initializing: ", courses);

console.log("\n");

// Loop through array
// for loop
for (let i = 0; i < courses.length; i++) {
  console.log("for loop: ", courses[i]);
}

console.log("\n");

// foreach loop
courses.forEach((item) => {
  console.log("forEach loop: ", item);
});
