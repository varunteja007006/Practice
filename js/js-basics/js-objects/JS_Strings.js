/*
JavaScript String

JavaScript String Object is a sequence of characters. It contains zero or more characters 
within single or double quotes.
*/

// Create a variable and assign String value
const str_1 = "Hello"; // single quotes
const str_2 = "World"; // double quotes

// Creating a String using String() Constructor
const str = String("javascript");

// We can also use single quotes inside double quotes and vice-versa.
const st1 = "'GeeksforGeeks' is learning portal";
const st2 = '"GfG" is a learning portal';

/*
Escape Characters
We can use escape characters in string to add single quotes, dual quotes, and backslash.

Syntax:

\' - Inserts a single quote
\" - Inserts a double quote 
\\ - Inserts a backslash
*/
const str1 = "'GfG' is a learning portal";
const str2 = '"GfG" is a learning portal';
const str3 = "\\GfG\\ is a learning portal";

console.log(str1);
console.log(str2);
console.log(str3);

// Display the length of String
console.log("String Length: " + str.length);

/*
Passing JavaScript String as Objects
We can create a JavaScript string using the new keyword.
*/
const strGFG = new String("GeeksforGeeks");

console.log("Using new keyword", strGFG);

/*
Are the strings created by the new keyword is same as normal strings?

No, the string created by the new keyword is an object and is not the same as normal strings
*/
console.log(`\nstr1: ${str_1}, str2: ${strGFG}`);
console.log(str_1 == strGFG);
console.log(str_1 === strGFG);

// String methods
let x = "GeeksforGeeks";

console.log(x.indexOf("Geeks"));

console.log(x.slice(0, 5));

console.log(x.replace("Geek", "Super Geek"));

console.log(x.toLowerCase());
