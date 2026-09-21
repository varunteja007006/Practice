// https://www.w3schools.com/js/js_object_accessors.asp
// JavaScript Object Accessors

// Getters and setters allow you to define Object Accessors (Computed Properties)
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  },
};
console.log("Get Language: ", person.lang);
person.lang = "hindi";
console.log("Set Language to hindi: ", person.lang);

// Difference between function and get
const exampleOne = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    // fullName is a function
    return this.firstName + " " + this.lastName;
  },
};
const exampleTwo = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    // fullName is a property
    return this.firstName + " " + this.lastName;
  },
};

// Data Quality
const demo = {
  firstName: "John",
  lastName: "Wick",
  location: "canada",
  get fullName() {
    return this.firstName.toUpperCase() + " " + this.lastName.toUpperCase();
  },
  set updateLocation(location) {
    this.location = location.toUpperCase();
  },
};

console.log("Example for Data Quality: ", demo.fullName);
console.log("Example for Data Quality: ", demo.location);
demo.updateLocation = "New York";
console.log("Example for Data Quality: ", demo.location);

// Object.defineProperty()
// The Object.defineProperty() method can also be used to add Getters and Setters
/*
const obj = {counter : 0}; // define the object

Object.defineProperty(obj, "reset", { // set the getters and setters
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

obj.reset; // play with the setters and getters
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
*/
