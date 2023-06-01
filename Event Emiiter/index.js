const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//Initializing Objects
const myEmitter = new MyEmitter();

//adding listener to the event

myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("log", "Log event Emitted");
}, 2000);
