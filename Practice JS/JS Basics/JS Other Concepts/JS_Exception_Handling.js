/*
    Exception Handling in JavaScript
    All errors can be solved and to do so we use five statements that will now be explained

    - The try statement lets you test a block of code to check for errors.
    - The catch statement lets you handle the error if any are present.
    - The throw statement lets you make your own errors.
    - The finally statement lets you execute code after try and catch.  
    - The finally block runs regardless of the result of the try-catch block.
*/

try {
  throw new Error("Yeah... Sorry");
} catch (e) {
  console.log(e);
}

try {
  console.log("try");
} catch (e) {
  console.log("catch");
} finally {
  console.log("finally");
}
