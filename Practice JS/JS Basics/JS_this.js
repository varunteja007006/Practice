/*
JavaScript 'this' keyword

JavaScript 'this' keyword always holds the reference to a single object, which defines the 
current line of code’s execution context which means 'this' keyword refers to the object that 
is currently executing the code.

When used inside a function 'this' value will change depending on how that 
function is defined, how it is invoked, and the default execution context. 

'this' keyword will refer to different objects depending on how it is used. 
*/

/*
There are various ways to set this in JavaScript:
-> Implicit binding 
-> Explicit binding
-> Default binding
-> Arrow function binding
*/

// Implicit Binding of 'this'
/*
When we call a function as a method of the object this keyword refers to the calling object
*/
const IObj = {
  firstname: "Bunty",
  lastname: "JS",
  age: 12,
  intro: function () {
    return `My name is ${this.firstname} ${this.lastname}. I am ${this.age} years old.`;
  },
};

console.log("Implicit Binding of 'this': ", IObj.intro()); // My name is Bunty JS. I am 12 years old.

console.log("\n");

// Explicit Binding of 'this'
/*
When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword 
default reference is changed to the object called using the above-specified methods.
*/
function EFunc() {
  return `${this.firstname} is good boy. He is ${this.age} years old.`;
}

EObj1 = { firstname: "Ramu", age: 12 };
EObj2 = { firstname: "Sonu", age: 15 };

console.log("Explicit Binding of 'this': ", EFunc.call(EObj1)); // Ramu is good boy. He is 12 years old.
console.log("\n");
console.log("Explicit Binding of 'this': ", EFunc.call(EObj2)); // Sonu is good boy. He is 15 years old.

console.log("\n");

// Default Binding of 'this'
/*
When this keyword is used in global scope this is set to window object.
*/

const age = 10;
const firstname = "Kiran";
function DFunc() {
  return `My name is ${this.firstname}. My age is ${this.age}.`;
}

function DFunc_NoThis() {
  return `My name is ${firstname}. My age is ${age}.`;
}

console.log("Default Binding of 'this': ", DFunc()); // My name is undefined. My age is undefined.
console.log("\n");

console.log("Default Binding of 'this': ", DFunc_NoThis()); // My name is Kiran. My age is 10.
console.log("\n");

// Arrow Function
/*
When this is used in the arrow function then this has lexical scope so without the function 
keyword this is unable to refer to the object in the outer scope. 
*/
const person = {
  name: "ram",
  age: 22,
  greet: () => {
    return `Hello , you are ${this.age} years old`;
  },
};
console.log("Arrow function of 'this': ", person.greet()); // Hello , you are undefined years old

/*
'this' in different places

- 'this' alone : refers to the global object.
- 'this' in function : the global object is the default binding for 'this'.
- 'this' in strict mode : in strict mode, 'this' is undefined.
- 'this' in event handlers: Refers to the current element that it has received.
*/
