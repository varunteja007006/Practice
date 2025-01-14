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
      // if event exists then remove the callback
      this.event.get(event) = this.event.get(event).filter(
        (cb) => cb !== callback
      );
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

emitter.on("demo", (a, b) => console.log('add result',a + b));
emitter.on("demo", (a, b) => console.log('multiply result',a * b));

emitter.emit("demo", 1, 2);