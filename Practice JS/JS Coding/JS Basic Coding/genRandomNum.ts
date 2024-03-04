// generating  a random number
const a = Math.random();
console.log(a);

// generating a random number between 1 & 10
const b = Math.random() * (10 - 1) + 1;
console.log(`Random value between 1 and 10 is ${b}`);

// Integer Value between Two Numbers (Inclusive)
const min = 10;
const max = 2;

// generating a random number
const c = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${c}`);
