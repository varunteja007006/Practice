// Q1. Output of this code

console.log(a); // undefined
var a = 10;

// Q2. Output of this code

print(); // Hello World
function print() {
  console.log("Hello World");
}

// Q3. Output of this code

print2(); // Reference error, cannot access print2 before initialization

const print2 = () => {
  console.log("Hello World");
};

// Q4. promise.all() and polyfill for promise.all

// Q5. Output of this code

add(1, 2)(3, 4);

function add(a, b) {
  return function (c, d) {
    return a + b + c + d;
  };
}

// Q6. Output of this code

add(1, 2)(3, 4)(5, 6)();

function add(a, b) {
  return function (c, d) {
    if (c && d) {
      return add(a + b + c + d, 0);
    } else {
      return a + b;
    }
  };
}

// Q7. Write a pseudo code for memoize function

const x = (num) => num * 2;

const memoize = (cbFunc) => {
  let cache = {};

  return function fnc(num) {
    if (cache[num]) {
      return cache[num];
    } else {
      cache[num] = cbFunc(num);
      return cache[num];
    }
  };
};

const memoized = memoize(x);

console.log(memoized(10));
