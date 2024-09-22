/*
  What is function currying?
  Currying in JavaScript transforms a function with multiple arguments into a nested series of 
  functions, each taking a single argument. 
  Currying helps you avoid passing the same variable multiple times, and it helps you create 
  a higher order function
*/

// --------------------------------------------------------------------
// * Method One with bind()
// --------------------------------------------------------------------
const multiply = function (param1, param2, param3) {
  console.log("Method One Bind: ", param1 * param2 * param3);
};

const multiplyByThree = multiply.bind(this, 3);
multiplyByThree(4, 5);

const multiplyByTwoAndFour = multiply.bind(this, 2, 4);
multiplyByTwoAndFour(5);

console.log("\n");

// --------------------------------------------------------------------
// * Method Two with closures()
// --------------------------------------------------------------------

const multiplyByClosure = function (param1) {
  return function multiplyInnerFunc(param2) {
    console.log("Method Two Closures: ", param1 * param2);
  };
};

const multiplyByFour = multiplyByClosure(4);
multiplyByFour(5);

console.log("\n");

// --------------------------------------------------------------------
// * Another example of creating a curry function
// --------------------------------------------------------------------
function currying(fn, ...args) {
  return (..._args) => {
    return fn(...args, ..._args);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curry = currying(sum, 1);
console.log("Curry function: ", curry(2, 3)); // output: Curry function:  6

const curry2 = currying(sum, 5, 5);
console.log("Curry function: ", curry2(5)); // output: Curry function:  15

console.log("Curry function: ", currying(sum, 10)(20, 30)); // output: Curry function:  60
