/*
    Prototype Inheritance in JavaScript
    Basics behind Prototype Inheritance in JavaScript-

    * Under the classical inheritance phenomenon, we create a new class that actually extends or 
    reuses the properties or functions, or methods of another class that are used by several 
    programming languages (like C, C++, Java, etc.)
    * JavaScript doesn’t use classical inheritance instead it uses the phenomenon called 
    Prototype Inheritance.
    * In Prototype Inheritance, an object uses the properties or methods of another object 
    via the prototype linkage. 
    * All the JavaScript objects inherit properties and methods from a prototype (like Date 
    objects inherit properties from Date.prototype and so on).
    
    Prototype Inheritance with several following approaches-
    1. using __proto__
    2. Using Object.setPrototypeOf() method
*/

/*
Approach 1: using __proto__

This __proto__ is a bit old as well as an outdated approach
*/
let animal = {
  animalEats: true,
};

let rabbit = {
  rabbitJumps: true,
};

// Sets rabbit.[[Prototype]] = animal
rabbit.__proto__ = animal;
console.log(rabbit.animalEats); // output: true
console.log(rabbit.rabbitJumps); // output: true

/*
Approach 2: Using Object.setPrototypeOf() method

Object.setPrototypeOf() method takes two parameters first one is the object which is 
to have its prototype set and the second one is the object’s new prototype. Thereafter 
we have declared two objects and using those two objects, we will set one of the objects 
as the prototype object for another object.
*/

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.animalEats); // output: true
console.log(rabbit.rabbitJumps); // output: true
