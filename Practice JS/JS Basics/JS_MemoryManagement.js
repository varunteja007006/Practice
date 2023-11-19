/*
    Memory Management in JavaScript
    Unlike low-level languages like C, JavaScript automatically allocates memory 
    when objects are created and frees it when not in use anymore (garbage collection). 

    C has memory-management techniques like malloc() and free().
*/

/*
    Memory Life Cycle: Irrespective of the programming language, the memory life cycle follows 
    the following stages:

    --> Allocates the memory we need: JavaScript allocates memory to the object created.
    --> Use the allocated memory.
    --> Release the memory when not in use: Once the allocated memory is released, 
        it is used for other purposes. It is handled by a JavaScript engine.

    Note: “Objects” in this context not only mean objects in JavaScript but also functions 
    and function scopes.
*/

/*
JavaScript engines have two places to store data: 

--> Stack: It is a data structure used to store static data. 
    Static data refers to data whose size is known by the engine during compile time. 
    In JavaScript, static data includes primitive values like strings, numbers, boolean, 
    null, and undefined. 
    References that point to objects and functions are also included. 
    A fixed amount of memory is allocated for static data. 
    This process is known as static memory allocation.

--> Heap: It is used to store objects and functions in JavaScript. 
    The engine doesn’t allocate a fixed amount of memory. 
    Instead, it allocates more space as required.
    
*/

const employee = {
  name: "Rajesh",
  age: 30,
};

const name = "Ram";
// Allocates memory for object in heap.Values
// in object are primitive,which is why they
// are stored in a stack.

function getname(name) {
  return name;
}
// The function return value is given to stack after
// being evaluated in the heap

const newEmployee = employee;
// The newEmployee object will be stored in the stack and
// it will refer to the employee object in heap

/*
    Explanation: In the above example object ’employee’ is created in the heap and a 
    reference to it in the stack.

    Garbage Collection: Garbage collectors are used in releasing memory. 
    Once the engine recognizes that a variable, object, or function is not needed anymore, 
    it releases the memory it occupied. 
    The main issue here is that it is very difficult to predict accurately whether a 
    particular variable, object, or function is needed anymore or not. 
    
    Some algorithms help to find the moment when they become obsolete with great precision.
*/

/*
    Reference-counting garbage collection: 
    It frees the memory allocated to the objects that have no references pointing to them. 
    However, the problem with this algorithm is that it doesn’t understand cyclic references.
*/
let game = {
  name: "cricket",
};

let boy = {
  name: "Ram",
};

game.boy = boy;
boy.game = game;

boy = null;
game = null;

/*
    Explanation: In this example, the game and boy both reference each other. 
    Thus, the algorithm won’t release the allocated memory. Setting them to null won’t 
    make the algorithm realize that they can’t be used anymore, leading to no 
    release of allocated memory.
*/

/*
    Mark-and-sweep algorithm: This algorithm solves the above-mentioned issue. 
    Instead of finding references to a particular object, it detects if they are 
    reachable from the root object.

    Note: In JavaScript root is the window object while in NodeJS it is the global object.

    The algorithm marks objects that are not reachable as garbage and collects (sweeps) them. 
    Thus, it is known as Mark and Sweep algorithm. 

    In the previous example, neither the game nor the boy object can be accessed from the root object. 
    Thus, it is marked as garbage and collected afterwards.
*/
