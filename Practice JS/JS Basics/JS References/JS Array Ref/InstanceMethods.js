/*
JavaScript Array Reference

Instance Methods - If the method is called on an instance of a array then it is called an 
instance method.
*/

const arr = new Array("dummy1", "dummy2", "dummy3");

// instance method at() = returns an element of that index
console.log(`\nUsing at(): `, arr.at(2)); // array in JS are 0 index

const tempArr = ["dummy99", "dummy100"];
const tempArrTwo = ["dummy77", "dummy78"];

// instance method concat() = Merge two or more arrays together
const arrBig = arr.concat(tempArr).concat(tempArrTwo);
console.log(`\nUsing concat() original array: `, arr);
console.log(`\nUsing concat() temp arrays: `, tempArr, `,`, tempArrTwo);
console.log(`Using concat(): `, arrBig); // dummy1,dummy2,dummy3,dummy99,dummy100,dummy77,dummy78

// instance method copyWithin() = Copies part of an array to the same array itself and returns.
console.log(`\nUsing copyWithin() original array: `, arrBig);
arrBig.copyWithin(4, 1, 3);
// 4 - paste the copied elements here
// 1,3 - the elements between this range are to be copied
console.log(`Using copyWithin() modified array: `, arrBig); // dummy1,dummy2,dummy3,dummy99,dummy2,dummy3,dummy78

// instance method entries() = Fetch all the entries of the same data structure.
const seqArr = arrBig.entries(); // We get an [object Array Iterator]
console.log(`\nUsing entries(): `, seqArr);
for (const iterator of seqArr) {
  // iterate through the [Object Array Iterator]
  console.log(iterator);
}

// instance method keys() = Return a new array iterator which contains the keys for each
// index in the given input array.
const arrKeys = arrBig.keys();
console.log(`\nusing keys(): `, arrKeys); //[object Array Iterator]
for (const iterator of arrKeys) {
  // iterate through the [Object Array Iterator]
  console.log(iterator);
}

// instance method values() = Return a new array Iterator object that contains the values
// for each index in the array.
const arrValues = arrBig.values();
console.log(`\nUsing values(): `, arrValues); // this is [object Array Iterator]
for (const iterator of arrValues) {
  // iterate through the [Object Array Iterator]
  console.log(iterator);
}

/*

WHAT DO YOU MEAN BY ITERATOR GETTING EXHAUSTED ?????

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
