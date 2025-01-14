import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("demo", (a, b) => console.log("add result: ", a + b));

emitter.on("demo", (a, b) => console.log("multiply result: ", a * b));

emitter.emit("demo", 1, 2);
