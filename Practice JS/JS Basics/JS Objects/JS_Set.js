/*
Sets in JavaScript

Set object provided by ES6. A set is a collection of items that are unique i.e. no element 
can be repeated. 
Set in ES6 are ordered: elements of the set can be iterated in the insertion order. 
The set can store any type of value whether primitive or objects.

*/

// ["sumit","amit","anil","anish"]
let set1 = new Set(["sumit", "sumit", "amit", "anil", "anish"]);

// it contains 'f', 'o', 'd'
let set2 = new Set("fooooooood");

// it contains [10, 20, 30, 40]
let set3 = new Set([10, 20, 30, 30, 40, 40]);

// it is an  empty set
let set4 = new Set();

// Properties of Set object
// Set.size

console.log("\nset size", set3.size); // 4

// Methods of Set Object
/* 
Set.add() -> adds the new element with a specified value at the end of the Set object

returns a Set object
*/

console.log("\nbefore add(): ", set3); // before add():  Set(4) { 10, 20, 30, 40 }
set3.add(50).add(70);
console.log("after add(): ", set3); // after add():  Set(6) { 10, 20, 30, 40, 50, 70 }

/*  
Set.delete() -> deletes an element with the specified value from the Set object.

returns a boolean ('true' if operation successful, 'false' if operation unsuccessful)
*/
console.log("\nbefore delete(): ", set3); // before delete():  Set(6) { 10, 20, 30, 40, 50, 70 }
set3.delete(50);
console.log("after delete(): ", set3); // after delete():  Set(5) { 10, 20, 30, 40, 70 }

/*
Set.clear() -> removes all the elements from the set

returns empty set
*/
console.log("\nbefore clear(): ", set3); // before clear():  Set(5) { 10, 20, 30, 40, 70 }
set3.clear();
console.log("after clear(): ", set3); // after clear():  Set(0) {}

// Let us restore the set3 so as to continue further
set3 = new Set([10, 20, 30, 30, 40, 40, 50, 70]);
/*
Set.has() -> returns true if the specified value is present in the Set object.

returns boolean
*/

console.log("\nset has() : ", set3.has(40)); // true

/*
Set.entries() -> returns an iterator object which contains an array having the entries of the set, 
in the insertion order. 

returns iterator object
*/
console.log(`\nset : ${set3}`); // set : [object Set]
let set3Arr = set3.entries();
console.log(`set3 entries() : ${set3Arr}`); // set3 entries() : [object Set Iterator]

// let us loop through this

/*
Set.values() -> returns all the values from the Set object in the same insertion order.

returns an iterator object that contains all the values of the set in the same order as they are
inserted.
*/

let setValues = set3.values();

/*
Set.keys() -> returns all the values from the Set in the insertion order. 

returns an iterator object that contains all the values of the set in the same order as they are 
inserted. 
*/
let setKeys = set3.keys();

console.log("\n");
/*
Set.forEach() -> It executes the given function once for every element in the Set, in the insertion 
order.

*/
set3.forEach((elem) => {
  console.log(`An element from the set3: ${elem}`);
});
console.log("\n");
/*
output:
An element from the set3: 10
An element from the set3: 20
An element from the set3: 30
An element from the set3: 40
An element from the set3: 50
An element from the set3: 70
*/

/*
subSet()
*/

Set.prototype.subSet = function (parentSet) {
  let compareSet = this;
  if (compareSet.size > parentSet.size) {
    return false;
  }
  for (const elem of compareSet) {
    if (!parentSet.has(elem)) {
      return false;
    }
  }
  return true;
};

const set5 = new Set([40, 30]);
console.log("subSet prototype: ", set5.subSet(set3)); // true
