"use strict";
// generating  a random number
var a = Math.random();
console.log(a);
// generating a random number between 1 & 10
var b = Math.random() * (10 - 1) + 1;
console.log("Random value between 1 and 10 is ".concat(b));
// Integer Value between Two Numbers (Inclusive)
var min = 10;
var max = 2;
// generating a random number
var c = Math.floor(Math.random() * (max - min + 1)) + min;
// display a random number
console.log("Random value between ".concat(min, " and ").concat(max, " is ").concat(c));
