/*
    JavaScript Relational Operators

    JavaScript Relational operators are used to compare its operands and determine 
    the relationship between them. They return a Boolean value (true or false) based 
    on the comparison result.
    
    Types of relational operators:
    1. in operator
    2. instanceof operator
*/

// Common data used for types of relational operators

let languages = ["HTML", "CSS", "JavaScript"];

const Data = {
  name: "Rahul",
  age: 21,
  city: "Noida",
};

/*
    'in' Operator
    
    The in-operator in JavaScript checks if a specified property exists in an object or if an 
    element exists in an array. It returns a Boolean value.
*/

// Array type data
// true (index 1 exists in the array)
console.log(1 in languages);

// false (index 3 doesn't exist in the array)
console.log(3 in languages);

// Similarly for object type data
// true ("name" property exists in the object)
console.log("name" in Data);

// false ("address" property doesn't exist in the object)
console.log("address" in Data);

/*
    instanceof Operator

    The instanceof operator in JavaScript tests if an object is an instance of a particular 
    class or constructor, returning a Boolean value.
*/

console.log(languages instanceof Array); // output true
console.log(languages instanceof Object); // output true
console.log(languages instanceof String); // output false
console.log(languages instanceof Number); // output false

let myString = new String();
let myDate = new Date();

console.log(myString instanceof Object); // true
console.log(myString instanceof Date); // false
console.log(myString instanceof String); // true
console.log(myDate instanceof Date); // true
console.log(myDate instanceof Object); // true
console.log(myDate instanceof String); // false
