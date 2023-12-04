// Solve this
const example = ({ a, b, c }) => {
  console.log(a, b, c); // undefined undefined undefined
};
example(0, 1, 2);
/*
Since we are passing individual numbers rather than a single object to the function, 
Javascript will initialize the object parameters with their default value of undefined.
*/

// Solve this
const set = new Set();
set.add(5);
set.add("Hello");
set.add({ name: "Scaler" });
for (let item of set) {
  console.log(item + 6);
}
/*
output:
11
Hello6
[object Object]6
*/
