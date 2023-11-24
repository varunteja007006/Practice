/*
    Unary Operators in JavaScript
    
    JavaScript Unary Operators work on a single operand and perform various operations, 
    like incrementing/decrementing, evaluating data type, negation of a value, etc.

    Unary Plus Operator ( + )
    Unary Minus Operator ( – )
    Unary Increment Operator ( ++ )
    Unary Decrement Operator ( — )
    Logical NOT Operator ( ! )
    Bitwise NOT Operator ( ~ )
    typeof Operator
    delete Operator
    void Operator

*/

// Unary Plus (+) Operator
// The unary plus (+) converts an operand into a number
// If the operand is a string that represents a valid number, it will be converted to a number.
// Otherwise, it will evaluate to NaN (Not-a-Number).

let str1 = "12";

// Using unary plus to convert string to number
let num = +str1;
console.log(num); // output 12

// Here we are using typeof operator
console.log(typeof num); // number

// "Geeks" cannot be converted to a number
let str2 = +"Geeks";
console.log(str2); // NaN

// JavaScript Unary Minus (-) Operator
// The Unary Negation (-) operator is used to convert its operand to a negative number,
// if it isn’t already a negative number.

let str3 = "12";

// Unary negation, negates the
// value of number
let num1 = -str3;

console.log(num1); // output -12

// Unary negation, tries to convert
// 'Geeks' to a number
let str4 = -"Geeks";

console.log(str4); // output NaN

/*
    JavaScript Unary Increment (++) Operator
    The unary increment operator (++) adds 1 to its operand’s value and evaluates to the updated 
    value. 
    It can be used as a postfix or prefix operator.

    Postfix: In postfix, the current value of the variable is used in the expression, and then the 
    variable’s value is incremented by 1.

    Prefix: In prefix, the variable’s value is first incremented by 1, and then the updated value 
    is used in the expression.
*/

// Case 1: Postfix
let numJUI = 12;

// The current value of 'numJUI' (12) is used,
// then 'numJUI' is incremented to 13.
let numPostfix = numJUI++;

console.log(numPostfix); // output 12

// Updated value of 'numJUI'
console.log(numJUI); // output 13

// Case 2: Preifix
let numJUI2 = 10;

//'numJUI2' is incremented to 11, and then
// the updated value (11) is used
let num1Prefix = ++numJUI2;

console.log(num1Prefix); // output 11

// Updated value of 'numJUI2'
console.log(numJUI2); // output 11

/*
    JavaScript Unary Decrement (–) Operator
    The unary decrement operator (–) subtracts 1 from its operand’s value and evaluates it to 
    the updated value, and we can use it as a postfix or prefix operator.

    Postfix: In postfix form, the current value of the variable is used in the expression, 
    and then the variable’s value is decremented by 1.
    
    Prefix: In prefix form, the variable’s value is first decremented by 1, and then 
    the updated value is used in the expression.
*/
let numJUD = 8;

// The current value of 'numJUD' (8) is used,
// then 'numJUD' is decremented to 7
let num1Postfix = numJUD--;

// Output: 8
console.log(num1Postfix);

// Output: 7 (updated value of 'numJUD')
console.log(numJUD);

let numJUD2 = 15;

// 'numJUD2' is decremented to 14, and then
// the updated value (14) is used
let num2Prefix = --numJUD2;

// Output: 14
console.log(num2Prefix);

// Output: 14 (updated value of 'numJUD2')
console.log(numJUD2);

/*
    JavaScript Logical NOT (!) Operator
    The logical NOT (!) is a unary operator that negates the Boolean value of an operand, 
    converting true to false and false to true.
*/

let var1 = false;
let result1 = !var1;
console.log(result1); // output true

let val2 = true;
let result2 = !val2;
console.log(result2); // output false

/*
    JavaScript Bitwise NOT (~) Operator
    The bitwise NOT (~) is a unary operator that inverts all the bits of its operand, 
    converting each 0 to 1 and each 1 to 0.
*/
let num_11 = 10;

// Bitwise NOT, inverts all bits of 'num_11'
let result = ~num_11;

console.log(result); // output -11

/*
    JavaScript typeof Operator
    The JavaScript typeof operator returns the data type of its operand in the form of a string. 
    The operand can be any object, function, or variable.
*/

let num_10 = 18;
let str = "GeeksforGeeks";
let isTrue = true;
let obj = { name: "Aman", age: 21 };
let undefinedVar;

console.log(typeof num_10); // number
console.log(typeof str); // string
console.log(typeof isTrue); // boolean
console.log(typeof obj); // object
console.log(typeof undefinedVar); // undefined

/*
    JavaScript delete Operator
    The delete operator in JavaScript removes a property from an object. If no other references 
    exist, the property’s memory is automatically released.
*/
let person = {
  name: "Ankit",
  age: 21,
  city: "Noida",
};

console.log(person); // output: { name: 'Ankit', age: 21, city: 'Noida' }

// Deleting the 'age' property
// from the 'person' object
delete person.age;

console.log(person); // output: { name: 'Ankit', city: 'Noida' }

/*
    JavaScript void Operator
    The void operator evaluates the given expression and then returns undefined.
*/

function myFunction() {
  return void 0;
}
console.log(myFunction()); // output: undefined
