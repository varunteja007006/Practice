/*
  What is a promise? 
  A promise is an object representing an eventual completion or rejection of an asynchronous 
  operation.

  Promise objects are immutable.
  Promise states are:
  1. fulfilled: Action related to the promise succeeded
  2. rejected: Action related to the promise failed
  3. pending: Promise is still pending i.e. not fulfilled or rejected yet
  4. settled: Promise has been fulfilled or rejected

  Promise Consumers: Promises can be consumed by registering functions 
  using .then and .catch methods.

  Promises are a powerful tool for managing asynchronous operations in JavaScript. 
  They allow you to chain together multiple asynchronous operations, handle errors gracefully, 
  and make your code more readable and maintainable.

  Promise and then:
  It is invoked when a promise is either resolved or rejected. It may also be defined as a 
  carrier that takes data from promise and further executes it successfully.

  Promise and catch:
  It is invoked when a promise is either rejected or some error has occurred in execution. 
  It is used as an Error Handler whenever at any step there is a chance of getting an error.

*/

// Create own promise method
function createPromise() {
  const promise = new Promise((resolve, reject) => {
    // Make Async call that will eventually resolve or reject
    //Eg, HTTP request

    //Async operation is complete, resolve the promise
    resolve(result);

    // If async operation failed, reject the promise with error
    reject(error);
  });

  //return the promise
  return promise;
}

// then method
// We are waiting for the createOrder func to send back a promise.
const promise_1 = createOrder(cart);

// Once the promise is full-filled we execute the later functions.
promise_1.then(function (orderID) {
  proceedToPayment(orderID);
});

//--------------------------------------------------------------------

// Promise Chaining & catch method
const promise = createOrder(cart);

promise
  .then((orderID) => {
    return proceedToPayment(orderID);
  })
  .then((orderSummary) => {
    return showWalletBalance(orderSummary);
  })
  .catch((error) => {
    return error;
  });
