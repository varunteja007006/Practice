// Multiple Await in a single Async function.

// promise -> resolve or rejects
const promise = new Promise((resolve, reject) => {
  // resolve the promise after 10 secs.
  try {
    setTimeout(() => {
      resolve("Promise is resolved.");
    }, 10000);
  } catch (error) {
    reject(error);
  }
});

async function getDataAsync() {
  //JS engine waits for the promise to be resolved.
  console.log("getDataAsync started. Code before 1st promise.....");
  const val1 = await promise;

  console.log("Code after 1st promise.....\n");
  console.log(val1);

  // what happens if we have another await???
  const val2 = await promise;
  console.log("Code after 2nd promise....");
  console.log(val2);
}

getDataAsync(); // initiate the async function

// The answer is both will be resolved in parallel
