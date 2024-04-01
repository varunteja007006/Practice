/*
 * Throttling is a technique in JavaScript that limits the number of times a function can be called
 * within a specific period of time.This can be useful in situations where you want to prevent a
 * function from being called too frequently.
 */

const expensiveAPICall = function () {
  console.log("Making an expensive API call .....");
};

const throttleFunction = function (expensiveFunc, limit) {
  let throttle = true;
  return function () {
    if (throttle) {
      throttle = setTimeout(() => {
        expensiveFunc();
        throttle = true;
      }, limit);
    }
  };
};

const handleExpensiveAPICall = throttleFunction(expensiveAPICall, 5000);

handleExpensiveAPICall();
setTimeout(() => {
  handleExpensiveAPICall();
}, 2000);

/*
 * expensiveAPICall function: This is a placeholder function that simulates an expensive API call. In
 * a real-world scenario, this function would perform some time-consuming or expensive (money) operation, such as fetching
 * data from an external server.
 *
 * throttleFunction function: This is a higher-order function that takes two parameters: expensiveFunc
 * (the function to throttle) and limit (the time limit in milliseconds). It returns a throttled
 * version of the expensiveFunc.
 *
 * Inside throttleFunction, there's a closure that maintains the throttle state. This state determines
 * whether the expensiveFunc is allowed to execute or not. Initially, throttle is set to true,
 * indicating that the function can be called.
 *
 * When the throttled function is invoked, it checks the throttle state. If throttle is true, it
 * schedules the execution of expensiveFunc after the specified limit using setTimeout. It then
 * sets throttle to false to prevent further calls until the limit is reached. After the limit
 * is reached, throttle is set back to true, allowing the function to be called again.
 *
 * handleExpensiveAPICall: This is the throttled version of the expensiveAPICall function created
 * by calling throttleFunction with expensiveAPICall and 5000 (5 seconds) as arguments.
 *
 * Execution: The handleExpensiveAPICall function is called twice. The first call occurs immediately,
 * and the second call is scheduled to happen after a delay of 2 seconds. However, due to throttling,
 * the second call will be delayed until at least 5 seconds have passed since the first call. This
 * demonstrates how throttling limits the frequency of function calls.
 *
 */
