/*
 * What is Async ?
 *
 * Async is a keyword in JavaScript that lets you write asynchronous code in a more synchronous,
 * readable way.
 *
 * The keyword 'async' before a function makes the function always return a promise.
 *
 * The keyword await is used inside async functions, which makes the program wait until the Promise
 * resolves.
 *
 */

// promise -> resolve or rejects
const promise = new Promise((resolve, reject) => {
  try {
    resolve("This is a promise");
  } catch (error) {
    reject(error);
  }
});

// 1. Simple Async & Await
// Async always returns a promise
// Async function without await
async function getData() {
  try {
    const data = promise;
    return data;
  } catch (error) {
    console.log(error);
  }
  return "hello mom"; //returns this string after wrapping it in promise
}

const data = getData(); // promise resolved, you get a promise object
console.log(data); // promise object is logged
data.then((res) => console.log(res)); // unpack the promise for data
