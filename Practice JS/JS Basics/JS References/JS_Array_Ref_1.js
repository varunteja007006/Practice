/*
JavaScript Array Reference

Instance Methods - If the method is called on an instance of a array then it is called an 
instance method.
*/

const arr = new Array("dummy1", "dummy2", "dummy3");

// instance method at() = returns an element of that index
console.log(`\nUsing at(): ${arr.at(2)}`); // array in JS are 0 index

const tempArr = ["dummy99", "dummy100"];
const tempArrTwo = ["dummy77", "dummy78"];

// instance method concat() = Merge two or more arrays together
const arrBig = arr.concat(tempArr).concat(tempArrTwo);
console.log(`\nUsing concat(): ${arrBig} `); // dummy1,dummy2,dummy3,dummy99,dummy100,dummy77,dummy78

// instance method copyWithin() = Copies part of an array to the same array itself and returns.
console.log(`\nUsing copyWithin(): ${arrBig.copyWithin(4, 1, 3)}`); // dummy1,dummy2,dummy3,dummy99,dummy2,dummy3,dummy78
// 4 - paste the copied elements here
// 1,3 - the elements between this range are to be copied

// instance method entries() = Fetch all the entries of the same data structure.
const seqArr = arrBig.entries(); // We get an [object Array Iterator]
console.log(`\nUsing entries(): `);
for (const iterator of seqArr) {
  console.log(iterator);
}

// instance method keys() = Return a new array iterator which contains the keys for each index in the given input array.
const arrKeys = arr.keys();
console.log(`\nusing keys(): ${arrKeys}`); //[object Array Iterator]
for (const iterator of arrKeys) {
  console.log(iterator);
}

/**/
/**/

// instance method lastIndexOf() = Return the last index at which a given element may be found, or -1 if it does not exist.
const arrNumThree = [1, 2, 3, 4, 5, 7, 8, 9, 5];
console.log(`\nUsing lastIndexOf: ${arrNumThree.lastIndexOf(5)}`);

// instance method map() = Calls the argument function once for each element of the given array in order.
console.log(`\nUsing map(): `);
function funcForMap(element, index, array) {
  console.log(element * 10);
}
arrNumThree.map(funcForMap);

/**/
/**/

const arrNum = [1, 2, 4, 5, 7443, 213, 221, 12, 34];
const arrNumTwo = [2, 4, 6, 8, 10];

// instance method every() = checks that whether all the elements of the array satisfy the given condition.
console.log(`\nUsing every(): ${arrNum.every((elem) => elem > 12)}`);

console.log(
  `\nUsing every(): ${arrNumTwo.every((elem) =>
    elem % 2 === 0 ? true : false
  )}`
);

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

/**/
/**/

const nestArr = [
  "dummy",
  ["test1", "test", "test2", "test3", ["dummyTest", "dummyTest2"]],
  "dummy2",
  "dummy3",
];

// instance method flat() = Flatten an array, to reduce the nesting of an array.
console.log(`\nUsing flat(): ${nestArr.flat(Infinity)}`);

/**/
/**/

// instance method flatMap() = This is used to flatten the input array element into a new array.
const nestArrNum = [[1], [11], [2], [3]];
const flatMapSol = nestArrNum.flatMap((elem) => [elem * 7]);
console.log(`\nUsing flatMap(): ${flatMapSol}`);

/**/
/**/

// instance method forEach() = It is provided a function once for each element of the array.
console.log(`\nUsing forEach():`);
sampleArr.forEach((element) => {
  console.log(element);
});

/**/
/**/

const sampleArrTwo = [1, 2, 3, 4, 5, 6];
// instance method indexOf() = Return the first index at which a given element may be found, or -1 if it does not exist.
const indexOfValue = sampleArrTwo.indexOf(3);
console.log(`\nUsing indexOf(): ${indexOfValue}`);

const strArr = ["a", "p", "p", "l", "e"];
console.log(`\nUsing join(): ${strArr.join("")}`);

/**/
/**/

const arrThree = ["tom", "Jerry", "cat", "mouse"];

// instance method included() = If an array contains the certain value, it returns true.
console.log(`\nUsing includes(): ${arrThree.includes("tom")}`);

// instance method values() = Return a new array Iterator object that contains the values for each index in the array.
const arrThreeItr = arrThree.values();

console.log(`\nUsing values(): ${arrThreeItr}`); // this is [object Array Iterator]
for (const iterator of arrThreeItr) {
  console.log(iterator);
}

// you can also do the following BUT NOT BOTH BECAUSE ITERATOR GETS EXHAUSTED
// console.log("Can also do this");
// console.log(arrThreeItr.next().value); // tom

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
console.log(reduceResult);

// instance method reduceRight() = Convert elements of the given array from right to left to a single value.
const reduceRightResult = arrNumFour.reduceRight(
  (acc, elem) => (acc -= elem),
  100
);
console.log(reduceRightResult);

// instance method reverse() = This is used for the in-place reversal of the array.
// Mutates the same array
const newArrThree = arrThree.reverse();
console.log(arrThree);
console.log(newArrThree);

/*

WHAT DO YOU MEAN BY ITERATOR GETTING EXHAUSTED

The last console.log giving "undefined" as output is because you already exhausted the iterator 
using the for-of loop. Here's the breakdown:

arrThreeItr = arrThree.values(): This creates a new array iterator object for arrThree.

for (const iterator of arrThreeItr): This loop iterates over each element in the iterator and 
assigns it to the iterator variable.

console.log(arrThreeItr.next().value);: This line attempts to call next() on the already 
exhausted iterator. Since there are no more elements to iterate over, it reaches the end 
of the iterator and returns {done: true, value: undefined}.

Therefore, accessing the value property of the returned object gives you undefined.

Here are some key points to remember:
- Iterator exhaustion: Once you iterate over all elements using a for-of loop or similar methods, 
the iterator becomes exhausted and cannot be used further.

- next() method: Calling next() on a used iterator returns {done: true, value: undefined}.

- Last element access: To access the last element, you can use alternative methods like directly 
accessing it by index (e.g., arrThree[arrThree.length - 1]) or using the pop() method to remove 
and retrieve the last element.

If you need to access the elements again, you need to create a new iterator object from the original array.

*/

/*
pop()	Remove the last element of the array and also returns the removed element.	
Try
push()	Push one or more values into the array.	
Try
reduce()	Reduce the array to a single value and executes a provided function for each value of the array.	
Try
reduceRight()	Convert elements of the given array from right to left to a single value.	
Try
reverse()	This is used for the in-place reversal of the array.	
Try
shift()	Removes the first element of the array thus reducing the size of the original array by 1.	
Try
slice()	Returns a new array containing a portion of the array on which it is implemented.	
Try
some()	Each array element’s callback function is run once.	
Try
sort()	Sort an array in place in a given order according to the compare() function.	
Try
splice()	Modify the contents of an array by removing the existing elements.	
Try
toLocaleString()	Convert the elements of the given array to string.	
Try
toString()	Return the string representation of the array elements.	
Try
unshift()	Add one or more elements to the beginning of the given array.*/
