// Reverse a string
// const str = "varun";
// const revStr = str.split("").reverse().join("");
// console.log(revStr);

// Using Array.from()
// Example 1: Creating an array from a string
// const str = "hello";
// const array1 = Array.from(str);
// console.log(array1); // Output: ['h', 'e', 'l', 'l', 'o']

// Example 2: Creating an array from a Set
// const set = new Set([1, 2, 3]);
// const array2 = Array.from(set, (x) => x * 2);
// console.log(array2); // Output: [2, 4, 6]

// Example 3: Using the map function and thisArg
// const mapFn = function (element) {
//   return element * this.multiplier;
// };
// const thisArg = { multiplier: 2 };
// const array3 = Array.from([1, 2, 3], mapFn, thisArg);
// console.log(array3); // Output: [2, 4, 6]

// Example 4:
// function func1(params) {
//   return params * 2 + (Math.random() * 10).toFixed(0);
// }
// console.log(Array.from({ length: 10 }, () => func1(2)));

let map0 = new Map([
  [1, [10, 11, 12]],
  [2, 20],
  [3, [30, 31, 32]],
  [4, 40],
]);

// console.log("map0: ", map0);
// console.log("entries: ", map0.entries());
// console.log("arr: ", Array.from(map0.entries()));
