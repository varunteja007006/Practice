// Polyfill for map, reduce, forEach, filter

// -- MAP
const arr = [2, 6, 3, 9, 11, 1];
const mapped = arr.map((element) => element * 2); // [4, 12, 6, 18, 22, 2]

Array.prototype.myMap = function myMap(cb) {
  // Don't use arrow function
  const arr = this;
  const res = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    res.push(cb(element, index, arr));
  }
  return res;
};

const result = arr.myMap((element) => element * 2); // [4, 12, 6, 18, 22, 2]

// Polyfill for call, apply, bind

// Polyfill for flat
const arr1 = [1, 2, 3, [4, 5, 6], [7, [8, 9]]];
arr1.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.myFlat = function myFlat(depth = Infinity) {
  const arr = this;
  const res = [];

  function destructure(arr, depth) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (Array.isArray(element) && depth > 0) {
        destructure(element, depth - 1);
      } else {
        res.push(element);
      }
    }
  }

  destructure(arr, depth);

  return res;
};

const res = arr1.myFlat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Polyfill for deep copy

const sample1 = {
  name: "Scaler",
  age: 5,
  nestObj: {
    item: 7777,
    itemTwo: 2,
  },
};

const sample2 = [
  1,
  2,
  3,
  {
    name: "Scaler",
    age: 5,
    dummy: [10, 20, 30, [100, 200]],
  },
  [2, 3, 4],
];

// simple solution
function deepCopy(params) {
  return JSON.parse(JSON.stringify(params));
}

// recursive solution
function deepCopy2(params) {
  if (
    typeof params === "undefined" ||
    params === null ||
    params instanceof Date ||
    typeof params === "function" ||
    params instanceof RegExp ||
    params instanceof Error ||
    params instanceof Map ||
    params instanceof Set
  ) {
    return params;
  } else if (Array.isArray(params)) {
    const newArr = [];
    for (const item of params) {
      newArr.push(deepCopy2(item));
    }
    return newArr;
  } else if (params instanceof Object) {
    const newObj = {};
    for (const key in params) {
      newObj[key] = deepCopy2(params[key]);
    }
    return newObj;
  } else if (params instanceof Promise) {
    return new Promise((resolve, reject) => {
      params.then((res) => {
        resolve(deepCopy2(res));
      });
    });
  } else {
    return params;
  }
}

const res1 = deepCopy(sample1);
const res2 = deepCopy(sample2);

const res3 = deepCopy2(sample1);
const res4 = deepCopy2(sample2);

sample1.nestObj.item = 9999; // tampering
sample2[3].name = "HELLO_WORLD"; // tampering

// console.log(sample1);
// console.log(sample2);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);

// polyfill for promise.all

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise one resolved 🌟 at 1000");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise two resolved 🌟 at 5000");
  }, 5000);
});

// const allPromise = Promise.all([promise1, promise2]);
// allPromise.then((data) => {
//   console.log(data);
// });

Promise.myAll = function (array) {
  const res = new Promise((resolve, reject) => {
    const res_arr = [];
    let completed = 0;

    if (array.length === 0) {
      resolve(res_arr);
      return;
    }

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      element
        .then((data) => {
          res_arr[index] = data; // Store at correct index
          completed++;
          if (completed === array.length) {
            resolve(res_arr);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
  return res;
};

// Test the new implementation
// const allPromiseNew = Promise.myAll([promise2, promise1]);
// allPromiseNew.then((data) => {
//   console.log(data);
// });

// polyfill for comparing two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(obj1 === obj2); // false

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true // but this is not the same as deep equality
// because it does not consider the order of the properties

const obj3 = { a: 1, b: 2 };
const obj4 = { b: 2, a: 1 };

console.log(JSON.stringify(obj3) === JSON.stringify(obj4)); // false

function isObjectSame(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (value1 instanceof Object && value2 instanceof Object) {
      if (!isObjectSame(value1, value2)) {
        return false;
      }
    }

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}
