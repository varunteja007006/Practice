// This is a function statement (or) function declaration
function a() {
  console.log("This is a function statement");
}

// This is a function expression
// This function is assigned to variable 'b'
let b = function () {
  console.log("This is a function expression");
};

// This is a anonymous function assigned to variable 'c'
let c = function () {
  console.log("This is a Anonymous function");
};

// This is a Named function assigned to a variable 'd'
let d = function xyz() {
  // function name is given
  console.log("This is a named function");
};

// If you call xyz() it will give an error

/*
  What are First class functions?
  The ability to use functions as values.
  Some of the properties of first-class functions in JavaScript:
  1. They can be assigned to variables.
  2. They can be passed as arguments to other functions.
  3. They can be returned from other functions.
  4. They can be stored in objects.
  5. They can be used as callback functions.
*/
