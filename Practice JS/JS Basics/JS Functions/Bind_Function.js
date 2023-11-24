/*
    We use the Bind() method to call a function with this value, this keyword refers to the 
    same object which is currently selected. In other words, the bind() method allows us to 
    easily set which object will be bound by 'this' keyword when a function or method is invoked. 

    The need for bind usually occurs, when we use 'this' keyword in a method and we call that 
    method from a receiver object, then sometimes 'this' is not bound to the object that we expect 
    to be bound to. This results in errors in our program
*/

let geeks = {
  name: "ABC",
  printFunc: function () {
    console.log(this.name);
  },
};
geeks.printFunc();
// output: ABC

// but if we assign the last statement to a object
let printFunc2 = geeks.printFunc;
printFunc2();
//no output is produced by this code//

// To fix this we need to use bind
let printFunc3 = geeks.printFunc.bind(geeks);
//using bind()
// bind() takes the object "geeks" as parameter//
printFunc3();
// Output : ABC

/*
    The bind() method creates a new function where this keyword refers to the parameter in the 
    parenthesis in the above case geeks. This way the bind() method enables calling a function 
    with a specified this value. 
*/
//object geeks1
let geeks1 = {
  name: "ABC",
  article: "C++",
};
//object geeks2
let geeks2 = {
  name: "CDE",
  article: "JAVA",
};

//object geeks3
let geeks3 = {
  name: "IJK",
  article: "C#",
};

function printVal() {
  console.log(this.name + " contributes about " + this.article + "<br>");
}

let printFunc4 = printVal.bind(geeks1);
//using bind()
// bind() takes the object "geeks1" as parameter//
printFunc4();

let printFunc5 = printVal.bind(geeks2);
printFunc5();

let printFunc6 = printVal.bind(geeks3);
printFunc6();
//uniquely defines each objects

// Output
// ABC contributes about C++
// CDE contributes about JAVA
// IJK contributes about C#
