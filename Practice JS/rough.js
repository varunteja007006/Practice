// Outer function
function outer() {
  let arr = [];
  let i;

  for (i = 0; i < 4; i++) {
    // storing anonymous function
    arr[i] = function () {
      return i;
    };
  }

  // returning the array.
  return arr;
}

let get_arr = outer();

console.log(get_arr[0]()); // output: 4
console.log(get_arr[1]()); // output: 4
console.log(get_arr[2]()); // output: 4
console.log(get_arr[3]()); // output: 4
/*
  In the above code, we have created four closures that point to the variable 
  i which is the local variable to the function outer. Closure doesn’t remember 
  the value of the variable it only points to the variable or stores the reference 
  of the variable and hence, returns the current value. In the above code when we 
  try to update the value it gets reflected all because the closure stores the reference. 
  */
/*
  * more explanation of the above
  
  The code defines a function called outer() that creates an array of four anonymous 
  functions and returns the array. When you call get_arr[0](), you're essentially calling 
  the first function in the array. However, the value of i within each anonymous function 
  is captured at the time the function is created, not when it's called.
  
  Imagine you're baking four cookies. Each cookie represents an anonymous function. 
  When you put the cookies in the oven, the temperature is 350 degrees Fahrenheit. 
  Even though you take the cookies out of the oven at different times, they all cook 
  at the same temperature because the temperature was captured when they were first put in.
  
  Similarly, the value of i is captured when each anonymous function is created, 
  not when it's called. In the provided code, the value of i is 4 when the anonymous 
  functions are created, so calling any of the functions in the array will always 
  return 4.
  
  To illustrate this further, let's break down the code step by step:
  
  1. The outer() function initializes an empty array called arr and a variable i set to 0.
  
  2. The for loop iterates from 0 to 3, creating an anonymous function for each iteration. 
  Each anonymous function returns the value of i at that moment.
  
  3. The arr[i] assignment stores the anonymous function in the corresponding index of the arr array.
  
  4. The return arr statement returns the entire array of anonymous functions.
  
  5. The let get_arr = outer() statement assigns the returned array to the variable get_arr.
  
  6. The console.log(get_arr[0]()) statement calls the first anonymous function stored in the 
  get_arr array.
  
  Since the value of i was captured as 4 when the first anonymous function was created, 
  calling it will always return 4, regardless of when it's actually called.
  
  */

/*
  * The right way to avoid the above issue
  Let’s see the correct way to write the above code so as to get different values of i 
  at different indexes. 
  */

// // Outer function
// function outer_1() {
//   function create_Closure(val) {
//     return function () {
//       return val;
//     };
//   }
//   let arr = [];
//   let i;
//   for (i = 0; i < 4; i++) {
//     arr[i] = create_Closure(i);
//   }
//   return arr;
// }
// let get_arr_1 = outer_1();
// console.log(get_arr_1[0]()); // output: 1
// console.log(get_arr_1[1]()); // output: 2
// console.log(get_arr_1[2]()); // output: 3
// console.log(get_arr_1[3]()); // output: 4
/*
  In the above code we are updating the argument of the function create_Closure with every 
  call. Hence, we get different values of i at different indexes.
  */

/*
  Here's why the output is as expected:
  
  1. When the outer_1() function creates the closures, it captures the value of i for each closure.
  
  2. Since i is incremented within the for loop, each closure captures a different value of i.
  
  3. When you call the functions stored in the get_arr_1 array, you are essentially calling the 
  captured function inside the closure.
  
  4. The captured function returns the value of i that was captured when it was created.
  
  Therefore, each function stored in the get_arr_1 array returns the value of i that was captured when it was created, resulting in the output:
  */
