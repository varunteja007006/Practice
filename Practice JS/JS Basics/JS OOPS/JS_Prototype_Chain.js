/*
Prototype Chain in JavaScript

All objects in JavaScript have a prototype. An object’s prototype is also considered to 
be an object.

Because a prototype is an object, a prototype has its own prototype. 
In that case, the prototype of Dog.prototype is Object.prototype as shown below
*/
function Dog(name) {
  this.name = name;
}
console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // yields true

let duck = new Dog("Donald");
console.log(duck.hasOwnProperty("name")); // yields true

/*
The hasOwnProperty() method is defined in Object.prototype, which can be accessed 
by Dog.prototype, which can then be accessed by variable “duck”. It clearly explains 
the prototype chain. In this prototype chain, “Dog” is the supertype for “duck”, while 
“duck” is the subtype. The object is a supertype for both “Dog” and “duck”. We take an 
Object as a supertype for all objects in JavaScript. Any object can use the hasOwnProperty() 
JavaScript method.
*/
