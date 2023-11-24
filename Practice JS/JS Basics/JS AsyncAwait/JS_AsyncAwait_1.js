// With and without Async await

// promise -> resolve or rejects
const promise = new Promise((resolve, reject) => {
  try {
    resolve("This is a promise");
  } catch (error) {
    reject(error);
  }
});

// without async & await

function noAsyncGetData() {
  // get the promise object & then unpack it by chaining with 'then'
  promise
    .then((res) => console.log("Without Async Await: ", res))
    .catch((error) => console.log(error));
}
noAsyncGetData();

// with async & await

async function awaitGetData() {
  // await can only be used only inside a async function. It waits for the promise to be resolved.
  try {
    const val = await promise;
    return val; // returning the promise
  } catch (error) {
    console.log(error);
  }
}

const dataOne = awaitGetData(); // promise object
dataOne.then((res) => console.log("With Async Await: ", res)); // unpacking a promise
