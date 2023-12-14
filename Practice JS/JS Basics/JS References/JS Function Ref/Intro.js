/*
JavaScript Function References

JavaScript Parameters
- Function = function definition and real values passed to the function in the function 
definition are known as arguments.

- Rest = Handle various inputs as parameters in a function.

- Default parameters = The parameters of functions default to undefined. However, in some 
situations, it might be useful to set a different default value. 

*/

/* JavaScript Functions Properties:

- length

- displayName

- caller

- name

*/

// func property length = Return the number of parameters required by a function.
function func_1(params) {
  return params;
}

console.log("length of the function: ", func_1.length);

// func property displayName = set the display name of the function
func_1.displayName = "Example function";
console.log("\nfunc property displayName: ", func_1.displayName);

// func property caller = Returns the function that invoked the specified function
function func_2(params) {
  console.log("\nfunc property caller: ", func_2.caller);
  return params;
}

function callerFunc(params) {
  const func = params;
  return func(1);
}
callerFunc(func_2);

// func property name = Returns the name of the function.
function helloWorld(params) {
  return 1;
}

console.log('\nfunc property name: ',helloWorld.name);
