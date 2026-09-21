var count = 100;
// let count = 100; // throws an error if count is declared using 'let'

function count() {
  console.log("Hello");
}

console.log(count);
console.log(count()); // this throws an error
