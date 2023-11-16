/*
A Pure Function is a function (a block of code) that always returns the same result if the same 
arguments are passed. It does not depend on any state or data change during a program’s execution. 
Rather, it only depends on its input arguments.

*/

function calculateGST(productPrice) {
  return productPrice * 0.05;
}
console.log(calculateGST(15));

// Not a pure function because it depends on ext variable tax
let tax = 20;
function calculateGST(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15));
