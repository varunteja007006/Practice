/*
  Primitive vs Not Primitive
  Primitive data types: Primitive values are immutable
  1. string
  2. number
  3. boolean
  4. null
  5. undefined
  6. symbol
  7. bigint

  Rest all are objects
  -> Booleans can be objects (if defined with the new keyword)
  -> Numbers can be objects (if defined with the new keyword)
  -> Strings can be objects (if defined with the new keyword)
  -> Dates are always objects
  -> Maths are always objects
  -> Regular expressions are always objects
  -> Arrays are always objects
  -> Functions are always objects
  -> Objects are always objects
*/

// A JavaScript object is a collection of named values, which are properties(kind of like key-value pair)
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Object properties can be both primitive values, other objects, and functions.
// Methods are actions that can be performed on objects.
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullname: () => {
    return this.firstName + this.lastName;
  },
};

/*
  Creating a JavaScript Object

  There are different ways to create new objects:
  -> Create a single object, using an object literal.
  -> Create a single object, with the keyword new.
  -> Define an object constructor, and then create objects of the constructed type.
  -> Create an object using Object.create().
*/

// Object literal way
const sample = { test: "test", test1: "test1" };

// Object literal other way
const sample1 = {};
sample1.test = "test";
sample1.test1 = "test1";

// Using 'new' keyword
const sample2 = new Object();
sample2.test = "test";
sample2.test1 = "test1";

// Note: Objects are mutable: They are addressed by reference, not by value.

// Define an object constructor, and then create objects of the constructed type.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const sample3 = new Person("tim", 20);
console.log(sample3.name);
console.log(sample3.age);

/*
Object constructors are a powerful way to create and manage objects in JavaScript. 
You can use them to create objects of any type, and you can customize the initialization process 
for each type of object.
*/

const courses = {
  // Declaring a courses object
  firstCourse: "C++ STL",
  secondCourse: "DSA Self Paced",
  thirdCourse: "CS Core Subjects",
};

// Creating a new empty object with
// prototype set to courses object
const student1 = Object.create(courses);

// Defining student1 properties and methods
student1.id = 123;
student1.firstName = "Prakhar";
student1.showEnrolledCourses = function () {
  console.log(courses);
};

// Iterating over all properties of
// student1 object
for (let prop in student1) {
  console.log(prop + " -> " + student1[prop]);
}
// Iterating over only those properties
// of student 1 object which is not on
// its prototype chain
for (let prop in student1) {
  if (student1.hasOwnProperty(prop)) {
    console.log(prop + " -> " + student1[prop]);
  }
}

// Creating objects from the class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating objects from the above class

const person3 = new Person("John", 30);
person1.greet();

const person2 = new Person("Mary", 25);
person2.greet();
