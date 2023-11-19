/*
    How do you debug JS code?
    You can use the Web browser debugging console (F12) key or Ctrl + Shift + I. 
    It mainly used to log information associated with a web page like, network requests, 
    JavaScript, security errors, warnings, CSS, etc. It enables us to interact with a web page 
    by executing JavaScript expressions in the contents of the page.

    In the code you could use a console object.
    JavaScript Console Methods: The console object provides us with several different methods.
    -> JS console.log() Method
    -> JS console.error() Method
    -> JS console.warn() Method
    -> JS console.clear() Method
    -> JS console.time() and console.timeEnd() Method
    -> JS console.table() Method
    -> JS console.count() Method
    -> JS console.group() and console.groupEnd() Method
    -> JS Custom console logs
*/

/*
    JavaScript console.log() Method: It is used to log(print) the output to the console. 
    We can put any type inside the log(), be it a string, array, object, boolean etc.
*/
// console.log() method
console.log("abc"); // abc
console.log(1); // 1
console.log(true); // true
console.log(null); // null
console.log(undefined); // undefined
console.log([1, 2, 3, 4]); // array inside log    // (4)[1, 2, 3, 4]
console.log({ a: 1, b: 2, c: 3 }); // object inside log   // {a: 1, b: 2, c: 3}

/*
    JavaScript console.error() Method: This method is used to log an error message to the console. 
    Useful in testing of code. By default the error message will be highlighted with red color.
*/
// console.error() method
console.error("This is a simple error");

/*
    JavaScript console.warn() Method: Used to log warning message to the console. 
    By default, the warning message will be highlighted with yellow color.
*/
// console.warn() method
console.warn("This is a warning.");

/*
    JavaScript console.clear() Method: Used to clear the console. 
    The console will be cleared, in case of Chrome a simple overlayed text will be printed like :
    ‘Console was cleared’ while in Firefox no message is returned.
*/
// console.clear() method
console.clear();

/*
    JavaScript console.time() and console.timeEnd() Method: Whenever we want to know the amount 
    of time spend by a block or a function, we can make use of the time() and timeEnd() methods 
    provided by the JavaScript console object. 
    They take a label which must be same, and the code inside can be anything( function,
    object, simple console).
*/

// console.time() and console.timeEnd() method
console.time("abc");
let fun = function () {
  console.log("fun is running");
};
let fun2 = function () {
  console.log("fun2 is running..");
};
fun(); // calling fun();
fun2(); // calling fun2();
console.timeEnd("abc");

/*
    JavaScript console.table() Method: This method allows us to generate a table inside a console. 
    The input must be an array or an object which will be shown as a table.
*/
// console.table() method
console.table({ a: 1, b: 2 });

/*
    JavaScript console.count() Method: This method is used to count the number 
    that the function hit by this counting method.
*/
// console.count() method
for (let i = 0; i < 5; i++) {
  console.count(i);
}

/*
    JavaScript console.group() and console.groupEnd() Method: JavaScript group() and groupEnd() 
    methods of the console object allows us to group contents in a separate block, which will be 
    indented.
    
    Just like the time() and the timeEnd() they also accepts label, again of same value.

*/
// console.group() and console.groupEnd() method
console.group("Section 1");
console.warn("warning!");
console.error("error here");
console.log("vivi vini vici");
console.groupEnd("simple");
console.log("Section 2");

/*
    JavaScript Custom Console Logs: User can add Styling to the console logs in order 
    to make logs Custom . The Syntax for it is to add the CSS styling as a parameter to the 
    logs which will replace %c in the logs as shown in the example below .
*/
// Custom Console log example
const spacing = "10px";
const styles = `padding: ${spacing}; background-color: white; color: green; font-style: 
	italic; border: 1px solid black; font-size: 2em;`;
console.log("%cGeeks for Geeks", styles);
