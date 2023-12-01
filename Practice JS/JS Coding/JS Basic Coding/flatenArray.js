/* 
  Implement a function that flattens a nested array in JavaScript by converting it into a 
  single-level array.
*/
function flatten(array) {
  const result = [];
  for (const element of array) {
    // iterate over each element in an array it can be a nested array
    if (Array.isArray(element)) {
      /*
        If it is a nested array then, pass it through the flatten function (recursion) & spread the 
        elements of the flattened array into the result array.
      */
      result.push(...flatten(element));
    } else {
      // if it is not a nested array then just add it to result array.
      result.push(element);
    }
  }
  return result; // finally return the flattened array
}

// Sample nested array
const nestedArray = [[1, 2], 4, 6, [3, 4], [5, 6]];

// Solution One
const flattenedArray = flatten(nestedArray);

// Copy the nested array
const nestedArray2 = [...nestedArray];

// Solution Two
let depth = Infinity;
console.log("Own flatten function", flattenedArray); // [1, 2, 3, 4, 5, 6]
console.log("");
console.log("Using flat() function", nestedArray2.flat(depth)); // [1, 2, 3, 4, 5, 6]
