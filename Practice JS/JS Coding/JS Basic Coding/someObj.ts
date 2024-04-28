const data = {
  item_one: {
    name: "Item One",
    value: 12,
  },
  item_two: {
    name: "Item Two",
    value: 12,
  },
  item_three: {
    name: "Item Three",
    value: 12,
  },
  item_four: {
    name: "Item Four",
    value: 12,
  },
};

// console.log(data);

// console.log(Object.entries(data)); // uncomment this to see magic of Object.entries()

/* output
[
  [ 'item_one', { name: 'Item One', value: 12 } ],
  [ 'item_two', { name: 'Item Two', value: 12 } ],
  [ 'item_three', { name: 'Item Three', value: 12 } ],
  [ 'item_four', { name: 'Item Four', value: 12 } ]
]
*/

const newData = Object.entries(data);
// for (let i = 0; i < newData.length; i++) {
//   const [x, y] = newData[i];
//   console.log(x);
//   console.log(y);
// }

/* output
item_one
{ name: 'Item One', value: 12 }
item_two
{ name: 'Item Two', value: 12 }
item_three
{ name: 'Item Three', value: 12 }
item_four
{ name: 'Item Four', value: 12 }
 */

for (let i = 0; i < newData.length; i++) {
  const [x, { name, value }] = newData[i];
  console.log(x);
  console.log("name", name);
  console.log("value", value);
}

/* output

item_one
name Item One
value 12
item_two
name Item Two
value 12
item_three
name Item Three
value 12
item_four
name Item Four
value 12
*/
