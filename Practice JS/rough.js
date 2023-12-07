const arrThree = ["tom", "Jerry", "cat", "mouse"];
// instance method values() = Return a new array Iterator object that contains the values for each index in the array.
const arrThreeItr = arrThree.values();

console.log(`\nUsing values(): ${arrThreeItr}`); // this is [object Array Iterator]
for (const iterator of arrThreeItr) {
  console.log(iterator);
}

console.log(arrThreeItr.next().value); // undefined