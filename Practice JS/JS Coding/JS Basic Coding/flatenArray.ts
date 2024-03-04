/* 
  Implement a function that flattens a nested array in JavaScript by converting it into a 
  single-level array.
*/
type NestedArray = (number | NestedArray)[];

function flatten(array: NestedArray): number[] {
  const result: number[] = [];
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
const nestedArray: NestedArray = [[1, 2], 4, 6, [3, 4], [5, 6]];

// Solution One
const flattenedArray: number[] = flatten(nestedArray);

// Copy the nested array
const nestedArray2: NestedArray = [...nestedArray];

// Solution Two
let depth = Infinity;
console.log("Own flatten function", flattenedArray); // [1, 2, 3, 4, 5, 6]
console.log("");
// @ts-ignore
console.log("Using flat() function", nestedArray2.flat(depth)); // [1, 2, 3, 4, 5, 6]
