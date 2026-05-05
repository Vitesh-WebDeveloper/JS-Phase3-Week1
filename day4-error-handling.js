// ===============================
// Day 4: Error Handling
// ===============================

// Example 1: Divide numbers safely
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }

    return a / b;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Division check finished");
  }
}

console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // Cannot divide by zero


// Example 2: Username validation
function validateUsername(username) {
  try {
    const cleanUsername = username.trim();

    if (cleanUsername === "") {
      throw new Error("Username cannot be empty");
    }

    if (cleanUsername.length < 3) {
      throw new Error("Username is too short");
    }

    return "Valid username";
  } catch (error) {
    return error.message;
  } finally {
    console.log("Username validation finished");
  }
}

console.log(validateUsername(""));
console.log(validateUsername("ab"));
console.log(validateUsername("coding"));


// Example 3: Age validation
function checkAge(age) {
  try {
    if (typeof age !== "number") {
      throw new Error("Age must be a number");
    }

    if (age < 18) {
      throw new Error("Not eligible");
    }

    return "Eligible";
  } catch (error) {
    return error.message;
  } finally {
    console.log("Age validation finished");
  }
}

console.log(checkAge("jj"));
console.log(checkAge(17));
console.log(checkAge(18));