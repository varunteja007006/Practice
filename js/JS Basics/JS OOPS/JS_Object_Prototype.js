/*
    JavaScript Object.prototype.constructor Property

    The constructor property returns a reference to the object constructor function that 
    has created the instance of an object. The value of the constructor is not a string 
    containing the function’s name, but it is a reference to the function itself.

    syntax
        Object.constructor
*/

function Gfg(name) {
  this.name = name;
}
let GeeksforGeeks = new Gfg("Geeks");
console.log(GeeksforGeeks.constructor);
