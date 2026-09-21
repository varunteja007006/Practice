/*
    Classes in JavaScript

    JavaScript Classes are basically a blueprint or template of the object. 
    JavaScript classes can be used to create new objects in Javascript.

    Classes are similar to functions. Here, a class keyword is used instead of a function keyword. 
    Unlike functions classes in JavaScript are not hoisted. The constructor method is used to 
    initialize. The class name is user-defined.    

    Constructor: A constructor is a function that initializes an object. In JavaScript the 
    constructors are more similar to normal java constructor. Object constructor: In JavaScript, 
    there is a special constructor function known as Object() is used to create and initialize 
    an object. The return value of the Object() constructor is assigned to a variable. 
    The variable contains a reference to the new object. We need an object constructor to 
    create an object “type” that can be used multiple times without redefining the object every time.
    
    Instantiating an object constructor: There are two ways to instantiate object constructor,
    1. var object_name = new Object(); or  
      var object_name = new Object("java", "JavaScript", "C#");
    2. var object_name = { };
*/

// Syntax
class classname {
  constructor(parameter) {
    this.classname = parameter;
  }
}
const obj = new classname("pass the parameter");
console.log(obj.classname);
