/*
Static methods
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
   - Object.isExtensible()
   - isFrozen()
   - Object.isSealed()
   - keys()
   - preventExtensions()
   - Object.seal()
   - Object.setPrototypeOf()
   - toLocalString() - belongs to arrays
   - Object.values()
*/

// Static method Object.values() = Return an array whose elements are the enumerable property values found on the object.
const obj = {
  name: "Bond",
  age: 30,
  profession: "secret agent",
};

const resultValues = Object.values(obj);
console.log("Static method Object.values(): ", resultValues);

// Static method Object.setPrototypeOf = The internal [[Prototype]] property of a specified object to
// another object or null.
const obj_2 = {
  title: "Threat",
};
Object.setPrototypeOf(obj_2, obj);
console.log("\nStatic method Object.setPrototypeOf(): ", obj_2);
console.log(obj_2.name);
console.log(obj_2.age);
console.log(obj_2.profession);

/* 
Static method Object.seal() = There is a method Object.seal() which is used to seal an object.
Sealing an object does not allow new properties to be added and marks all existing properties as 
non-configurable. Although values of present properties can be changed as long as they are writable. 
The object to be sealed is passed as an argument and the method returns the object which has been 
sealed.
*/
const sealedObj = Object.seal(obj); // 'obj' is sealed and a reference of it is 'sealedObj'
console.log(
  `\n'obj' is sealed and a reference of it is 'sealedObj': `,
  obj === sealedObj
);
console.log("Static method Object.seal(): ");
console.log(sealedObj); // { name: 'Bond', age: 30, profession: 'secret agent' }
console.log("Try to update the sealed object");
sealedObj.name = "James";
console.log(sealedObj.name); // James
sealedObj.task = "Finish mission";
obj.task = "Save Lives";
console.log(sealedObj.task); // undefined
console.log(obj.task); // undefined

// Static method Object.isSealed() = Determine if an object is sealed or not.
console.log("Is obj sealed? ", Object.isSealed(obj)); // true
console.log("Is sealedObj? ", Object.isSealed(sealedObj)); // true
console.log("Is obj_2? ", Object.isSealed(obj_2)); //false

/* 
Static method Object.preventExtensible()

It prevents new properties from ever being added to an object. This method also prevents 
reassigning of the object’s prototype.
*/
console.log("\nStatic method Object.preventExtensible(): ");
let geeks = {};
let geeks0 = Object.preventExtensions(geeks);
console.log("geeks: ", geeks, "|| geeks0: ", geeks0);
console.log(`geeks and geeks0 are equal? '`, geeks0 === geeks);

const geeks1 = { prop1: 555 };
console.log("geeks1: ", geeks1);
Object.preventExtensions(geeks1);
delete geeks1.prop1;
console.log("Does geeks1 has prop1 property: ", geeks1.hasOwnProperty("prop1")); // false; prop1 deleted

const geeks2 = {};
Object.preventExtensions(geeks2);
geeks2.prop2 = 3;
console.log("Does geeks2 has prop2 property: ", geeks2.hasOwnProperty("prop2")); // false; cannot add properties

// Static method Object.isExtensible() = Checks whether an object is extensible or not.
console.log("\nStatic method Object.isExtensible(): ");
console.log(Object.isExtensible(geeks2)); // false

// Static method
