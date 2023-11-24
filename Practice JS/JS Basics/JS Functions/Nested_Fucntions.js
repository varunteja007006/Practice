/*
    What are nested functions? Concept of having a function inside a function is called nested 
    function.

    Approach NESTED functions:

    Write one function inside another function.
    Make a call to the inner function in the return statement of the outer function.
    Call it fun(a)(b) where a is a parameter to the outer and b is to the inner function.
    Finally, return the combined output from the nested function.

*/

function outer(params1) {
  function inner(params2) {
    return params1 + params2;
  }

  return inner; // we are not calling inner function
}

console.log(outer(2)(3));
console.log(outer(`Hi `)("Buddy"));

/*
    First argument is taken by outer function and the second argument by inner function.
    
    How was inner function able to access params1?? 
    This is because of closures. The inner function will have access to the outer functions lexical
    environment
*/
