/*
JavaScript Array Reference
*/

// copying one array items to another
const arrOne = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
console.log(`first array: `, arrOne);

let newArrOne = [];
arrOne.forEach((elem) => {
  newArrOne.push(elem);
});
console.log(`copied array: `, newArrOne);

// JavaScript Array constructor - Array()

/*
Instance Property - An instance property is a property that has a new copy for every 
new instance of the class.

Properties available
-> constructor (returns reference of the function)
-> length (returns no of elements in array, you can also set no of elements in array)
*/

const arr = new Array("dummy1", "dummy2", "dummy3");
console.log(`\nThe array: `, arr);
console.log(`Array .length property is: `, arr.length);
