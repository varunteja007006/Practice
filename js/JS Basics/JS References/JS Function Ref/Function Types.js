/*
JavaScript Basics of Functions

- Function Generator
- Function Bindings
- Function Invocation
- Function Expression
- Arrow Functions
- Async Functions
- Pure Functions
- Nested Functions
*/

// Nested Functions = Return is a combination of the output from the outer as well as the inner
// function(nested function).
function outer(params) {
  console.log("\nOuter function");
  return function inner(params) {
    return "Inner function\n";
  };
}
const x = outer(); // Outer function
console.log(x); // [Function: inner]
console.log(x()); // Inner function

// Pure Functions = Returns the same result if the same arguments are passed.
const arr = [1, 1, 2, 2];
function random() {
  return (Math.random() * 10).toFixed(2);
}

function impure(params) {
  return params * random();
}

function pure(params) {
  return params * 1;
}

arr.forEach((item) => console.log("Pure Functions", pure(item))); // this is pure function returns same value for
// the same arguments.
arr.forEach((item) => console.log("Impure Functions", impure(item))); // this is impure function returns different
// value for the same arguments.

// Async await function = It checks that we are not breaking the execution thread.
const data = async () => {
  // fetching data asynchronously without blocking main thread.
  const resp = await fetch(); // await waits until the fetch promise is full-filled.
  const data = await resp.json();
  return data; // return the data
};

// Arrow Functions = Provide generator functions with a concise way to write functions in JavaScript.
const arrowFunc = () => {
  console.log("\nArrow Function");
};
arrowFunc();

// Function Expression = When a function is assigned to a variable, it can be both
// named or unnamed function expression
const unNamedFunc = function (params) {
  console.log(params);
};

const namedFunc = function func(params) {
  console.log(params);
};

unNamedFunc("\nUnnamed Function");
namedFunc("Named Function");

// Function invocation = It is common to use the term “call a function” instead of “invoke a function”.
// Immediately Invoked Function Expression
function sample(params) {
  console.log("\nFunction invocation");
}
sample();

// IIFE example - Immediately Invoked Function Expression
(function (params) {
  console.log(params);
})("\nI am IIFE");

// Function binding = function binding happens using bind() method.
function bindFunc(params) {
  console.log("\nHello");
}

const myBind = bindFunc.bind();
myBind();

// Function generator = It needs to generate a value, it does so with the yield keyword rather
// than return.
function* genFunc(params) {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let gen = genFunc();
console.log("\nGenerator Function:");
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
