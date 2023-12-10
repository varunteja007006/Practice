/*
JavaScript Array Methods

Static Methods - Method is called using the array class itself then it is static Method.
*/
const arr = new Array("dummy1", "dummy2", "dummy3");

// static method of() = Creates a new array instance with variables present as the argument of the function.
console.log(`\nUsing static method of(): `, Array.of("Hell", "Heaven"));

// static method isArray() = Returns true if the argument passed is an array else it returns false.
console.log(`\nUsing static method isArray(): `, Array.isArray(arr));

// static method from()  = Returns an array object from any object with a length property or an iterable object.
const str = "IronMan";
console.log(`\nThe string is: `, str);
console.log(`Using static method from(): `, Array.from(str));
