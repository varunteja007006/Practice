// Await - code execution halting

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
  //code execution is halted. Resumes only after the promise is resolved.
  console.log("getDataAsync started.....before promise....");
  const val = await promise;
  console.log("code after promise...");
  console.log(val); // logging the promise
}
getDataAsync();
