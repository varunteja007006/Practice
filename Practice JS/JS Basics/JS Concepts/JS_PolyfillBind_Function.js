/*
  What is .bind() method? Why do we use it? 

  Why polyfillBind? It is a fallback when the browser does not support the bind method.

*/

let nameObj = {
  firstname: "Tommy",
  lastname: "Blue",
};

let printName = function () {
  console.log("Actual bind method:" + this.firstname + " " + this.lastname);
};

// Actual bind method
let printName_One = printName.bind(nameObj); // bind the 'printName' func with bind method
printName_One(); // invoke the new printName

// create own bind function - 'myBind'
let logName = function (homeTown, pincode) {
  console.log(
    "myBind :" +
      this.firstname +
      " " +
      this.lastname +
      " " +
      homeTown +
      " " +
      pincode
  );
};

//adding myBind to all functions by extending the Functions with prototype
Function.prototype.myBind = function (...params) {
  // params is a list of arguments. It is a 'rest parameter' used to accept unknown no of arguments
  let obj = this; // In this example it refers to the function 'logName'
  let restOfTheParams = [...params];
  restOfTheParams.shift();

  return function (...params2) {
    /* 
      .apply() is function borrowing method that takes array of arguments (similar to .call())
      */
    obj.apply(params[0], [...restOfTheParams, ...params2]);
  };
};

let logName_One = logName.myBind(nameObj, "Chennai");
logName_One("675757"); // pass pincode as argument & invoke the new logName
