/*
    What are the class compositions in JavaScript ?
    Composition helps in creating large & complex functions by combining small functions. 

    For example, you can build a wall with the help of small bricks. The example of brick 
    may be treated as a function, and composition is all about how we are combining those 
    bricks to make a wall. The Class composition provides us with an easy way of composing, 
    including the benefits of composition with Object-Oriented Programming.

    You can compose classes and objects. A class may be considered as a “blueprint” for an
    object, which is an entity that has relevant functions and data (methods and state). 
    It can be used to create many objects depending on the need.

    Properties will be added to objects without using inheritance by using the mixin concept. 
    Different objects’ properties are mixed into a single object, so the object has all the 
    object’s properties and methods. In other words, a mixin is a way that gives methods that 
    implement a certain behavior. It is used to add the behavior of other classes.

*/

/*
    Note: The mixin technique defines some part of behavior, which consists of a factory 
    function that takes a superclass as its argument and returns the respective subclass.
*/

// Create a mixin class that takes some superclass and extends it.
const MixFood = (superclass) =>
  // This mixin class has methods 'eating()' & 'excrete()'
  class extends superclass {
    eating(food) {
      console.log(`Eating ${food}`);
    }

    excrete() {
      console.log("Going to excrete");
    }
  };

// This is a human class with constructor and method 'getName()'
class Human {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

/*
    This is a 'child' class that extends 'Human' class 
    by passing it as a argument for mixin class 'MixFood'

    Therefore the 'MixFood' class will extend 'Human' class. 

    Because the 'Child' class extends 'MixFood' it will also get the properties and methods from
    'MixFood' and 'Human' class
*/
class Child extends MixFood(Human) {
  cry() {
    console.log("Woff woff!");
  }

  lunch(food) {
    // this method extends the methods from 'MixFood' class
    this.eating(food);
    this.excrete();
  }
}

// let us create an object for 'Child' class
const jack = new Child("jack");
jack.lunch("biscuits");
jack.getName();
jack.cry();
