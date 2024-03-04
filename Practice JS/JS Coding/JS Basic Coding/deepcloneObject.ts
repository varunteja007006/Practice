/* 
  Problem: Implement a deep clone function in JavaScript that creates a copy of a nested object
  or array without any reference to the original.

  Solution: I can serialize the object to a JSON string. I would then parse it back into a new 
  object, thereby removing any reference to the original object.
*/
function deepClone(obj: { name: string; age: number }) {
  return JSON.parse(JSON.stringify(obj));
}

// create a object
let obj = {
  name: "test",
  age: 10,
};
console.log(deepClone(obj));
