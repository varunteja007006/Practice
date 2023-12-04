var a = Math.max() < Math.min();
var b = Math.max() > Math.min();
console.log(a); // true
console.log(b); // false

var c = true + true + true * 3;
console.log(c); // 5
// In Javascript, true is considered as the number 1 when used in any arithmetic expression,
// hence the expression evaluates to 5.

console.log(NaN === NaN); // false
console.log(typeof NaN); // number

let sum = 0;
const arr = [1, 2, 3, 4];

arr.forEach(getSum);
console.log(sum); // 10

function getSum(elem) {
  sum += elem;
}

const sample = [1, 2, 3, 4, 5];
console.log(sample.slice(2, 4)); // [3,4]

console.log(parseInt("123Hello")); // 123
console.log(parseInt("Hello123")); // NaN
/*
The parseInt() method converts a string to an integer if it is possible. If the string starts with 
a number, it will convert that numeric part and return it. Else, it will return NaN.
*/

var str = "hello";
var res = 0;
for (var i = 0; i < str.length; i++) {
  res += str[i] - "a";
}
console.log(res); // NaN

// When an object is passed with duplicate keys, the value of the key will be replaced by the
// last value of that key used in the declaration.
const obj1 = { first: 20, second: 30, first: 50 };

console.log(obj1); // { first: 50, second: 30 }

console.log("\n");
// The …args parameter allows us to collect all remaining arguments into an array, and in
// Javascript typeof an array is an object.
function test(...args) {
  console.log(typeof args); // object
}
test(12, 12, 14);

console.log("\n");


