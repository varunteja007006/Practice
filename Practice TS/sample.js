"use strict";
// generics
Object.defineProperty(exports, "__esModule", { value: true });
// What are generics
// Why do we need generics
// problem one: Need to use union of types and validate them inside if we have multiple types,
function funcOne(params) {
    return params;
}
// problem two: To avoid the above we can use 'any' but it defeats the purpose of using TypeScript
function funcTwo(params) {
    return params;
}
// To solve the above problem, lets use simple 'generics'
function funcThree(params) {
    /*
  The usage of 'Type' will accept anything, and also it makes sure to log the params type and
  return the type
  */
    return params;
}
funcThree(3);
funcThree("hello");
funcThree(true);
// Most Common way of writing the generics
function funcFour(params) {
    return params;
}
// Now lets the described Type for the previously created generics function
funcFour({ type: "Water", strength: 500 });
//3:48:00
