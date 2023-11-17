/*
    Arguments Object: The arguments objects are inbuilt objects in JavaScript functions. In all 
    non-arrow functions, the arguments object is a local variable. Analyze the arguments inside 
    the function by using its arguments object. 
*/

function test(params) {
  console.log(arguments.length);
}

test(1, 2, 3, 8);
