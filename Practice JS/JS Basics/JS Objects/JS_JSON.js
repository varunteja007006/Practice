/*
JavaScript JSON

JSON or JavaScript Object Notation is a format for structuring data.

JSON serializes the data and converts it into a human-readable and understandable format, 
which also makes it transferal and to be able to communicate.

Characteristics of JSON
1. It is Human-readable and writable.

2. It is a light weight text-based data interchange format which means, it is simpler to read and 
write when compared to XML.

3. It is widely used as a data storage and communication format on the web.

4. Though it is derived from a subset of JavaScript, it is Language independent. Thus, the code for 
generating and parsing JSON data can be written in any other programming language.

JSON syntax is derived from JavaScript object notation

1. Data is in name/value pairs, separated by commas, curly braces hold objects, square brackets 
hold arrays

    {"name":"Tony","age":32,hobbies:["eating","drinking"]}
*/

/*
Convert JSON text to JavaScript Object

JSON.parse() method to convert the JSON text to a JavaScript Object

let text =
  '{"model":[' +
  '{"carName":"Baleno","brandName":"Maruti" },' +
  '{"carName":"Aura","brandName":"Hyndai" },' +
  '{"carName":"Nexon","brandName":"Tata" }]}';

const cars = JSON.parse(text);
console.log(
  "The car name is: " +
    cars.model[2].carName +
    " of brand: " +
    cars.model[2].brandName
);
*/
