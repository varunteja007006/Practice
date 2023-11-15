// Examples
let obj = {
  name: "Tom",
  age: 10,
  city: "Chennai",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let obj2 = {
  name: "Jerry",
};

// Never do this, it is a performance bottleneck
obj2.__proto__ = obj; // this allows the inheriting the obj as obj2 properties

console.log(obj2.name);
console.log(obj2.city);

obj.getIntro(); // 'this' points to obj where the name is tommy
obj2.getIntro(); // but here 'this' points to obj2 therefore the name is jerry

// similarly prototypal inheritance for functions

// attaching myExample to all functions by specifying 'Function.prototype'
Function.prototype.myExample = function () {
  console.log("I am a example function attached to all functions");
};

// A normal function would inherit the myExample function
function demo() {
  console.log("demo function");
}

demo.myExample(); // myExample property is attached to all functions.
