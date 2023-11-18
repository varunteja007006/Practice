/*
 Comma Operator:
 A comma operator is used as a separator for multiple expressions at a place that requires a 
 single expression. When a comma operator is placed in an expression, it executes each expression
 and returns the rightmost expression.
*/

// Comma Operator - Example One
function Func1() {
  console.log("one");
  return "one";
}
function Func2() {
  console.log("two");
  return "two";
}
function Func3() {
  console.log("three");
  return "three";
}

// Three expressions are
// given at one place
let x = (Func1(), Func2(), Func3());

console.log(x);

// Comma Operator - Example Two
for (let a = 0, b = 5; a <= 5; a++, b--) {
  console.log(a, b);
}
