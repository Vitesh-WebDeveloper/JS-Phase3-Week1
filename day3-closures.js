// ===============================
// Day 3: Closures
// ===============================

// Task 1: Inner function using outer variable
function outer() {
  const name = "Vitesh";

  function inner() {
    console.log(name);
  }

  inner();
}

outer(); // Vitesh

// Inner function can access variables from the outer function.


// Task 2: Counter closure
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = makeCounter();

counter1(); // 1
counter1(); // 2
counter1(); // 3

// The returned function remembers count even after makeCounter() is finished.


// Task 3: Greeting function returning another function
function createGreeting(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const greetVitesh = createGreeting("Vitesh");
greetVitesh(); // Hello Vitesh

// The returned function remembers the name variable.


// Task 4: Two separate counters
const counterA = makeCounter();
const counterB = makeCounter();

counterA(); // 1
counterA(); // 2

counterB(); // 1
counterB(); // 2

// Each closure has its own separate memory.


// Task 5: Secret message closure
function secretMessage(message) {
  return function () {
    console.log(message);
  };
}

const showSecret = secretMessage("I will get a job without a degree for sure");
showSecret();

// Closure means inner function remembers outer function variables.