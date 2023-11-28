/*
JavaScript | Callbacks

JavaScript is an asynchronous language, which means that it can handle multiple 
tasks simultaneously. Callbacks are a fundamental aspect of JavaScript, as they 
allow you to run code after an asynchronous operation has been completed. 


What are Callbacks?
A callback is a function that is passed as an argument to another function, and 
is called after the main function has finished its execution. 

When the main function is finished, it calls the callback function to provide a 
result. Callbacks allow you to handle the results of an asynchronous operation 
in a non-blocking manner, which means that the program can continue to run while 
the operation is being executed.

Asynchronous operations are operations that take a significant amount of time to 
complete, such as network requests, file I/O, and database queries. If these operations 
were executed synchronously, the program would freeze and wait for the operation to 
complete before continuing. This can lead to a poor user experience, as the program 
would appear unresponsive.

Callbacks allow you to continue executing code while the operation is being executed 
in the background. Once the operation has completed, the callback function is called 
with the result of the operation. This way, you can ensure that the program remains 
responsive and the user experience is not impacted.
*/
function mainFunction(callback) {
  console.log("Performing operation...");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function () {
    callback("Operation complete");
  }, 1000);
}

// Define the callback function
function callbackFunction(result) {
  console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);

//This code is contributed by Veerendra Singh Rajpoot

/*
Concepts:

Asynchronous programming: Callbacks are used to handle the results of asynchronous operations, 
which means that the operation does not block the execution of the rest of the program. Instead, 
the program continues to run and the callback function is executed when the operation is complete.

Non-blocking: Callbacks allow for non-blocking programming, which means that the program does 
not stop and wait for an operation to complete before continuing to execute. This is important 
for improving the performance and responsiveness of applications.

Higher-order functions: A higher-order function is a function that takes one or more functions 
as arguments, or returns a function as a result. The mainFunction in the examples above is a 
higher-order function because it takes a callback function as an argument.

Anonymous functions: Anonymous functions are functions that are not named and are often used 
as callbacks. The function passed to setTimeout in the first code example is an anonymous 
function.

Closure: A closure is a function that has access to variables in its outer scope, even after 
the outer function has returned. This allows the callback function to access variables and 
information from the main function, even after the main function has completed its execution.

understanding these concepts is essential for effectively using callbacks in JavaScript 
programming

Real-Life Examples:

Loading images on a website: When you load a website, images can take a while to load, 
especially if they’re large. If images were loaded synchronously, the website would 
freeze and wait for each image to load before continuing. With callbacks, you can 
load the images asynchronously, which means that the website continues to load while 
the images are being loaded in the background.

Handling form submissions: When a user submits a form, it takes time to process the 
data and send it to the server. If the form submission was executed synchronously, the 
user would have to wait for the data to be processed and sent before the form can be 
submitted. With callbacks, you can handle the form submission asynchronously, which means 
that the user can continue to interact with the form while the data is being processed and 
sent in the background

*/
