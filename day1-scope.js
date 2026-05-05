// ===============================
// Day 1: Scope
// ===============================

// Task A: Global variable used inside a function
const userName = "Vitesh";

function showName() {
  console.log(userName);
}

showName(); // Vitesh

// A global variable can be accessed inside a function.


// Task B: Function scope
function showPlanet() {
  const planet = "Earth";
  console.log(planet);
}

showPlanet(); // Earth

// console.log(planet);
// Error: planet is declared inside the function, so it cannot be accessed outside.


// Task C: Block scope with let and var
if (true) {
  const fruit = "Mango";
  var vegetable = "Potato";

  console.log(fruit); // Mango
  console.log(vegetable); // Potato
}

console.log(vegetable); // Potato

// console.log(fruit);
// Error: fruit is block-scoped.


// Task D: var vs let inside block
if (true) {
  var elderBrother = "Elder";
  let youngerBrother = "Younger";
}

console.log(elderBrother); // Elder

// console.log(youngerBrother);
// Error: let is block-scoped.


// Mini Challenge
const message = "I am global";

function first() {
  const insideFirst = "I am inside first";

  console.log(message);
  console.log(insideFirst);
}

first();

// console.log(insideFirst);
// Error: insideFirst is function-scoped.