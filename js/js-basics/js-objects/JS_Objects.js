/*
JavaScript Objects

Creating Objects
1. Literal Format: Literal Form: The literal form uses the construction of object literals 
that can be said as a collection of key-value pairs enclosed within a pair of curly braces.

2. Constructed Format : The Constructed form uses either an object constructor function or 
the new keyword to create an empty object ad then adds properties to the object one by one. 
    
    - This method uses 'new' keyword 
        the New keyword in front of any constructor method or any built-in constructor 
        method ( such as Object, Date, String, etc) and creates a new instance of the 
        following object by mounting it on memory.
*/

// Literal form
let obj = {
  item1: "A",
  item2: "B",
};

// Constructed Format
function objConstructor(param1, param2) {
  this.item1 = param1;
  this.item2 = param2;
}

let obj1 = new objConstructor();
obj1.item1 = "A";
obj1.item2 = "B";

/*
Differences between using Object Literals and the Constructed Form: Both the constructed 
form and literal form result in creating exactly the same sort of object i.e. the end result 
is the same for both methodologies. The only difference between the both is that object literals 
can take care of several key-value pairs at once and thus is more convenient while on the other 
hand with the constructed-form objects, we must add the properties one-by-one in separate 
statements. 
*/

console.log("\n\nExample\n");
// Example

let myObj = {
  // Integer Property.
  int_prop: 5,

  // String Property.
  str_prop: "GeeksforGeeks",

  // Object Property (Date).
  obj_prop: new Date(),

  // Object Property.
  inner_obj: {
    int_prop: 6,
  },

  // Function Property.
  func_prop: function () {
    console.log("Welcome to GeeksforGeeks!");
  },
};

console.log(myObj.int_prop);
console.log(myObj.str_prop);
console.log(myObj.obj_prop.toLocaleTimeString());
console.log(myObj.inner_obj.int_prop);
myObj.func_prop();

/*
Defining Global Variables to be owned by Objects: This is mostly done on methods, 
the process is fairly simple we will define our function as we are used to, and 
while defining the function to be a member of the object properties we will just 
give the name of the function as the value of one key.
*/

// Define Function Explicitly.
function toGreet() {
  console.log("Hello There!");
}

let myObj1 = {
  // Mention Function-Name as Value.
  greet: toGreet,

  // Define Function implicitly.
  byWhom: function () {
    console.log(" - GeeksforGeeks.org");
  },
};

myObj1.greet();
myObj1.byWhom();

// using Object.create({}) to create a new object
objC = Object.create({});
objC.name = "test";

console.log(objC);
