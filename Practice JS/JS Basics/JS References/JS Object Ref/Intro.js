/*
JavaScript Object References

Instance Properties: An instance property is a property that has a new copy for every 
new instance of the class.

- constructor = Returns a reference to the object constructor function that
has created the instance of an object.
*/

/*
JavaScript Object Methods: JavaScript methods are actions that can be performed on objects. 

- Static methods
    - assign()
    - create()
    - defineProperty()
    - defineProperties()
    - entries()
    - freeze()
    - fromEntries()
    - getOwnPropertyDescriptor()
    - getOwnPropertyNames()
    - getOwnPropertySymbols()
    - getPrototypeOf()
    - hasOwn()
    - Object.is()
    - isExtensible()
    - isFrozen()
    - isSealed()
    - keys()
    - preventExtensions()
    - seal()
    - setPrototypeOf()
    - toLocalString()
    - values()
    

- Instance methods
    - defineGetter()
    - hasOwnProperty()
    - isPrototypeOf()
    - isEnumerable()
*/
// instance method defineGetter
let obj = {
  name: "defineGetter method",
};
obj.__defineGetter__("hello", () => {
  return 10;
});
console.log("Using defineGetter: ", obj.hello); // 10

// instance method hasOwnProperty
console.log("\nUsing hasOwnProperty: ", obj.hasOwnProperty("name")); // true ; because 'obj' has name property
console.log("Using hasOwnProperty: ", obj.hasOwnProperty("age")); // false ; because 'obj' has no age property

// instance method isPrototypeOf
function obj1() {}
function obj2() {}

obj1.prototype = Object.create(obj2.prototype); // attaching obj2 prototype to obj1
const obj3 = new obj1(); // new instance of obj1 created using obj3
console.log("\nUsing isPrototypeOf: ", obj1.prototype.isPrototypeOf(obj3));
console.log("Using isPrototypeOf: ", obj2.prototype.isPrototypeOf(obj3));

