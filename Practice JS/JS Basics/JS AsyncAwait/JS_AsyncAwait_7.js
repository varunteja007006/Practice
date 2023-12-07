// 8. Promise chaining vs Async Await

// Async Await is a syntactical sugar over promise chaining. Therefore better to use Async Await.

// Chaining is better than callback hell and Async Await is just better way of writing the code.

const cart = ["dummy", "dummy1", "dummy2"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((error) => {
    // always handle errors 😇
    console.error(error.message);
  }); // this catch will catch errors at any part of the chain above it.

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    try {
      // create order
      // validate cart
      // return the orderId
      if (!validateCart(cart)) {
        throw new Error("Damn something went wrong");
      }
      // if everything good resolve
      const orderId = 12345;
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    } catch (error) {
      reject(error);
    }
  });

  return promise;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    try {
      resolve("Promise resolved");
    } catch (error) {
      reject(error);
    }
  });
}

function validateCart() {
  return true;
}
