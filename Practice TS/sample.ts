// Using Type Parameters in Generic Constraints

/*
  You can declare a type parameter that is constrained by another type parameter. 
  For example, here we’d like to get a property from an object given its name. We’d like to 
  ensure that we’re not accidentally grabbing a property that does not exist on the obj, 
  so we’ll place a constraint between the two types:
*/

// Type T is object and U is keys of the object of type T
// We also receive two arguments one is Object and another is Key that is supposed to be inside Object
function sampleFunc<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

// assuming our object to be
let obj = { a: 1, b: 2, c: 3, d: 4 };

sampleFunc(obj, "a"); // We are passing the object 'obj' and one of its key 'a'
sampleFunc(obj, "m");
/*
  This throws an error because, 
  We are passing the object 'obj' and a key 'm' which does not exist in it
*/
export {};

//4:02:00
