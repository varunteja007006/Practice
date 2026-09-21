"use strict";
// Example 1 -  data is objects of object.. {a:1, b:[1,2],...}
var dataOne = { areaone: ["a", "b", "c"], areaTwo: ["x", "y", "z"] };
console.log("Example 1: ");
for (var x in dataOne) {
    console.log(x);
}
console.log(dataOne.areaone);
console.log(dataOne.areaTwo);
console.log("");
console.log("");
console.log("");
console.log("");
// Example 2 - data is array of arrays.. [[a,1], [b,[1,2]],... ]
var dataTwo = [
    ["areaOne", ["a", "b", "c"]],
    ["areaTwo", ["x", "y", "z"]],
];
console.log("Example 2: ");
dataTwo.map(function (item) {
    console.log("area name: ", item[0], "; district name: ", item[1]);
});
console.log("");
console.log("");
console.log("");
console.log("");
//Example 3 - data is array of objects.. [{a:1}, {b:[1,2]}, {..}, {...},...]
var dataThree = [
    { area: "areaOne", district: ["a", "b", "c"] },
    { area: "areaTwo", district: ["x", "y", "z"] },
];
console.log("Example 3: ");
//destructure array
dataThree.map(function (item) {
    console.log(item.area); //each array item has a property
    //destructure the second array item's property
    item.district.map(function (x) {
        console.log(x);
    });
});
