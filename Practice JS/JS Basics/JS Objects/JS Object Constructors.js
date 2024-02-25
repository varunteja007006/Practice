// JavaScript Object Constructors

// Person is a Object constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// We can create objects now using the Person constructor
// Objects of the same type are created by calling the constructor function with the new keyword
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log("Father: ", myFather);
console.log("Mother: ", myMother);

// this keyword refers to an object, Which object depends on how this is being invoked (used or called).

// NOTE
// You cannot add a new property to an object constructor the same way you add a new property to an existing object:
Person.nationality = "English";
const mySister = new Person("Jane", "Rally", 18, "orange");
console.log("Sister: ", mySister); // We can see that nationality property is not available

// To add a new property to a constructor, you must add it to the constructor function:
function PersonTwo(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
  // You can also add methods
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}
const myBro = new PersonTwo("Ram", "Das", 18, "red");
console.log("Brother: ", myBro);
console.log("Brother: ", myBro.name());

// built in JavaScript Constructors
new String(); // A new String object
new Number(); // A new Number object
new Boolean(); // A new Boolean object
new Object(); // A new Object object
new Array(); // A new Array object
new RegExp(); // A new RegExp object
new Function(); // A new Function object
new Date(); // A new Date object
