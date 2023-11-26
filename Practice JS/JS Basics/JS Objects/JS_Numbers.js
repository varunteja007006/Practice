/*
JavaScript Numbers

Javascript Numbers are primitive data types. Unlike other programming languages, 
you don’t need int, float, etc to declare different numeric values. JavaScript numbers 
are always stored in double-precision 64-bit binary format

This format stores numbers in 64 bits, 
- 0-51 bit stores value(fraction)
- 52-62 bit stores exponent
- 63-bit stores sign

Number Literals: The types of number literals You can use decimal, binary, octal, and hexadecimal.
*/

// *Integers are accurate up to 15 digits
let a = 999999999999999; // a will be 999999999999999
let b = 9999999999999999; // b will be 10000000000000000

// * The floating point is not 100% accurate. The maximum number of decimals is up to 17.
let val = 0.22 + 0.12; // val will be 0.33999999999999997

/*
Decimal Numbers: JavaScript Numbers does not have different types of numbers(ex: int, 
float, long, short) which other programming languages do. It has only one type of 
number and it can hold both with or without decimal values.
*/
let decimal_no_1 = 33;
let decimal_no_2 = 3.3;

/*
Octal Number: If the number starts with 0 and the following number is smaller 
than 8. It will be parsed as an Octal Number. 
*/
let octal_number = 0o562; // x will be 370(parsed as an octal number).

/*
Binary Numbers: They start with 0b or 0B followed by 0’s and 1’s. 
*/
let binary_number_1 = 0b11; // x will be 3
let binary_number_2 = 0b0111; // x will be 7

/*
Hexadecimal Numbers: They start with 0x or 0X followed by any digit belonging (0123456789ABCDEF) 
*/

let hexa_number = 0xfff; // x will be 4095

/*
Number Coercion: The built-in operations of Javascript that expect numbers coerce their 
arguments to numbers first. Some popular coercion is given below:

- undefined is returned as NaN
- null is returned as0
- true as 1 and false as 0
- Strings are returned by parsing them as if they contain an object literal. If the 
    string is not parsed it returns NaN.
- BignInts and symbol throw typeError
*/

/*
Print numbers of literals
*/

// Decimal Numbers
console.log("Decimal number", 323);

// Binary Numbers
console.log("Binary number", 0b11);
console.log("Binary number", 0b0111);

// Hexadecimal Numbers
console.log("hexa number: ", 0xfff);

// Octal Numbers
console.log("Octal number:", 0o562);

/*
Number methods
*/

let x = 21;
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toPrecision(4));
console.log(Number.isInteger(x));
console.log(x.toLocaleString("bn-BD"));

/*
-> If you add a string and number, there will be a string concatenation as an output.

-> Javascript numbers which are primarily primitive values can also be defined as 
objects using a new keyword.

-> Javascript numbers are of base 10 by default, but we can use the toString() method to 
get output in the required base from base 2 to base 36.

-> Apart from regular numbers, Javascript has BigInt numbers which are integers of arbitrary 
length. Regular integer numbers can’t safely exceed (253-1) or be less than -(253-1) that’s 
when BigInt serves the purpose.
*/
