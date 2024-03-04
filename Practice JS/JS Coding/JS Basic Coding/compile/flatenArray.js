"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function flatten(array) {
    var result = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        // iterate over each element in an array it can be a nested array
        if (Array.isArray(element)) {
            /*
              If it is a nested array then, pass it through the flatten function (recursion) & spread the
              elements of the flattened array into the result array.
            */
            result.push.apply(result, flatten(element));
        }
        else {
            // if it is not a nested array then just add it to result array.
            result.push(element);
        }
    }
    return result; // finally return the flattened array
}
// Sample nested array
var nestedArray = [[1, 2], 4, 6, [3, 4], [5, 6]];
// Solution One
var flattenedArray = flatten(nestedArray);
// Copy the nested array
var nestedArray2 = __spreadArray([], nestedArray, true);
// Solution Two
var depth = Infinity;
console.log("Own flatten function", flattenedArray); // [1, 2, 3, 4, 5, 6]
console.log("");
// @ts-ignore
console.log("Using flat() function", nestedArray2.flat(depth)); // [1, 2, 3, 4, 5, 6]
