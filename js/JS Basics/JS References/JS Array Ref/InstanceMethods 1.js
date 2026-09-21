/* Instance methods - If the method is called on an instance of a array then it is called an 
instance method.

- reverse()
- shift()
- slice()
- some()
- sort()
- splice()
- toLocalString()
- toString()
- unshift()

*/

// Code snippets below

// instance method reverse() = This is used for the in-place reversal of the array.
// Mutates the original array
const arrThree = ["tom", "Jerry", "cat", "mouse"];
console.log(`\nUsing reverse() original array: `, arrThree);
arrThree.reverse();
console.log(`Using reverse() modified array: `, arrThree);

/* instance method shift() = Removes the first element of the array thus reducing the size of the 
original array by 1. 

returns the removed value
*/
const arrDemo = [10, 2, 3, 4];
console.log(`\nUsing shift() original array: `, arrDemo);
const shiftResult = arrDemo.shift();
console.log(`Using shift() modified array: `, arrDemo);
console.log(`Using shift() return value: `, shiftResult);

//instance method slice()
const arrDemo_3 = ["aa", "bb", "cc", "dd", "ee", "ff"];
const arrDemo_4 = ["aa", "bb", "cc", "dd", "ee", "ff"];
const sliceResult = arrDemo_3.slice(3);
const sliceResult_1 = arrDemo_4.slice(2, 4);
console.log(`\nUsing slice() original array: `, arrDemo_3);
console.log(`Using slice() return array: `, sliceResult);
console.log(`Using slice(): original array`, arrDemo_4);
console.log(`Using slice(): return array`, sliceResult_1);

//instance method some() = Each array element’s callback function is run once.
const arrNumFive = [1, 2, 3, 4];
const emptyArray = [];
function funcSome(element, index, array) {
  emptyArray.push(element * 10);
}
arrNumFive.some(funcSome);
console.log(`\nUsing some() original array: `, arrNumFive);
console.log(`Using some() modified array: `, emptyArray);

//instance method sort() = Sort an array in place in a given order according to the function passed.
let numbers = [20, 5.2, -120, 100, 30, 0];
console.log(`\nBefore sort`, numbers);
function forSort(a, b) {
  // ascending order
  return a - b;
}
numbers.sort(forSort);
console.log(`After using sort(): `, numbers);

// instance method splice() =	Modify the contents of an array by removing the existing elements.
const arrDemo_1 = ["a", "b", "c", "d", "e", "f"];
const arrDemo_2 = ["a", "b", "c", "d", "e", "f"];
const spliceResult = arrDemo_1.splice(3); // start at index 3
const spliceResult_2 = arrDemo_2.splice(2, 2); // start at index 2, count 2
console.log(`\nUsing splice(), original array: `, arrDemo_1);
console.log(`Using splice(), spliced array: `, spliceResult);
console.log(`\nUsing splice(), original array: `, arrDemo_2);
console.log(`Using splice(), spliced array: `, spliceResult_2);

// instance method toLocaleString() = Convert the elements of the given array to string.

let text = "sample text";
let number = 567;
let date = new Date();
let newArr = [text, number, date];
let stringArr = newArr.toLocaleString();
console.log(`\nUsing the toLocalString() original array: `, newArr);
console.log(
  `Using the toLocalString() return value: `,
  stringArr,
  ` || typeof ${typeof stringArr}`
);

// instance method toString() = Return the string representation of the array elements.
let arrFive = ["Hello", "World", "my", "friend"];
let strArrFive = arrFive.toString();
console.log(`\nUsing toString() original array: `, arrFive);
console.log(`Using toString() return value:`, strArrFive);

// instance method unshift() = Add one or more elements to the beginning of the given array.
const arrTwo = ["apple", "ball", "cat", "dog", "elephant", "fish"];
console.log(`\nUsing unshift() original array: `, arrTwo);
arrTwo.unshift("zebra", "Yak");
console.log(`Using unshift() modified array: `, arrTwo);
