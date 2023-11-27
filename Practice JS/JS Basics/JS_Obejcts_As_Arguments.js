// Method 1:
// Lets modify the object 'obj'
const obj = { age: 5, nestObj: { item: 1, itemTwo: 2 } };

function modifyObj_func(params) {
  params.age = 777;
  params.nestObj.item = 7777;
  console.log("Modified: ", params);
}
modifyObj_func(obj);
console.log("original: ", obj);
console.log(`\n\n`);

/*
output
{ age: 777, nestObj: { item: 7777, itemTwo: 2 } }
{ age: 777, nestObj: { item: 7777, itemTwo: 2 } }

As you can see the original object got modified because when we pass it as argument we are passing 
it as pass by reference and as pass by value.
*/

// Method 2: use spread operator inside the modifying function
// Lets modify the object 'obj'
const obj_2 = { age: 5, nestObj: { item: 1, itemTwo: 2 } };

function fnc(params) {
  const newObj = { ...params };
  newObj.age = 55; // Modify the property of the new object
  newObj.nestObj.item = 500; // Modify the property of the new object
  return newObj; // Return the new object
}

const modifiedObj = fnc(obj_2); // Assign the modified object to a new variable

console.log("Modified: ", modifiedObj);
console.log("Original: ", obj_2);
console.log(`\n\n`);

/* 
output
Modified: { age: 55, nestObj: { item: 500, itemTwo: 2 } }
Original: { age: 5, nestObj: { item: 500, itemTwo: 2 } }

As you can see the original object is corrupted even though we spread the 'obj' into 'newObj' 
This is because the nested objects are still a reference to original 'obj'. This is Shallow Copy. 
* 'newObj' is shallow copy of obj
*/

// Method 3: Spread the argument and pass it to the function
// Lets modify the object 'obj'
const obj_3 = { age: 5, nestObj: { item: 1, itemTwo: 2 } };

function func_1(params) {
  params.age = 55;
  params.nestObj.item = 7777;
  console.log("Modified: ", params);
}

func_1({ ...obj_3 });
console.log("original: ", obj_3);
console.log(`\n\n`);
/* 
output
Modified:  { age: 55, nestObj: { item: 7777, itemTwo: 2 } }
original:  { age: 5, nestObj: { item: 7777, itemTwo: 2 } }

As you can see the original object is corrupted even though we spread the 'obj' when passing as 
argument. This is because the nested objects are still a reference to original 'obj'.
* params is a shallow copy of obj
*/

console.log("Solution: Create Deep copy recursive function");
// Solution: Create a deep copy
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Here either the obj is null or is not an obj
  }

  if (Array.isArray(obj)) {
    // if obj is object (with typeof Array is also an object) and is an array then map it, pass deepCopy as callback function
    return obj.map(deepCopy);
  }

  const newObj = {};
  for (const key in obj) {
    // if obj is Object
    newObj[key] = deepCopy(obj[key]); // key for newObj is same as the obj but value has to be checked for nested obj/ array/ value
  }
  return newObj;
}

function InitiateDeepCopy(obj) {
  const newObj = deepCopy(obj); // Create a deep copy of the original object

  newObj.age = 55; // Modify the property of the new object
  newObj.nestObj.item = 9999; // Modify the property of the new object

  return newObj; // Return the new object
}

const obj_4 = { age: 5, nestObj: { item: 1, itemTwo: 2 } };
const updatedObj = InitiateDeepCopy(obj_4);

console.log("Modified: ", updatedObj);
console.log("Original: ", obj_4);

/*
Output:
Modified:  { age: 55, nestObj: { item: 9999, itemTwo: 2 } }
Original:  { age: 5, nestObj: { item: 1, itemTwo: 2 } }

Yeah finally we did it.
*/
