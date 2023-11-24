/*
In functions, there are named functions and anonymous functions, and then there are Functions that 
are executed as soon as they are mounted, these functions are known as Immediately Invoked Function 
Expressions or IIFEs. 

Use Cases Of IIFE:
1. Avoid polluting the global namespace 
2. To create closures
3. Avoid conflict of variable names between libraries and programs.
4. IIFE is used to create private and  public variables and methods
5. It is used to execute the async and await function
6. It is used in JQuery Library
7. It is used to work with require function
*/

(function () {
  console.log("This is Immediately Invoked Function Expressions.");
})();
