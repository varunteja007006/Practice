/*
* JavaScript Boolean

Boolean is a datatype that returns either of two values i.e. true or false. 
In JavaScript, Boolean is used as a function to get the value of a variable, 
object, conditions, expressions, etc. in terms of true or false.

Note: 
A variable or object which has a value is treated as a true boolean value. 
0’, ‘NaN’, empty string, ‘undefined’, and ‘null’ is treated as false boolean values. 
*/

/*
Boolean() function in JavaScript: 
Boolean function returns the boolean value of the variable. 
It can also be used to find the boolean result of a condition, expression, etc.

Syntax
Boolean(variable / expression);
*/

/*
JavaScript Boolean object: The boolean object in javascript is an object wrapper 
for boolean values. Booleans in JavaScript can also be defined using the new keyword.

Syntax
new Boolean(value)
*/

// Boolean Method
function gfg() {
  console.log(Boolean(12));
}
gfg();

// Truthy logs
console.log("Boolean(10) is " + Boolean(10));
console.log('Boolean("GeeksforGeeks") is ' + Boolean("GeeksforGeeks"));
console.log("Boolean(2.74) is " + Boolean(2.74));
console.log("Boolean(-1) is " + Boolean(-1));
console.log("Boolean('true') is " + Boolean(true));
console.log("Boolean(3 * 2 + 1.11) is " + Boolean(3 * 2 + 1.11));
console.log("Boolean(1<2) is " + Boolean(1 < 2));
console.log("\n\n");

// Falsy logs
let e; //undefined
console.log("Boolean(0) is " + Boolean(0));
console.log('Boolean("") is ' + Boolean(""));
console.log("Boolean(e) undefined is " + Boolean(e));
console.log("Boolean(-0) is " + Boolean(-0));
console.log("Boolean(false) is " + Boolean(false));
console.log("Boolean(NaN) is " + Boolean(NaN));
console.log("Boolean(null) is " + Boolean(null));
console.log("Boolean(1>2) is " + Boolean(1 > 2));

// boolean vs boolean object
let v1 = true;
let v2 = new Boolean(true);

console.log("v1 = = v2 is " + (v1 == v2)); // output: true
console.log("v1 = = = v2 is " + (v1 === v2)); // output: false

// v1 = = = v2 is not true as the type of v1 and v2(object) is not the same.
