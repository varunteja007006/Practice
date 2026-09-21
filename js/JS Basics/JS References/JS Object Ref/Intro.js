/*
JavaScript Object References

Instance Properties: An instance property is a property that has a new copy for every 
new instance of the class.

- constructor = Returns a reference to the object constructor function that
has created the instance of an object.
*/

/*
JavaScript Object Methods: JavaScript methods are actions that can be performed on objects. 

There are two types of methods: Static and Instance.

- Instance methods
    - defineGetter()
    - hasOwnProperty()
    - isPrototypeOf()
    - propertyIsEnumerable()
*/

// instance method defineGetter = Called when the specified property is looked up
let obj = {
  name: "defineGetter method",
};
obj.__defineGetter__("hello", () => {
  return 10;
});
console.log("Using defineGetter: ", obj.hello); // 10

// instance method hasOwnProperty = Check whether the object has the specified property as its own property.

console.log("\nUsing hasOwnProperty: ", obj.hasOwnProperty("name")); // true ; because 'obj' has name property
console.log("Using hasOwnProperty: ", obj.hasOwnProperty("age")); // false ; because 'obj' has no age property

// instance method isPrototypeOf = Checks if an object exists in another object’s prototype chain.

function obj1() {}
function obj2() {}

obj1.prototype = Object.create(obj2.prototype); // attaching obj2 prototype to obj1
const obj3 = new obj1(); // new instance of obj1 created using obj3
console.log("\nUsing isPrototypeOf: ", obj1.prototype.isPrototypeOf(obj3));
console.log("Using isPrototypeOf: ", obj2.prototype.isPrototypeOf(obj3));

// instance method propertyIsEnumerable() = Returns a Boolean indicating whether the specified property is
// enumerable and is the object’s own property.
const demoObj = {};
const demoArr = [];
demoObj.propOne = 42;
demoArr[0] = 42;
console.log("\nUsing propertyIsEnumerable:");
console.log("For demoObj: ", demoObj.propertyIsEnumerable("propOne")); // true; property 'propOne' is available
console.log("For demoObj: ", demoObj.propertyIsEnumerable("propTwo")); // false; property 'propTwo' is unavailable

console.log("For demoArr: ", demoArr.propertyIsEnumerable(0)); // true; element at index 0 is available
console.log("For demoArr: ", demoArr.propertyIsEnumerable(1)); // false; element at index 1 is unavailable
