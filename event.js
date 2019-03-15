const EventEmitter = require("events").EventEmitter;

// const Counter = function(i) {
//   this.increment = function() {
//     i++;
//     this.emit("incremented", i);
//   };
// };

// Counter.prototype = new EventEmitter();

// const counter = new Counter(10);

// const callback = function(n) {
//   console.log(n);
// };

// counter.addListener("incremented", callback);
// counter.increment(); // 11
// counter.increment(); // 12

// ==================== with ES6 ====================

class Counter extends EventEmitter {
  constructor(i) {
    super();
    this.i = i;
  }
  increment() {
    this.i++;
    this.emit("incremented", this.i);
  }
}

// declare the cb as a variable for it to be referenced, rather than anfn as fn param
const incrementCb = data => {
  console.log(`Index is now ${data}`);
};

const c1 = new Counter(20);
c1.addListener("incremented", incrementCb);
c1.increment();
c1.increment();
c1.increment();
c1.removeListener("incremented", incrementCb);
// will not console anything
c1.increment();
