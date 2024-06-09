/*
 Given an array and chunk size divide the array into many subarrays
 where each subarray is of length size
 and return them
*/

// Eg: [1,2,3,4,5,6] ; size = 2
/**
 *
 * @param {array} array An array that has to be split into chunks
 * @param {number} chunkSize size in which the original array has to be splitted
 * @returns {array}
 */
function subArray(array, chunkSize) {
  let res = [];
  for (let index = 0; index < array.length; index + chunkSize) {
    res.push(array.splice(index, index + chunkSize));
  }
  return res;
}

console.log(subArray([1, 2, 3, 4, 5, 6], 2));
