/*
    JavaScript class expression
    JavaScript class is a type of function declared with class keyword, that is used to 
    implement object-oriented paradigm. Constructors are used to initialize the attributes 
    of a class. There are 2 ways to creating class in JavaScript.
    1.  class declaration
    2.  class expression

    class expression:  The class expression is another way of creating classes in JavaScript 
    and they can be named or unnamed. If named, the class name is used internally, but not 
    outside of the class.
*/

// Syntax
// Using named class expression
const sampleClass = class Class_name {
  constructor(name) {
    this.name = name;
  }
  returnName() {
    return this.name;
  }
};

console.log(new sampleClass("hello").returnName());

// Using unnamed class expression
const sampleClass1 = class {
  constructor(name) {
    this.name = name;
  }
  returnName() {
    return this.name;
  }
};

const obj = new sampleClass1("hello world");
console.log(obj.returnName());
