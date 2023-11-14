// Console output

console.log("Hello world");

// Add two numbers
let numOne = 1;
let numTwo = 2;

let result_add = numOne + numTwo;

console.log(result_add);

// Area of triangle
let base = 5;
let height = 5;
let area = (base * height) / 2;

console.log(area);

// program to convert celsius to fahrenheit
// ask the celsius value to the user
const celsius = 100;

// calculate fahrenheit
const fahrenheit = celsius * 1.8 + 32;

// display the result
console.log(
  `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`
);

// Pass a function as argument
function greet() {
  return "hello";
}

function funcName(name, func) {
  const greetMessage = func();
  console.log(greetMessage, name);
}

funcName("Varun", greet);
