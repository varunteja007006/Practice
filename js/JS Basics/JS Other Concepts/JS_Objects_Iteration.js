/*
Object constructors are a powerful way to create and manage objects in JavaScript. 
You can use them to create objects of any type, and you can customize the initialization process 
for each type of object.
*/

// Declaring a courses object
const courses = {
  firstCourse: "C++ STL",
  secondCourse: "DSA Self Paced",
  thirdCourse: "CS Core Subjects",
};

// Creating a new empty object with
// prototype set to courses object
const student1 = Object.create(courses);

// Defining student1 properties and methods
student1.id = 123;
student1.firstName = "Prakhar";
student1.showEnrolledCourses = function () {
  console.log(courses);
};

// Iterating over all properties of
// student1 object
for (let prop in student1) {
  console.log(prop + " -> " + student1[prop]);
}
// Iterating over only those properties
// of student 1 object which is not on
// its prototype chain
for (let prop in student1) {
  if (student1.hasOwnProperty(prop)) {
    console.log(prop + " -> " + student1[prop]);
  }
}
