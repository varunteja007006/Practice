/*
JavaScript Void

The void keyword in JavaScript, is used to evaluate an expression which does not 
return any value. 

The void operator is an unary operator that accepts the single operand, which may be of any type. 
The importance of the void keyword come into role when we just need to evaluate an expression 
instead of returning its value. It means, by using it, we can prevent the browser from displaying 
the result of the execution of the expression.

The void operator has an operator precedence ie., the priority will be given to operators while 
parsing a statement that has more than one operator performing operations in it. 
*/

// void operator and operator precedence

console.log(void (10 == "10")); // output: undefined
console.log(void 10 == "10"); // output: false

// Where do we use void operator

/*
Active JavaScript URLs:

The void operator is most commonly used in managing the javascript: URL (s) because it allows 
the browser to show the end result of the evaluation of the expression rather than the returned 
value of the evaluated expression on the client side. 
*/

/*
Inactive Javascript URLs: 

In some cases, it is not required by a link to navigate anywhere or do anything. To achieve 
it, we combine the pseudo URL (javascript:) with void(0) as a value of an href, it tells the 
browser to return/do nothing when that link is clicked. 
*/

// check the JS_Void_Operator.html file

/*
Suppression of Arrow Functions: Arrow functions provide a braceless syntax to return the 
value of an expression. To ensure that the return value of the function expression (when 
it is of no use) doesn’t affect the code in any way, it can be passed into a void operator.
*/

// Can also be used with IIFE (Immediately Invoked Function Expression)
