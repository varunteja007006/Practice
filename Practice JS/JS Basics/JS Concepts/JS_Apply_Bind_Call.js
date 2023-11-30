/* 
The call() method explicitly sets the this value of the function to be called and allows passing 
arguments individually. The syntax is:
Apply is very similar to the call function. The only difference is that in apply you can pass an 
array as an argument list. 

Bind is a function that helps you create another function that you can execute later with the new
context of this that is provided
*/

let nameObj = {
  firstname: "Tommy",
  lastname: "Ben",
};

let fullname = function (city, pincode) {
  console.log(
    this.firstname + " " + this.lastname + " from " + city + ", " + pincode
  );
};

// call method --> function borrowing
fullname.call(nameObj, "Chennai", "12345"); // Pass the object and other arguments

// apply method --> similar to .call() method
fullname.apply(nameObj, ["Mumbai", "24523"]); // Pass the object and other arguments in an array

// bind method -->
let fullnameMethod = fullname.bind(nameObj, "Delhi", "09890");
fullnameMethod();

/*
Common Use Cases:

Setting this Value: All three methods can be used to explicitly set the this value of the function 
being called.

Handling Events: Event handlers often need to bind specific this values for proper context.

Creating Constructor Functions: Constructor functions use call() or apply() to create new instances 
of objects.

Currying: Currying involves partially applying arguments to a function and returning a new function 
that takes the remaining arguments.

Generic Functions: Generic functions can be written to work with different types of data by using 
bind() to set the this value appropriately.
*/
