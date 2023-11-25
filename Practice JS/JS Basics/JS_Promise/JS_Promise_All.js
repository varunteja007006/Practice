/*
    Promise.all()

    The Promise.all() method is a Promise-returning method that takes an iterable of promises 
    as input and returns a single Promise that resolves when all of the input promises have resolved. 
    If any of the input promises reject, the returned Promise will also reject with the reason 
    from the first promise that rejected.
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

const promise_all_resolve = Promise.all([promise_1, promise_2, promise_3]);
console.time("promise_all_resolve");
promise_all_resolve
  .then((data) => {
    console.log("\nCASE 1: All promises only resolve\n");
    console.log(data);
  })
  .then(() => {
    console.timeEnd("promise_all_resolve");
  })
  .catch((error) => {
    console.log(error);
  });

// CASE 2: One promise rejects

const promise_all_error = Promise.all([promise_1, promise_2, promise_error]);
console.time("promise_all_error");
promise_all_error
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("\nCASE 2: One promise rejects\n");
    console.error(error);
  })
  .finally(() => {
    console.timeEnd("promise_all_error");
  });

/*
  Conclusion:
  
  Promise.all() –> will return only after 3 promises are resolved. 3 promises will be 
  resolved concurrently. Out of 3 promises whichever takes longer to resolve is the maximum 
  time for the Promise.all() promise to be resolved.
  
  Similarly if out of 3 promises one fails the whole Promise.all() will fail. The return 
  will be the error of the rejected promise. The Promise.all() is rejected immediately; a 
  promise is rejected before other promises are resolved. Promise.all() does not wait for 
  other promises to be resolved/rejected. Fail Fast condition
  
  It's an 'ALL' or 'NONE' situation.
*/
