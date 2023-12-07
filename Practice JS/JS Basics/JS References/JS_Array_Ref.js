/*
JavaScript Array Reference
*/

// copying one array items to another
const arrOne = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
console.log(`first array: ${arrOne}\n`);

let newArrOne = [];
arrOne.forEach((elem) => {
  newArrOne.push(elem);
});
console.log(`second array: ${arrOne}\n`);
// JavaScript Array constructor - Array()
/*
Instance Property - An instance property is a property that has a new copy for every 
new instance of the class.

-> constructor (returns reference of the function)
-> length (returns no of elements in array, you can also set no of elements in array)
*/
const arr = new Array("dummy1", "dummy2", "dummy3");
console.log(`Array length is: ${arr.length} || array: ${arr}`);

// JavaScript Array Methods
/*
Static Methods - Method is called using the array class itself then it is static Method

-> from() = Returns an array object from any object with a length property or an iterable object.
-> isArray() = Returns true if the argument passed is an array else it returns false.
-> of() = Creates a new array instance with variables present as the argument of the function.
*/
// static method of()
console.log(`Using static method of(): ${Array.of("Hell", "Heaven")}`);
// static method isArray()
console.log(`Using static method isArray(): ${Array.isArray(arr)}`);
// static method from()
const str = "IronMan";
console.log(`Using static method from(): ${Array.from(str)}`);

/*
Instance Methods - If the method is called on an instance of a array then it is called an 
instance method.
*/
