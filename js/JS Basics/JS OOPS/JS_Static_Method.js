/*
    Static Methods in JavaScript
    
    The JavaScript allows static methods that belong to the class rather than an instance of 
    that class. Hence, an instance is not needed to call such static methods. Static methods 
    are called on the class directly. It can be of any name. A class can contain more than one 
    static method. If we define more than one static method with the same name, the last method 
    is invoked by JavaScript. “this” keyword is used to call a static method within any other 
    static method in JavaScript.
*/

// Using static methods

class GeeksforGeeks {
  // static keyword is used
  // before the function name
  static example1() {
    // return the string -->
    // static method 1
    return "static method 1";
  }

  // Another static method
  // with different name
  static example2() {
    // return the string -->
    // static method 2
    return "static method 2";
  }
}
console.log(GeeksforGeeks.example1());
console.log(GeeksforGeeks.example2());

console.log("\n");

// Using duplicate static methods

class GeeksforGeeks2 {
  // static keyword is used
  // before the function name
  static example3() {
    // return the string -->
    // static method 1
    return "static method example 3";
  }

  // Another static method
  // with different name
  static example3() {
    // return the string -->
    // static method 2
    return "static method duplicate of example 3";
  }
}
console.log(GeeksforGeeks2.example3());

console.log("\n");

// Invoke static method within the non static method.

class GeeksforGeeks3 {
  // Static keyword is used
  // before the function name
  static example4() {
    // return the string -->
    // static method 1
    return "static method example 4";
  }

  // Non static method with
  // different name
  example5() {
    // return the string -->
    // static method 1
    // Calls the static function
    // using className.functionName
    return GeeksforGeeks3.example4();
  }
}
const obj = new GeeksforGeeks3();
console.log(obj.example5());
