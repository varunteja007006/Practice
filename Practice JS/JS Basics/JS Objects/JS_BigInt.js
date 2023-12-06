/*
JavaScript BigInt

BigInt is a built-in object in JavaScript that provides a way to represent whole numbers 
larger than 253-1. The largest number that JavaScript can reliably represent with the Number 
primitive is 253-1, which is represented by the MAX_SAFE_INTEGER constant.
*/

// creating a BigInt using the BigInt() function.

// Parameter in decimal format
let bigNum = BigInt("123422222222222222222222222222222222222");
console.log(bigNum);

// Parameter in hexadecimal format
let bigHex = BigInt("0x1ffffffeeeeeeeeef");
console.log(bigHex);

// Parameter in binary format
let bigBin = BigInt("0b1010101001010101001111111111111111");
console.log(bigBin);

// creating a BigInt by appending n at the end of the number.
// Decimal format
let bigNum_2 = 123422222222222222222222222222222222222n;
console.log(bigNum);

// Hexadecimal format
let bigHex_2 = 0x1ffffffeeeeeeeeefn;
console.log(bigHex);

// Binary format
let bigBin_2 = 0b1010101001010101001111111111111111n;
console.log(bigBin);

/*
Usage Recommendation: The following applications are not recommended to be used with BigInt due 
to its implementation:

Coercion: Coercing between Number and BigInt can lead to loss of precision, it is recommended 
to only use BigInt when values greater than 253 are reasonably expected and not to coerce 
between the two types.

Cryptography: The operations supported on BigInt are not constant time. BigInt is therefore 
unsuitable for use in cryptography.

*/

console.log(typeof 100n === 100); // false
console.log(typeof 100n == 100); // false
console.log(typeof 100n === "bigint"); // Returns true
console.log(100n < 101); // Returns true due to coercion
