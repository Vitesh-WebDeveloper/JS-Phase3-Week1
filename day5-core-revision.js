/*
Part 1 — Scope Programs
Program 1: Global + Function Scope
Create:
one global variable
one function
print global variable inside function
Also create one function variable and try to use it outside using comment.
Expected learning:
global variable can be accessed inside function
function variable cannot be accessed outside function
*/
// 1st solution
var a = 10;
function num() {
    console.log(a);
    var b = 20;
}
num();
// console.log(b); (gives an error becaz we cannot access the function scope variable outside the scope)

/*
Program 2: Block Scope
Create an if block using:
var
let
const
Show:
var works outside block
let and const do not work outside block
*/
// 2nd solution
if (true) {
    var Herbivores = "Only plantsEaters";
    let Carnivores = "Only fleshEaters";
    const Omnivores = "Both plants and flesh Eaters";
}
console.log(Herbivores); // It works successfully becaz it is 
// console.log(Carnivores);  Does'nt works becaz let is block scoped elements
// console.log(Omnivores);  Does'nt works becaz const is block scoped elements

/*
Part 2 — Hoisting Programs
Program 3: Function Hoisting
Call a normal function before declaration.
Example idea:
sayHello();
function sayHello() {
  console.log("Hello Vitesh");
}
*/
//3rd solution
greet(); // it gives the output becaz entire function is stored in memory so we can call the function even before initiation. 
function greet() {
    console.log("hello");
}

/*
Program 4: var, let, const Hoisting
Write 3 examples:
var before declaration → undefined
let before declaration → error
const before declaration → error
Important: keep error examples commented after testing, otherwise the file will stop.
*/
/* console.log(v); //gives as undefined becaz of it is var (var is hoisted but initialized as undefined).
var v = 10;

 console.log(l); // it gives reference error becaz let is hoisted but declaration is not done.
let l = 10;

console.log(c); // it gives reference error becaz const is hoisted but declaration is not done.
const c = 10; */

/*
Part 3 — Closure Programs
Program 5: Counter Closure
Create a function:
makeCounter()
It should remember count and increase each time.
Expected output:
1
2
3
*/
function makeCounter() {
    let count = 0;
    return function(){
        count ++;
        console.log(count);
    }
}
let counter = makeCounter();
counter();
counter();
counter();
counter();

/*
Program 6: Secret Message Closure
Create a function:
secretMessage(message)
It should return another function that prints the message.
*/
function secretMessage(message){
    console.log("The secret message down of this message");
    return function(){
        console.log(message);
    }
}
let secret = secretMessage('i will get a job without degree')
secret()

/*
Part 4 — Error Handling Programs
Program 7: Safe Login
Create function:
login(username, password)
Rules:
username empty → throw error
password length less than 6 → throw error
otherwise print Login successful
Use:
try
catch
finally
throw new Error()
*/

function login(username, password) {
  try {
    if (username.trim() === "") {
      throw new Error("Username should not be empty");
    }

    if (password.toString().length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    return "Login successful!";
  } catch (error) {
    return error.message;
  } finally {
    console.log("Login check finished");
  }
}

console.log(login("Vitesh", "lites5"));
console.log(login("", "lites5"));
console.log(login("Vitesh", "123"));

/* Program 8: Product Price Validation
 Create function:
 checkPrice(price)
 Rules:
 if price is not number → throw error
 if price is less than or equal to 0 → throw error
 otherwise print Valid price
*/
function checkPrice(price) {
  try {
    if (typeof price !== "number") {
      throw new Error("Price must be a number");
    }

    if (price <= 0) {
      throw new Error("Price must be greater than 0");
    }

    return `Valid price: ${price}rs`;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Price check finished");
  }
}
console.log(checkPrice(1));
console.log(checkPrice("100"));
console.log(checkPrice(0));

/*DSA 1 — Sum of Array
Input:
let nums = [10, 20, 30, 40];
Output:
100
*/
let nums = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
   sum = sum + nums[i];
}
console.log(sum); // 100

/* 
DSA 2 — Find Largest Number 
Input: let nums = [4, 9, 2, 15, 6]; 
Output: 15 
*/
let numbers = [4, 9, 2, 15, 6];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest); // 15

/* 
DSA 3 — Count Vowels in String 
Input: let word = "javascript"; 
Output: 3 Vowels are: a, e, i, o, u
*/
let word = "javascript";
let vowels = "aeiou";
let count = 0;
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    count++;
  }
}
console.log(count); // 3