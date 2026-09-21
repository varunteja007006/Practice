/*
Promise.any()

The Promise.any() method is a Promise-returning method that takes an iterable of 
promises as input and returns a single Promise that resolves when any of the input 
promises fulfills. Unlike Promise.all(), which only resolves when all of the input 
promises have fulfilled, 

Promise.any() resolves as soon as the first input promise fulfills.

It will wait for successful Promise
*/

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
  // let us reject the promise after 2 seconds
  try {
    setTimeout(() => {
      reject("Promise failed !!😧");
    }, 2000);
  } catch (error) {
    console.log(error);
  }
});

const promise_error_2 = new Promise((resolve, reject) => {
  // fetch some data by an asynchronous operation and then resolve it
  // let us reject the promise after 5 seconds
  try {
    setTimeout(() => {
      reject("Promise failed again!!😧😧");
    }, 5000);
  } catch (error) {
    console.log(error);
  }
});

const promise_error_3 = new Promise((resolve, reject) => {
  try {
    // fetch some data by an asynchronous operation and then resolve it
    // let us reject the promise after 10 seconds
    setTimeout(() => {
      reject("Promise failed again & again!! 😧😧😧");
    }, 10000);
  } catch (error) {
    reject(error);
  }
});

// CASE 1: All promises only resolve

const promise_any_resolve = Promise.any([promise_1, promise_2, promise_3]);
console.time("promise_any_resolve");

promise_any_resolve
  .then((data) => {
    console.log("\nCASE 1: All promises only resolve\n");
    console.log(data);
  })

  .catch((error) => {
    console.log("\nCASE 1: All promises only resolve\n");
    console.log(error);
  })
  .finally(() => {
    console.timeEnd("promise_any_resolve");
  });

/*
    Output:
    Promise three resolved 🙂
    promise_any_resolve: 2.020s
  */

// CASE 2: One promise rejects

const promise_any_error = Promise.any([promise_1, promise_2, promise_error]);
console.time("promise_any_error");

promise_any_error
  .then((data) => {
    console.log("\nCASE 2: One promise rejects\n");
    console.log(data);
  })
  .catch((error) => {
    console.log("\nCASE 2: One promise rejects\n");
    console.error(error);
  })
  .finally(() => {
    console.timeEnd("promise_any_error");
  });

/*
    Output:
    Promise two resolved 💕
    promise_any_error: 7.003s
  */

// CASE 3: Two promise rejects

const promise_any_error_2 = Promise.any([
  promise_1,
  promise_error_2,
  promise_error,
]);
console.time("promise_any_error_2");

promise_any_error_2
  .then((data) => {
    console.log("\nCASE 3: Two promise rejects\n");
    console.log(data);
  })
  .catch((error) => {
    console.log("\nCASE 3: Two promise rejects\n");
    console.error(error);
  })
  .finally(() => {
    console.timeEnd("promise_any_error_2");
  });

/*
    Output:
    Promise one resolved 🌟
    promise_any_error_2: 10.003s
  */

// CASE 4: All promise rejects

const promise_any_error_3 = Promise.any([
  promise_error_3,
  promise_error_2,
  promise_error,
]);
console.time("promise_any_error_3");

promise_any_error_3
  .then((data) => {
    console.log("\nCASE 4: All promise rejects\n");
    console.log(data);
  })
  .catch((error) => {
    console.log("\nCASE 4: All promise rejects\n");
    console.error(error);
  })
  .finally(() => {
    console.timeEnd("promise_any_error_3");
  });

/*
Output:
    [AggregateError: All promises were rejected] {
    [errors]: [
      'Promise failed again & again!! 😧😧😧',
      'Promise failed again!!😧😧',
      'Promise failed !!😧'
    ]
    }
    promise_any_error_3: 10.010s
*/
