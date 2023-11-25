/*
Promise.allSettled()

The Promise.allSettled() method is a Promise-returning method that takes an iterable of 
promises as input and returns a single Promise that resolves when all of the input promises 
have settled (either fulfilled or rejected). Unlike Promise.all(), which only resolves when 
all of the input promises have fulfilled, Promise.allSettled() resolves even if some of the 
input promises have rejected.

The Promise.allSettled() method is a Promise-returning method that takes an iterable of promises 
as input and returns a single Promise that resolves when all of the input promises have settled 
(either fulfilled or rejected). Unlike Promise.all(), which only resolves when all of the input 
promises have fulfilled, Promise.allSettled() resolves even if some of the input promises have 
rejected.

The returned Promise resolves with an array of objects, one for each input promise. Each 
object has a property called status that indicates whether the corresponding promise was 
fulfilled ("fulfilled") or rejected ("rejected"). If the promise was fulfilled, the object 
will also have a property called value that contains the fulfilled value of the promise. If 
the promise was rejected, the object will also have a property called reason that contains 
the reason for the rejection.
*/

// const {
//   promise_1,
//   promise_2,
//   promise_3,
//   promise_error,
// } = require("./promiseAll");

const promise_1 = new Promise((resolve, reject) => {
  try {
    // fetch some data by an asynchronous operation and then resolve it
    // let us resolve the promise after 10 seconds
    setTimeout(() => {
      resolve("Promise one resolved 🌟");
    }, 10000);
  } catch (error) {
    reject(error);
  }
});

const promise_2 = new Promise((resolve, reject) => {
  try {
    // fetch some data by an asynchronous operation and then resolve it
    // let us resolve the promise after 7 seconds
    setTimeout(() => {
      resolve("Promise two resolved 💕");
    }, 7000);
  } catch (error) {
    reject(error);
  }
});

const promise_3 = new Promise((resolve, reject) => {
  try {
    // fetch some data by an asynchronous operation and then resolve it
    // let us resolve the promise after 2 seconds
    setTimeout(() => {
      resolve("Promise three resolved 🙂");
    }, 2000);
  } catch (error) {
    reject(error);
  }
});

const promise_error = new Promise((resolve, reject) => {
  // fetch some data by an asynchronous operation and then resolve it
  // let us reject the promise after 5 seconds
  try {
    setTimeout(() => {
      reject("Promise failed !!😧");
    }, 2000);
  } catch (error) {
    console.log(error);
  }
});

// CASE 1: All promises only resolve

const promise_allSettled_resolve = Promise.allSettled([
  promise_1,
  promise_2,
  promise_3,
]);
console.time("promise_allSettled_resolve");
promise_allSettled_resolve
  .then((data) => {
    console.log("\nCASE 1: All promises only resolve\n");
    console.log(data);
  })
  .then(() => {
    console.timeEnd("promise_allSettled_resolve");
  })
  .catch((error) => {
    console.log(error);
  });

/*
    Output:
    [
    { status: 'fulfilled', value: 'Promise one resolved 🌟' },
    { status: 'fulfilled', value: 'Promise two resolved 💕' },
    { status: 'fulfilled', value: 'Promise three resolved 🙂' }
    ]
*/

// CASE 2: One promise rejects

const promise_all_error = Promise.allSettled([
  promise_1,
  promise_2,
  promise_error,
]);
console.time("promise_allSettled_error");
promise_all_error
  .then((data) => {
    console.log("\nCASE 2: One promise rejects\n");
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.timeEnd("promise_allSettled_error");
  });

/*
    Output:
    [
    { status: 'fulfilled', value: 'Promise one resolved 🌟' },
    { status: 'fulfilled', value: 'Promise two resolved 💕' },
    { status: 'rejected', reason: 'Promise failed !!😧' }
    ]
*/

/*
Conclusion:

Promise.allSettled() –> This is used to overcome that 'NONE' situation. 
Even if one promise is rejected it will wait for other promises to be resolved/rejected. 
It will return the error for the rejected promises & resolved for the resolved promises.
*/
