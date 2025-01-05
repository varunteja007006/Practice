/**
 * Problem statement
 *
 * Pass the result of the first promise as params to the second and so on
 *
 */

let arr = [
  function () {
    return new Promise((res) => {
      setTimeout(() => res(10));
    });
  },
  function (param) {
    return new Promise((res) => {
      setTimeout(() => res(10 + param));
    });
  },
  function (param) {
    return new Promise((res) => {
      setTimeout(() => res(10 + param));
    });
  },
];

// iterative approach
async function getResultItr(params) {
  let res = null;
  for (let i = 0; i < params.length; i++) {
    res = await params[i](res);
  }
  return res;
}

getResultItr(arr).then((res) => console.log("Iterative approach: ", res));

// Recursive approach

async function getResultRec(arr, index, res) {
  if (index === arr.length) {
    return res;
  }
  res = await arr[index](res);
  return getResultRec(arr, index + 1, res);
}

getResultRec(arr, 0, null).then((res) =>
  console.log("Recursive approach: ", res)
);
