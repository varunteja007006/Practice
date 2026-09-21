/*
JavaScript Math

JavaScript Math object is used to perform mathematical operations on numbers. Math is an inbuilt 
object that works with numbers types but it does not work with BigInt.
*/

console.log(Math.PI);

/*
JavaScript Math Properties: A JavaScript property is a member of an object that 
associates a key with a value, in the math object of JavaScript there is a single 
type of property that are the static properties no instance properties are there.

*/

// Static Property: A static property is a property that has the same value for the entire class.
// E - The exp is a mathematical constant having an approximate value equal to 2.718.
// LN2 - Find the value of a natural log of 2.
// PI - Find the value of Pi
// LN10 - Find the value of a natural log of 10.
// LOG2E - Find the value of base 2 logarithms of e, where e is approximately equal to1.442
// LOG10E - Find the value of base 10 logarithms of e, where e is approximately equal to 0.434.
// SQRT1_2 - Find the value of the square root of 1/2, whose value is approximately 0.707106.
// SQRT2 - Find the value of the square root of 2, whose value is approximately 1.4142

/*
JavaScript Math Methods: JavaScript methods ar There are e actions that can be performed 
on objects. Only static methods are available in the math object of JavaScript.

*/

// Static Method: If the method is called using the Math class itself then it is called
// a static method of Math class.

// abs - Return the absolute value of a number.
console.log(Math.abs(2));
console.log(Math.abs(2.56));

// acos - Return the arccosine of a number in radians.
console.log("When 1 is passed as a parameter to Math.acos(): " + Math.acos(1));
