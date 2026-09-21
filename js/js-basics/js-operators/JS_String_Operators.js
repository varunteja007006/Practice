/* 
  String Operators
  JavaScript String Operators are used to manipulate and perform operations on strings.
  These operators help us to join one string to another string.
  
  Type of JavaScript String Operators
  1. Concatenate Operator
  2. Concatenate Assignment Operator
*/

// Concatenate Operator

const str1 = "Hello";
const str2 = "World";
const output = str1 + str2;
console.log("Concatenate Operator: ", output);
// here new string is created by joining the original strings

// Concatenate Assignment Operator
console.log("Concatenate Assignment Operator: ");
const data = ["Hello", "World", "!"];
let str_output;
for (let str of data) {
  str_output += str;
}
console.log(str_output);
// here the original string is modified by joining another string
