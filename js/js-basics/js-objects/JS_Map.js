/*
JavaScript Map

JavaScript map is a collection of elements where each element is stored as a Key, value pair. 
Map objects can hold both objects and primitive values as either key or value.

When we iterate over the map object it returns the key, and value pair in the same order as 
inserted. Map() constructor is used to create Map in JavaScript.

JavaScript Map has a property that represents the size of the map.
*/

/*
Steps to Create a Map:
1. Passing an Array to new Map()
2. Create a Map and use Map.set()
*/
// Using 'new' keyword
let map0 = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);

console.log("map0: ", map0);

// Using .set()
// Creating a Map for product prices
const prices = new Map();
// Using Map.set() to add product prices
prices.set("Laptop", 1000);
prices.set("Smartphone", 800);
// The Map now contains { 'Laptop' => 1000, 'Smartphone' => 800 }

/*
Map object provided by ES6. A key of a Map may occur once, which will be unique in 
the map’s collection. There are slight advantages to using a map rather than an object.

Accidental Keys & Security: No default keys are stored, only contain what’s explicitly put 
into them. Because of that, it’s safe to use.

Key Types & Order: It can be any value as a key function, object anything. And the order 
is straightforward way in the order of entry insertion.

Size: Because of the size property a map can be easily retrieved.

Performance: Any operation can be performed on math so easily in a better way.

Serialization and parsing: We can create our own serialization and parsing support for Map 
by using JSON.stringify() and JSON.parse() methods.
*/

// More methods for Map Object

let map1 = new Map();

map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1
  .set("website", "geeksforgeeks")
  .set("friend 1", "gourav")
  .set("friend 2", "sourav");

console.log(map1); /*
output:

Map(5) {
  'first name' => 'sumit',
  'last name' => 'ghosh',
  'website' => 'geeksforgeeks',
  'friend 1' => 'gourav',
  'friend 2' => 'sourav'
}
*/

console.log("map1 has website ? " + map1.has("website")); // output: true

console.log("map1 has friend 3 ? " + map1.has("friend 3")); // output: false

console.log("get value for key website " + map1.get("website")); // output: geeksforgeeks

console.log("get value for key friend 3 " + map1.get("friend 3")); // output: undefined

console.log("delete element with key website " + map1.delete("website")); // output: true

console.log("map1 has website ? " + map1.has("website")); // output: false

console.log("delete element with key website " + map1.delete("friend 3")); // output: false

map1.clear();

console.log(map1); // output: Map(0) {size: 0}
