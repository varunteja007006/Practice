/*
    Prototype in JavaScript

    JavaScript is a prototype based language, so, whenever we create a function using JavaScript, 
    JavaScript engine adds a prototype property inside a function, Prototype property is basically 
    an object (also known as Prototype object), where we can attach methods and properties in a 
    prototype object, which enables all the other objects to inherit these methods and properties.

    Prototype property enables other objects to inherit all the properties and methods of 
    function constructor.
*/

// function constructor
function Person(name, job, yearOfBirth) {
  this.name = name;
  this.job = job;
  this.yearOfBirth = yearOfBirth;
}
// this will show Person's prototype property.
Person.prototype;
