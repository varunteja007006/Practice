# S O L I D Principals

SOLID principles are a set of guidelines for software engineering that help developers write
high-quality, maintainable, and scalable code. The principles are an acronym for five key design
principles:

### S

Single Responsibility Principle (SRP)
A class should handle single functionality and there should not be more than one reason for it to
change.

```js
// Class for making sandwiches
class SandwichMaker {
  makeSandwich() {
    return "Here is your sandwich!";
  }
}

// Class for making juice
class JuiceMaker {
  makeJuice() {
    return "Here is your juice!";
  }
}

// Using the classes
const sandwichMaker = new SandwichMaker();
const juiceMaker = new JuiceMaker();

console.log(sandwichMaker.makeSandwich()); // Output: Here is your sandwich!
console.log(juiceMaker.makeJuice()); // Output: Here is your juice!
```

#### Explanation (AI generated)

#### SandwichMaker Class:

This class has one job: to make sandwiches.
The makeSandwich method returns a message saying a sandwich is made.

#### JuiceMaker Class:

This class has one job: to make juice.
The makeJuice method returns a message saying juice is made.
Each class has a single responsibility, making it easier to understand, use, and maintain. If we need to change how sandwiches or juice are made, we only need to change the respective class without affecting the other.

### O

Open/Closed Principle (OCP)
Software entities should be open for extension but closed for modification

```js
// Base class for Shapes
class Shape {
  area() {
    throw new Error("This method should be overridden");
  }
}

// Class for Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Class for Circle
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Adding a new shape without modifying existing code
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }
}

// Function to calculate the area of any shape
function calculateArea(shape) {
  return shape.area();
}

// Using the classes
const rectangle = new Rectangle(10, 5);
const circle = new Circle(7);
const triangle = new Triangle(8, 6);

console.log(calculateArea(rectangle)); // Output: 50
console.log(calculateArea(circle)); // Output: 153.93804002589985
console.log(calculateArea(triangle)); // Output: 24
```

By following the Open/Closed Principle, we can easily extend our code to add new shapes without
modifying the existing classes

### L

Liskov Substitution Principle (LSP)
Objects of a superclass should be replaceable with objects of its subclasses without affecting the program's correctness

```js
// Base class for Animal
class Animal {
  makeSound() {
    throw new Error("This method should be overridden");
  }
}

// Class for Dog
class Dog extends Animal {
  makeSound() {
    return "Bark";
  }
}

// Class for Cat
class Cat extends Animal {
  makeSound() {
    return "Meow";
  }
}

// Function to make any animal sound
function playWithAnimal(animal) {
  console.log(animal.makeSound());
}

// Using the classes
const myDog = new Dog();
const myCat = new Cat();

playWithAnimal(myDog); // Output: Bark
playWithAnimal(myCat); // Output: Meow
```

By following the Liskov Substitution Principle, we can use any subclass (like Dog or Cat) in place
of the superclass (Animal) without affecting the program's correctness. This ensures that our code
is flexible and can handle different types of animals smoothly.

### I

Interface Segregation Principle
Avoid designing overly large interfaces that force clients to depend on methods they don't use

```js
// Interface for toys that can drive
class Drivable {
  drive() {
    throw new Error("This method should be implemented by subclasses");
  }

  honk() {
    throw new Error("This method should be implemented by subclasses");
  }
}

// Interface for toys that can perform actions
class Actionable {
  walk() {
    throw new Error("This method should be implemented by subclasses");
  }

  dance() {
    throw new Error("This method should be implemented by subclasses");
  }
}

// Class for Toy Car that implements Drivable interface
class ToyCar extends Drivable {
  drive() {
    return "Toy car is driving";
  }

  honk() {
    return "Toy car is honking";
  }
}

// Class for Toy Robot that implements Actionable interface
class ToyRobot extends Actionable {
  walk() {
    return "Toy robot is walking";
  }

  dance() {
    return "Toy robot is dancing";
  }
}

// Using the classes
const myToyCar = new ToyCar();
const myToyRobot = new ToyRobot();

console.log(myToyCar.drive()); // Output: Toy car is driving
console.log(myToyCar.honk()); // Output: Toy car is honking
console.log(myToyRobot.walk()); // Output: Toy robot is walking
console.log(myToyRobot.dance()); // Output: Toy robot is dancing
```

By following the Interface Segregation Principle, we ensure that our classes only need to implement
the methods that are relevant to them, making the code more modular, easier to understand, and
maintain.

### D

Dependency Inversion Principle
High-level modules should not depend on low-level modules, but both should depend on abstractions

```js
// Interface for TurnOn functionality
class TurnOnable {
  turnOn() {
    throw new Error("This method should be implemented by subclasses");
  }
}

// Class for Toy Car that implements TurnOnable interface
class ToyCar extends TurnOnable {
  turnOn() {
    return "Toy car is now on";
  }
}

// Class for Toy Robot that implements TurnOnable interface
class ToyRobot extends TurnOnable {
  turnOn() {
    return "Toy robot is now on";
  }
}

// High-level module: Remote Control
class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  pressButton() {
    return this.device.turnOn();
  }
}

// Using the classes
const myToyCar = new ToyCar();
const myToyRobot = new ToyRobot();

const carRemote = new RemoteControl(myToyCar);
const robotRemote = new RemoteControl(myToyRobot);

console.log(carRemote.pressButton()); // Output: Toy car is now on
console.log(robotRemote.pressButton()); // Output: Toy robot is now on
```

By following the Dependency Inversion Principle, the RemoteControl class does not need to know the
details of the ToyCar or ToyRobot classes. It only relies on the TurnOnable interface. This makes
the code more flexible and easier to extend, as you can add new devices without changing the
RemoteControl class.
