let radius = [2, 4, 5, 7];

let area = function (radius) {
  return Math.PI * radius * radius;
};

let circumference = function (radius) {
  return 2 * Math.PI * radius;
};

let diameter = function (radius) {
  return 2 * radius;
};

let calculate = function (array, logic) {
  let output = [];
  for (const element of array) {
    output.push(logic(element));
  }
  return output;
};

// Using map function
console.log("Map function outputs");
console.log(radius.map(area));
console.log(radius.map(diameter));
console.log(radius.map(circumference));

// using calculate function
console.log("\nCalculate function outputs");
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

//creating own map function
Array.prototype.calculate = function (logic) {
  let arr = this; // this in this context refers to the radius array
  let output = [];

  for (let element of arr) {
    output.push(logic(element));
  }
  console.log(`Output of ${logic.name}:`);
  return output;
};

console.log("\nOwn map function implementation");
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
