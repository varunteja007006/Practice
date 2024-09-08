function a(params1) {
  return function b(params2) {
    return params1 + params2;
  };
}

console.log(a(1)(2));

function curry(fn) {
  // spread the arguments
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args.concat(nextArgs));
      };
    }
  };
}

const add = curry((a, b, c) => a + b + c);
const add5 = add(5);
const add10 = add5(5);
console.log(add10(2)); // outputs 12
