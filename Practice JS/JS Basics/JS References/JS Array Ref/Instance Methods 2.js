/* Instance methods - If the method is called on an instance of a array then it is called an 
instance method.

- every()
- lastIndexOf()
- map()
- fill()
- filter()
- find()
- findIndex()
- flat()
- flatMap()
- forEach()
- indexOf()
- join()
- includes()
- pop()

*/

// Code snippets below

// instance method every() = checks that whether all the elements of the array satisfy the given condition.
const arrNum = [1, 2, 4, 5, 7443, 213, 221, 12, 34];
const arrNumTwo = [2, 4, 6, 8, 10];
console.log(`\nUsing every(): ${arrNum.every((elem) => elem > 12)}`);

console.log(
  `\nUsing every(): ${arrNumTwo.every((elem) =>
    elem % 2 === 0 ? true : false
  )}`
);

// instance method lastIndexOf() = Return the last index at which a given element may be found, or -1
// if it does not exist.
const arrNumThree = [1, 2, 3, 4, 5, 7, 8, 9, 5];
console.log(`\nUsing lastIndexOf original array: `, arrNumThree);
console.log(`Using lastIndexOf of element 5: `, arrNumThree.lastIndexOf(5));

// instance method map() = Calls the argument function once for each element of the given array in order.
console.log(`\nUsing map() on array: `, arrNumThree);
function funcForMap(element, index, array) {
  console.log(element * 10);
}
arrNumThree.map(funcForMap);

/**/
/**/

const sampleArr = [1, 2, 3, 4, 5, 6];
// instance method fill() = Fill the array with a given static value.
console.log(`\nusing fill(): ${sampleArr.fill(0, 2, 4)}`);
// 0 - filler value
// 2, 4 - range in between where filler value will be used

// instance method filter() = Builds a new array containing elements that satisfy a function’s test.
console.log(`\nUsing filter(): ${sampleArr.filter((elem) => elem !== 0)}`);

// instance method find() = Get the value of the --> first element <-- in the array that satisfies the provided condition.
console.log(`\nUsing find(): ${sampleArr.find((elem) => elem !== 0)}`);

// instance method findIndex() = Get the value of the --> first element index <-- in the array that satisfies the provided condition.
console.log(
  `\nUsing findIndex(): ${sampleArr.findIndex((elem) => elem !== 0)}`
);

const nestArr = [
  "dummy",
  ["test1", "test", "test2", "test3", ["dummyTest", "dummyTest2"]],
  "dummy2",
  "dummy3",
];

// instance method flat() = Flatten an array, to reduce the nesting of an array.
console.log(`\nUsing flat(): ${nestArr.flat(Infinity)}`);

// instance method flatMap() = This is used to flatten the input array element into a new array.
const nestArrNum = [[1], [11], [2], [3]];
const flatMapSol = nestArrNum.flatMap((elem) => [elem * 7]);
console.log(`\nUsing flatMap(): ${flatMapSol}`);

// instance method forEach() = It runs the provided function once for each element of the array.
console.log(`\nUsing forEach():`);
sampleArr.forEach((element) => {
  console.log(element);
});

const sampleArrTwo = [1, 2, 3, 4, 5, 6];
// instance method indexOf() = Return the first index at which a given element may be found, or -1 if it does not exist.
const indexOfValue = sampleArrTwo.indexOf(3);
console.log(`\nUsing indexOf(): ${indexOfValue}`);

// instance method join() = To stitch all the elements in an Array into a string.
const strArr = ["a", "p", "p", "l", "e"];
console.log(`\nUsing join(): ${strArr.join("")}`);

const arrThree = ["tom", "Jerry", "cat", "mouse"];
// instance method included() = If an array contains the certain value, it returns true.
console.log(`\nUsing includes(): ${arrThree.includes("tom")}`);

// instance method pop() = Remove the last element of the array and also returns the removed element.
const poppedElem = arrThree.pop();
console.log(`\nUsing pop(): ${poppedElem}`);

// instance method push() = Push one or more values into the array.
arrThree.push("Added new", "added another new");
console.log(`\nusing push: ${arrThree}`);

const arrNumFour = [1, 2, 3, 4];
// instance method reduce() = Reduce the array to a single value and executes a provided function
// for each value of the array.
const reduceResult = arrNumFour.reduce((acc, elem) => (acc += elem), 0);
// acc - holds the value, elem - is every single element of array, 0 - is the initial value
console.log(`\nUsing reduce: ${reduceResult}`);

// instance method reduceRight() = Convert elements of the given array from right to left to a single value.
const reduceRightResult = arrNumFour.reduceRight(
  (acc, elem) => (acc -= elem),
  100
);
console.log(`\nUsing reduceRight: ${reduceRightResult}`);
