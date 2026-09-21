# Node JS

## Basic

#### Q. Are you familiar with differences between Node.js nodules and ES6 nodules?

    The modules used in Node.js follow a module specification known as the CommonJS specification.
    ES6 module, we'd use the ES6 import functionality.
    Now ES6 modules are incompatible with Node.js modules. This has to do with the way modules are loaded differently between the two formats.If you use a compiler like Babel, you can mix and match module formats.

#### Q. Is Node.js entirely based on a single-thread?

    Node.js is often described as single-threaded, but this isn't entirely accurate. While the JavaScript code execution within Node.js operates on a single thread, Node.js leverages other threads behind the scenes to handle certain tasks.
    Node.js uses an event loop to manage asynchronous operations. The event loop itself runs on a single thread, which is responsible for executing JavaScript code and handling events. However, for I/O operations (like reading files or making network requests) and some CPU-intensive tasks, Node.js relies on a thread pool provided by libuv, its underlying library. This thread pool allows Node.js to perform these operations concurrently without blocking the main thread.
    Additionally, Node.js provides the worker_threads module, which enables developers to create and manage multiple threads explicitly. This can be useful for CPU-bound tasks that would otherwise block the main thread.
    In summary, while JavaScript code in Node.js executes on a single thread, Node.js is not entirely single-threaded. It uses a thread pool for I/O and some CPU-bound tasks, and it also allows the creation of worker threads for parallel processing.

#### Q. Explain some Error Handling approaches in Node.js you know about. Which one will you use?

#### Q. How would you scale Node application?

    - Cloning using Cluster module.
    - Decomposing the application into smaller services – i.e micro services.
    - Load Balancing.
    - Caching.
    - Using a reverse proxy.

#### Q. The time required to run the following code in Google Chrome is considerably more than the time required to run it in Node.js Explain why this is so, even though both use the v8 JavaScript Engine.

```js
{
  console.time("loop");
  for (var i = 0; i < 1000000; i += 1) {
    // Do nothing
  }
  console.timeEnd("loop");
}
```

    Within a web browser such as Chrome, declaring the variable i outside of any function’s scope makes it global and therefore binds it as a property of the window object. As a result, running this code in a web browser requires repeatedly resolving the property i within the heavily populated window namespace in each iteration of the for loop.

    In Node.js, however, declaring any variable outside of any function’s scope binds it only to the module’s own scope (not the window object) which therefore makes it much easier and faster to resolve.

#### Q. What are async functions in Node?

    Async functions are essentially a cleaner way to work with asynchronous code in JavaScript.

    Async/Await is:

    The newest way to write asynchronous code in JavaScript.
    It is non blocking (just like promises and callbacks).
    Async/Await was created to simplify the process of working with and writing chained promises.
    Async functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, the Promise will be resolved.
    Async functions can make use of the await expression. This will pause the async function and wait for the Promise to resolve prior to moving on.

#### Q. How do you convert an existing callback API to promises?

#### Q. What's the difference between dependencies, devDependencies and peerDependencies in npm package.json file?

    dependencies: These are the dependencies that are required for the application to run.
    devDependencies: These are the dependencies that are required for the development of the application.
    peerDependencies: These are the dependencies that are required for the application to run in a specific environment.

#### Q. How would you handle errors for async code in Node.js?

    Try-catch block.
    Error events.
    Error callbacks.

By using the attacher callbacks

```js
doWork()
  .then(doWork)
  .then(doOtherWork)
  .then((result) => doWork)
  .catch((error) => {
    throw error;
  })
  .then(verify);
```

Try-catch block

```js
async function check(req, res) {
  try {
    const a = await someOtherFunction();
    const b = await somethingElseFunction();
    res.send("result");
  } catch (error) {
    res.send(error.stack);
  }
}
```

#### Q. Config Setup

```env .env
ENVIRONMENT=production
```

```js config.js
const config = {
  production: {
    email: "test@prod.com",
  },
  development: {
    email: "test@dev.com",
  },
};

let env = process.env.ENVIRONMENT;

export {config: config[env] ?? config["development"]}
```

```js
import { config } from "./config.js";

// use config
console.log(config.email);
```

#### Q. What is NODE_ENV in Node ?

    In Node.js, NODE_ENV is an environment variable used to define the current environment in which the Node.js application is running. It plays a crucial role in configuring the behavior of the application based on different environments such as development, staging, and production.

https://www.geeksforgeeks.org/what-is-node_env-in-node-js/

#### Q. What are the timing features of Node.js?

    Timing features in Node.js allow you to schedule functions to run at a specific time or interval, measure the duration of code execution, and even handle errors and timeouts.

    * setTimeout: Schedules a function to run after a specified delay (in milliseconds).

    * setInterval: Schedules a function to run repeatedly at a specified interval (in milliseconds).

    * clearTimeout: Cancels a timeout previously set with setTimeout.

    * clearInterval: Cancels an interval previously set with setInterval.

    * setImmediate: Schedules a function to run at the end of the current event loop cycle.

    * process.nextTick: Schedules a function to run on the next iteration of the event loop.

    * performance.now: Returns the current high-resolution timestamp (in milliseconds).

    * Date.now: Returns the current timestamp (in milliseconds).

    * console.time: Starts a timer that can be used to measure the duration of a specific block of code.

    * console.timeEnd: Stops a timer previously started with console.time and logs the elapsed time to the console.

#### Q. How to gracefully Shutdown Node.js Server?

    We can gracefully shutdown Node.js server by using the generic signal called SIGTERM or SIGINT which is used for program termination. We need to call SIGTERM or SIGINT which will terminate the program and clean up the resources utilized by the program

```js
process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit();
});
```

#### Q. How can you listen on port 80 with Node?

    Run the application on any port and use reverse proxy.

    Reverse Proxy examples:
    * Nginx
    * Apache
    * HAProxy
    * Traefik
    * Caddy

https://www.geeksforgeeks.org/how-to-listen-on-port-80-with-node-js/

#### Q. What is the purpose of \_\_filename variable?

    The __filename variable serves the purpose of storing the absolute path of the current file being executed. This is useful for:
    Logging and debugging:
    The filename can be included in log messages to pinpoint the source of events or errors.
    File system operations:
    When working with files, the filename can be used to construct paths relative to the current file's location.
    Module identification:
    In modular systems, __filename helps identify the specific module that is currently running.
    The value of __filename will vary depending on how the code is executed. If the file is run directly, it will contain the full path to that file. If the file is imported as a module, it will contain the path to the module file

#### Q. Streams and Types?

    A stream is an abstract interface for working with streaming data in Node.js.

    ```js
    const stream = require('node:stream');
    ```

    There are four fundamental stream types within Node.js:

    Writable: streams to which data can be written (for example, fs.createWriteStream()).
    Readable: streams from which data can be read (for example, fs.createReadStream()).
    Duplex: streams that are both Readable and Writable (for example, net.Socket).
    Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).
    Additionally, this module includes the utility functions stream.duplexPair(), stream.pipeline(), stream.finished() stream.Readable.from(), and stream.addAbortSignal().

## Medium

#### Q. Name some of the events fired by streams.

    A stream is an abstract interface for working with streaming data in Node.js.

    Node.js streams, which are event emitters, fire several events to signal different stages of data flow. Some key events include data (when data is available), end (when all data has been consumed), close (when the stream and its underlying resources are closed), error (when an error occurs), and finish (when all data has been flushed).

    data:
    This event is emitted by readable streams when a new chunk of data is available to be read.

    end:
    Emitted by readable streams when there is no more data to be consumed from the stream, signifying the completion of data delivery.

    close:
    Emitted by both readable and writable streams when the stream and its underlying resources have been closed, indicating that no more events will be emitted.

    error:
    This event is emitted by both readable and writable streams when an error occurs during the stream's operation.

    finish:
    Emitted by writable streams when all data has been flushed to the underlying system.

    drain:
    Emitted by writable streams when the stream is able to receive more data after being full.

    pipe:
    Emitted by writable streams when a readable stream is piped into it.

    unpipe:
    Emitted by writable streams when a readable stream is unpiped from it.

    readable:
    Emitted by readable streams when there is data available to be read or when the stream has reached its end.

#### Q. What's a stub? Name a use case.

    A stub, in this context, means a mock implementation. Stubs provide canned answers to function calls made during test cases.

    That is, a simple, fake implementation that conforms to the interface and is to be used for testing.

    A use-case can be a file read, when you do not want to read an actual file:

```js
var fs = require("fs");

var readFileStub = sinon.stub(fs, "readFile", function (path, cb) {
  return cb(null, "filecontent");
});

expect(readFileStub).to.be.called;
readFileStub.restore();
```

#### Q. When to not use Node.js?

    Node.js is not suitable for applications requiring heavy CPU computation due to its single-threaded nature. When a long-running or computationally intensive task is executed, it blocks the event loop, preventing other requests from being processed until the task is completed. This can lead to performance degradation and unresponsiveness in applications that require real-time processing or handle numerous concurrent requests.


    Situations where Node.js is not recommended include:
    CPU-intensive applications:
    Tasks such as video encoding, image processing, complex calculations, or machine learning algorithms are not ideal for Node.js.

    High-performance computing:
    Applications that demand consistent low latency and high throughput, like real-time trading systems, may not be suitable due to potential garbage collection pauses and the single-threaded event loop.

    Large-scale enterprise applications:
    Applications requiring strict type safety, long-term maintainability, and robust scalability may benefit from other technologies like Java or .NET.

    Applications requiring true multi-threading:
    Node.js does not support multi-threading, limiting its ability to utilize multiple CPU cores effectively.

#### Q. How to solve "Process out of Memory Exception" in Node.js ?

    To solve the process out of memory exception in Node.js we need to increase the max-old-space-size. By default the max size of max-old-space-size is 512 mb which you can increase by the command:

    ```bash
    node --max-old-space-size=4096 index.js
    ```

#### Q. What is the difference between process.nextTick() and setImmediate() ?

    The difference between process.nextTick() and setImmediate() is that process.nextTick() defers the execution of an action till the next pass around the event loop or it simply calls the callback function once the ongoing execution of the event loop is finished whereas setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations.

#### Q. How do you convert an existing callback API to promises?

## Advanced Questions

#### Q. What is the relationship between Node.js and V8?

    V8 is the Javascript engine inside of node.js that parses and runs your Javascript. The same V8 engine is used inside of Chrome to run javascript in the Chrome browser. Google open-sourced the V8 engine and the builders of node.js used it to run Javascript in node.js.

#### Q. What is N-API in Node.js?

    N-API (pronounced N as in the letter, followed by API) is an API for building native Addons. It is independent from the underlying JavaScript runtime (ex V8) and is maintained as part of Node.js itself. This API will be Application Binary Interface (ABI) stable across versions of Node.js. It is intended to insulate Addons from changes in the underlying JavaScript engine and allow modules compiled for one version to run on later versions of Node.js without recompilation.

#### Q. Explain the concept of Domain in Node.js

#### Q. What is Node js 'VM' module

    The Node.js "vm" module enables the execution of JavaScript code within isolated contexts. This capability allows for several key use cases:

    Sandboxing:
    Running untrusted or dynamically generated code in a secure, isolated environment. This prevents the code from accessing or modifying the main application's scope, protecting against malicious or erroneous scripts.

    Plugin Systems:
    Creating plugin architectures where external code can be loaded and executed without affecting the core application. Each plugin runs in its own context, ensuring modularity and stability.

    Code Evaluation:
    Safely evaluating user-provided JavaScript expressions or scripts. This is useful in applications that require dynamic scripting capabilities, such as online editors or scripting platforms.

    Testing:
    Isolating test environments to ensure that tests do not interfere with each other or the main application. This allows for more reliable and predictable testing.

    Server-Side Templating:
    Implementing server-side templating engines where template code is executed within a specific context, providing control over data access and preventing security vulnerabilities.

    REPL (Read-Eval-Print Loop) Implementation:
    Building custom REPL environments with specific contexts and functionalities. This allows for interactive code execution and debugging.

    It is important to note that the "vm" module is not a security mechanism and should not be used to run completely untrusted code in production environments without additional security measures.

#### Q. What is Piping

    In Node.js, piping is a mechanism that transfers data from a readable stream to a writable stream. It essentially connects the output of one stream to the input of another, allowing for efficient and seamless data flow. The pipe() method is used to implement this functionality. It handles the reading from the source stream and writing to the destination stream automatically. Piping is commonly employed for tasks such as reading from a file and writing to another, handling HTTP requests and responses, and processing large data sets in chunks.

```js
const fs = require("fs");
const zlib = require("zlib");

// Compress a file using piping
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"))
  .on("finish", () => console.log("Compression complete"));

// Decompress a file using piping
fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"))
  .on("finish", () => console.log("Decompression complete"));

//In this example, the pipe() method is used to chain together the readable stream from fs.createReadStream() with the transform stream from zlib.createGzip() or zlib.createGunzip() and the writable stream from fs.createWriteStream(). This avoids the need to manually handle data chunks and simplifies the code.
```

#### Q. What is libuv?

#### Q. Could we run an external process with Node.js?

#### Q. What is POSIX?

#### Q. What is control flow function?

#### Q. What is V8 Templates

#### Q. How does libuv work under the hood?

#### Q. How V8 compiles JavaScript code?

#### Q. Why do we need C++ Addons in Node.js?

#### Q. How does the cluster module work? What’s the difference between it and a load balancer?

#### Q. How V8 compiles JavaScript code?

#### Q. What is the purpose of using hidden classes in V8?

#### Q. How the V8 engine works?

#### Q. Can Node.js work without V8?

#### Q. How many threads does Node actually create?

#### Q. Explain what is Reactor Pattern in Node.js?

#### Q. What is the difference between process.nextTick() and setImmediate() ?

    The difference between process.nextTick() and setImmediate() is that process.nextTick() defers the execution of an action till the next pass around the event loop or it simply calls the callback function once the ongoing execution of the event loop is finished whereas setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations.

#### Q. Why to use Buffers instead of binary strings to handle binary data ?

#### Q. Does Node.js support multi-core platforms? And is it capable of utilizing all the cores?

    Yes, Node.js supports multi-core platforms, but it's designed as a single-threaded runtime environment. To leverage multiple cores, you can use the cluster module to create multiple Node.js processes that share the same port, effectively distributing the workload.


    Single-Threaded Nature:
    Node.js is known for its single-threaded, event-driven architecture, which makes it efficient for I/O-bound operations but less ideal for CPU-intensive tasks on a single core.

    How Clustering Works:
    Each worker process in a cluster can handle a portion of the workload independently, sharing the same server port and allowing for better utilization of available CPU cores.


    Example:
    You can use the cluster module to create multiple instances of your Node.js application, each running on a separate core, and then distribute incoming requests among these instances, thereby increasing the overall throughput and scalability of your application.

    Other Approaches:
    Besides clustering, you can also leverage child processes or worker threads to perform CPU-intensive tasks in a separate thread, allowing the main event loop to remain responsive.

```js
var cluster = require("cluster");
var http = require("http");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", function (worker, code, signal) {
    console.log("worker " + worker.process.pid + " died");
  });
} else {
  // Workers can share any TCP connection
  // In this case its a HTTP server
  http
    .createServer(function (req, res) {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);
}
```

https://stackoverflow.com/questions/2387724/node-js-on-multi-core-machines

<br />

<br />

<br />

#### References

https://gist.github.com/paulfranco/9f88a2879b7b7d88de5d1921aef2093b
