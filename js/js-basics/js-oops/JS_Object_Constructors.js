/*
    Object: An object is the collection of related data or functionality in the form of key. 
    These functionalities usually consist of several functions and variables. All JavaScript 
    values are objects except primitives. 
*/

// class declarations
class CD {
  constructor(param1) {
    this.name = param1;
  }
  greet() {
    return `hello ${this.name}`;
  }
}

const obj = new CD("Mike");
console.log(obj.greet());
// class expressions
