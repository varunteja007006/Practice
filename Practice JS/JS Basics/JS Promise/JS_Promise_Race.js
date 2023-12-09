/*
    Promise.race()
    The Promise.race() method takes an iterable of promises as input and returns a 
    single Promise that resolves or rejects as soon as any of the input promises resolves 
    or rejects. This means that Promise.race() does not wait for all of the input promises 
    to settle before resolving or rejecting. It will resolve or reject as soon as the first 
    input promise settles.

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
  // let us reject the promise after 8 seconds
  try {
    setTimeout(() => {
      reject("Promise failed !!😧");
    }, 8000);
  } catch (error) {
    console.log(error);
  }
});

// CASE 1: All promises only resolve

const promise_race_resolve = Promise.race([promise_1, promise_2, promise_3]);
console.time("promise_race_resolve");

promise_race_resolve
  .then((data) => {
    console.log("\nCASE 1: All promises only resolve\n");
    console.log(data);
  })
  .catch((error) => {
    console.log("\nCASE 1: All promises only resolve\n");
    console.log(error);
  })
  .finally(() => {
    console.timeEnd("promise_race_resolve");
  });

/*
    Output:

    Promise three resolved 🙂
    promise_race_resolve: 2.010s
*/

// CASE 2: One promise rejects

const promise_race_error = Promise.race([promise_1, promise_2, promise_error]);
console.time("promise_race_error");

promise_race_error
  .then((data) => {
    console.log("\nCASE 2: One promise rejects\n");
    console.log(data);
  })
  .catch((error) => {
    console.log("\nCASE 2: One promise rejects\n");
    console.error(error);
  })
  .finally(() => {
    console.timeEnd("promise_race_error");
  });
/*
    Output:
    
    Promise failed !!😧
    promise_race_error: 2.011s
*/

// CASE 3: One promise rejects but it takes long

const promise_race_error_2 = Promise.race([
  promise_1,
  promise_error_2,
  promise_2,
]);
console.time("promise_race_error_2");

promise_race_error_2
  .then((data) => {
    console.log("\nCASE 3: One promise rejects but it takes long\n");
    console.log(data);
  })
  .catch((error) => {
    console.log("\nCASE 3: One promise rejects but it takes long\n");
    console.error(error);
  })
  .finally(() => {
    console.timeEnd("promise_race_error_2");
  });
/*
    Output:
    
  Promise two resolved 💕
  promise_race_error_2: 7.004s
*/
