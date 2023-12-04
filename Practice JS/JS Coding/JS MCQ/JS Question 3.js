// String method 'substring()'
var a = "Scaler";
var result = a.substring(2, 4);
console.log(result); // al

// Using 'eval'
/// Avoid using 'eval' because of security risks, performance overhead, bad readability & maintainability and debugging difficulty
var x = 12;
var y = 8;
var res = eval("x+y");
console.log(res); // 20

// Using the keyword 'in'

let obj = {
  name: "test",
  age: 21,
};
console.log("name" in obj); // true

// IIFE
(function (a) {
  return (function () {
    console.log(a); // 21
    a = 6;
    console.log(a); // 6
  })();
})(21);

// Array methods 'unshift' & 'pop'
const arr = [44, 1, 22, 111];
let popped = arr.pop(); // 'pop' method removes the last element and returns it
console.log(popped); // 111

let unshift_ed = arr.unshift(7); // 'unshift' method allows you to add one or more elements to the beginning of an array
// it returns the length of the resultant array
console.log(unshift_ed, arr); // 4  [7, 44, 1, 22 ]

// example code
function solve(arr, rotations) {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  console.log(arr); // [ 111, 44, 1, 22 ]
}
solve([44, 1, 22, 111], 5);
