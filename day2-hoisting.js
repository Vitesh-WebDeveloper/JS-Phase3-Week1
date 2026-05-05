// ===============================
// Day 2: Hoisting
// ===============================

// Example 1: Function declaration hoisting
showNickName();

function showNickName() {
  console.log("Chintu");
}

// Function declarations are fully hoisted, so we can call them before declaration.


// Example 2: var hoisting
console.log(a); // undefined

var a = 10;

// var is hoisted and initialized with undefined.


// Example 3: var inside function
function showVarHoisting() {
  console.log(greeting); // undefined

  var greeting = "Hello";

  console.log(greeting); // Hello
}

showVarHoisting();

// var is hoisted inside its function scope and initialized with undefined.


// Example 4: let before declaration
// console.log(x);
// let x = 5;

// Error: Cannot access x before initialization.
// let is hoisted, but stays in Temporal Dead Zone until declaration.


// Example 5: const before declaration
// console.log(y);
// const y = 100;

// Error: Cannot access y before initialization.
// const is hoisted, but stays in Temporal Dead Zone until declaration.


// Example 6: Arrow function before declaration
// sayHi();

// const sayHi = () => {
//   console.log("Hi");
// };

// Error: Arrow function stored in const cannot be called before initialization.