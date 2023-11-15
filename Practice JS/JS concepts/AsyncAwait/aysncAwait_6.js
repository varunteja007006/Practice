// 6. Two different Promises to be resolved in the same Async function.

// promise -> resolve & reject

// This promise resolves after 5 secs
const promise1 = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("Promise is resolved @5secs. ");
    }, 5000);
  } catch (error) {
    console.log(error);
  }
});

// This promise resolves after 10 secs
const promise2 = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("Promise is resolved @10secs. ");
    }, 10000);
  } catch (error) {
    console.log(error);
  }
});

/* 
    What will happen if first promise is resolved at 10sec & second promise at 5sec ???
    
    Lets call promise2 first and then promise1.  

    It will wait for the promise2 to be resolved and then rest of the things will be console 
    logged. Even though one promise1 will take 5 seconds less time than promise2.
*/
async function getDataAsync() {
  try {
    console.log("Code before first promise - wait time 10secs");
    const v1 = await promise2;
    console.log(v1);
    console.log("Code before second promise - wait time 5secs");
    const v2 = await promise1;
    console.log(v2);
  } catch (error) {
    console.log(error);
  }
}

getDataAsync();

/* 
    Switch promise1 and promise2

    Lets call promise1 first and then promise2.  

    It will wait for the promise1 to be resolved and then rest of the things will be console 
    logged. So promise1 will be resolved and the code will move forward. It has to wait for promise2
    to be resolved which will take 5 more seconds
*/
async function getDataAsync2() {
  try {
    console.log("Code before first promise - wait time 5secs");
    const v1 = await promise1;
    console.log(v1);
    console.log("Code before second promise - wait time 10secs");
    const v2 = await promise2;
    console.log(v2);
  } catch (error) {
    console.log(error);
  }
}

getDataAsync2();
