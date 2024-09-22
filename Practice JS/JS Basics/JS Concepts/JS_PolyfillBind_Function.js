/*
  What is .bind() method? Why do we use it? 

  Why polyfillBind? It is a fallback when the browser does not support the bind method.

*/

let nameObj = {
  // An object that we want to bind
  firstname: "Tommy",
  lastname: "Blue",
};

let printName = function (age, city) {
  // function that implements logging of firstname, lastname, age and city
  console.log(
    "Actual bind method: " +
      this.firstname +
      " " +
      this.lastname +
      " " +
      age +
      " " +
      city
  );
};

// Actual bind method
let printName_One = printName.bind(nameObj); // bind the 'printName' func with bind method
printName_One("25", "Chennai"); // invoke the new printName

// ------------------------------------------------------------------
// create own bind function - 'myBind'
// ------------------------------------------------------------------

let logName = function (age, city) {
  // function that implements logging of firstname, lastname, age and city
  console.log(
    "myBind method :" +
      this.firstname +
      " " +
      this.lastname +
      " " +
      age +
      " " +
      city
  );
};

// adding myBind to all functions by extending the Functions with prototype
Function.prototype.myBind = function (...params) {
  // params is a list of arguments. It is a 'rest parameter' used to accept unknown no of arguments

  let obj = this; // In this example it refers to the function 'logName'

  let restOfTheParams = [...params];
  restOfTheParams.shift(); // Shift (remove) the first element of the array

  return function (...params2) {
    /* 
      .apply() is function borrowing method that takes array of arguments (similar to .call())
      */
    obj.apply(params[0], [...restOfTheParams, ...params2]);
  };
};

let logName_One = logName.myBind(nameObj, "Chennai");
logName_One("675757"); // pass pincode as argument & invoke the new logName

// ------------------------------------------------------------------
// Example 2
// ------------------------------------------------------------------
const myObj = {
  firstname: "varun",
  lastname: "teja",
};

function anotherPrintName(age, city) {
  console.log(`${this.firstname} ${this.lastname} ${age} ${city}`);
}

// first argument is this
// rest of the arguments
anotherPrintName.call(myObj, 28, "HYD");

// Supported bind function
const actualBind = anotherPrintName.bind(myObj, 10);
actualBind("Hyderabad");

Function.prototype.myBind = function (...params) {
  const printName = this;

  const rest = [...params];
  rest.shift();

  return function (..._params) {
    const allParams = [...rest, ..._params];

    printName.call(params[0], ...allParams);
  };
};

printName.myBind(myObj, 18)("Pune");
