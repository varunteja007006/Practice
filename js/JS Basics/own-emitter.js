// Implement your own event emitter class

class EventEmitter {
  constructor() {
    this.event = new Map();
  }

  on(event, callback) {
    if (this.event.has(event)) {
      // if event exists then push the callback
      this.event.get(event).push(callback);
    } else {
      // if no event then create a new event and add callback
      this.event.set(event, [callback]);
    }
  }

  off(event, callback) {
    if (this.event.has(event)) {
      let callbacks = this.event.get(event);
      // if event exists then remove the callback
      callbacks = callbacks.filter((cb) => cb !== callback);
      if (callbacks.length === 0) {
        this.event.delete(event);
      } else {
        this.event.set(event, callbacks);
      }
    } else {
      throw new Error("Event does not exist");
    }
  }

  emit(event, ...args) {
    if (this.event.has(event)) {
      // if event exists then execute the callback with the provided arguments
      this.event.get(event).forEach((callback) => callback(...args));
    } else {
      throw new Error("Event does not exist");
    }
  }
}

const emitter = new EventEmitter();

function addNumbers(a, b) {
  console.log("add result", a + b);
}

emitter.on("demo", addNumbers); // add add numbers
emitter.on("demo", (a, b) => console.log("multiply result", a * b)); // add multiply function
emitter.emit("demo", 1, 2); // this prints both outputs

// emitter.off("demo1", (a, b) => console.log("multiply result", a * b)); // throws an error

emitter.off("demo", addNumbers); // this gets deleted

emitter.emit("demo", 10, 2); // this prints only multiply output
