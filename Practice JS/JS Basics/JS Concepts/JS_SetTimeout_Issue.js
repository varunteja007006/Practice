console.log("start");

function first() {
  for (let index = 0; index < 1000000000; index++) {
    index ** 2;
  }
  console.log("Done loop");
}

console.log("before timeout");

setTimeout(function () {
  console.log("Done with Timeout");
}, 0);

console.log("before init first()");

first();

console.log("after init first()");

/*
 * Why setTimeout function not logging with 0ms passed?
 * The setTimeout function stores it in the callback queue which is executed only after call stack is empty, even if setTimeout is set to 0ms.
 * setTimeout ensures that minimum it will take the time mentioned because it may be paused due to call stack not empty.
 */
