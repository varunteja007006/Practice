const arr = [2, 6, 3, 9, 11, 1];

// map function
const mapped = arr.map(function doubleShot(element) {
  return element * 2;
});
console.log("Map: ", mapped);

// filter function
const filtered = arr.filter((element) => {
  if (element > 7) {
    return element;
  }
});
console.log("Filter: ", filtered);

// reduce function
const reduce_output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log("Reduce: ", reduce_output);
// reduce function takes two arguments a callback func & initial value
// inside the callback func we have two parameters acc(Accumulator like sum value in before code snippet, curr is elements[index] or single element from array)

// create a function similar to reduce
function sumArray(elements) {
  let sum = 0;
  for (const element of elements) {
    sum = sum + element;
  }
  return sum;
}
