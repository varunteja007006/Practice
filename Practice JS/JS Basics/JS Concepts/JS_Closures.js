/*
  Closures

  what is closure
  Function within a function where the inner function references a variable that was 
  declared in the scope of the outer function. The variables in the outer function will 
  be in memory even though the function has returned and has popped off the call stack. 
  It means the inner function always has access to the outer function at the time it was created.

  To simple put,
  A closure gives you access to an outer function's scope from an inner function
*/

function outermost() {
  let a = 10;

  // nested function inside outermost func
  function outer(c) {
    let b = "Hello";

    // nested function inside outer func
    function inner() {
      console.log(a, b, c); // c belongs to scope of 'outer' func but still accessible by 'inner' func
    }

    return inner;
  }

  return outer;
}

let obj = outermost()("Mom");
/* 
  First initializing outermost() which then returns outer(), since outer accepts arguments we pass 
  'Mom', it now returns inner() which is stored in 'obj' 
*/
obj(); // now we initialize the 'obj' which holds the 'inner' func, output: 10 Hello Mom
