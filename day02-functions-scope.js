// ============================================
// DAY 2: 15 FUNCTIONS & SCOPE EXAMPLES
// ============================================

// EXAMPLE 1: Function Declaration vs Expression vs Arrow
console.log("=== EXAMPLE 1: Function Types ===");

// Declaration - hoisted, can call before definition
console.log(add1(5, 3)); // works

function add1(a, b) {
  return a + b;
}

// Expression - not hoisted
// console.log(add2(5, 3)); // ReferenceError
const add2 = function(a, b) {
  return a + b;
};

// Arrow function - concise
const add3 = (a, b) => a + b;

console.log(add2(5, 3)); // 8
console.log(add3(5, 3)); // 8

// EXAMPLE 2: Arrow Function Variations
console.log("\n=== EXAMPLE 2: Arrow Function Syntax ===");

const noParams = () => "No parameters";
const oneParam = x => x * 2; // parens optional for 1 param
const twoParams = (x, y) => x + y;
const multiLine = (x, y) => {
  const sum = x + y;
  return sum * 2;
};
const returnObject = (name, age) => ({ name, age }); // wrap object in ()

console.log(noParams());           // "No parameters"
console.log(oneParam(5));          // 10
console.log(twoParams(3, 4));      // 7
console.log(multiLine(3, 4));      // 14
console.log(returnObject("Alice", 25)); // { name: "Alice", age: 25 }

// EXAMPLE 3: Closures - Counter
console.log("\n=== EXAMPLE 3: Closure Counter ===");

function createCounter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// EXAMPLE 4: Closures - Private Variables
console.log("\n=== EXAMPLE 4: Private Variables ===");

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return `Deposited $${amount}. New balance: $${balance}`;
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return `Withdrew $${amount}. New balance: $${balance}`;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50));   // Deposited $50. New balance: $150
console.log(account.withdraw(30));  // Withdrew $30. New balance: $120
console.log(account.getBalance());  // 120
// console.log(account.balance);    // undefined (private!)

// EXAMPLE 5: Higher-Order Functions - Array Map Implementation
console.log("\n=== EXAMPLE 5: Custom Map Function ===");

function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const squared = myMap(numbers, n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

// EXAMPLE 6: Higher-Order Functions - Array Filter Implementation
console.log("\n=== EXAMPLE 6: Custom Filter Function ===");

function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = myFilter(nums, n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// EXAMPLE 7: Function Composition
console.log("\n=== EXAMPLE 7: Function Composition ===");

const addFive = x => x + 5;
const multiplyByTwo = x => x * 2;
const square = x => x * x;

// Manual composition
const result1 = square(multiplyByTwo(addFive(3))); // (3 + 5) * 2 = 16, 16^2 = 256
console.log(result1);

// Compose function
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const calculate = compose(square, multiplyByTwo, addFive);
console.log(calculate(3)); // 256

// EXAMPLE 8: Currying
console.log("\n=== EXAMPLE 8: Currying ===");

// Regular function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Arrow function currying
const curriedAddArrow = a => b => c => a + b + c;

console.log(add(1, 2, 3));              // 6
console.log(curriedAdd(1)(2)(3));       // 6
console.log(curriedAddArrow(1)(2)(3));  // 6

// Partial application
const addOne = curriedAddArrow(1);
const addOneAndTwo = addOne(2);
console.log(addOneAndTwo(3)); // 6

// EXAMPLE 9: Immediately Invoked Function Expression (IIFE)
console.log("\n=== EXAMPLE 9: IIFE ===");

(function() {
  const privateVar = "I'm private";
  console.log("IIFE executed!");
  console.log(privateVar);
})();

// Arrow IIFE
(() => {
  const secret = "Arrow IIFE";
  console.log(secret);
})();

// IIFE with parameters
((name) => {
  console.log(`Hello, ${name}!`);
})("World");

// EXAMPLE 10: Callback Functions
console.log("\n=== EXAMPLE 10: Callbacks ===");

function fetchData(callback) {
  // Simulating async operation
  setTimeout(() => {
    const data = { id: 1, name: "John" };
    callback(data);
  }, 100);
}

fetchData((data) => {
  console.log("Data received:", data);
});

// Multiple callbacks
function processData(data, onSuccess, onError) {
  if (data) {
    onSuccess(data);
  } else {
    onError("No data provided");
  }
}

processData(
  { value: 42 },
  (data) => console.log("Success:", data),
  (error) => console.log("Error:", error)
);

// EXAMPLE 11: Function Returning Function
console.log("\n=== EXAMPLE 11: Function Factories ===");

function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));     // 10
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20

// Greeting factory
function createGreeter(greeting) {
  return (name) => `${greeting}, ${name}!`;
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
console.log(sayHello("Alice")); // Hello, Alice!
console.log(sayHi("Bob"));      // Hi, Bob!

// EXAMPLE 12: Memoization (Caching)
console.log("\n=== EXAMPLE 12: Memoization ===");

function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log("Returning from cache");
      return cache[key];
    }
    
    console.log("Calculating...");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slowSquare = memoize((n) => {
  // Simulate slow operation
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result = n * n;
  }
  return result;
});

console.log(slowSquare(5));  // Calculating... 25
console.log(slowSquare(5));  // Returning from cache 25

// EXAMPLE 13: Recursive Functions
console.log("\n=== EXAMPLE 13: Recursion ===");

// Factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13

// Countdown
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);

// EXAMPLE 14: Array Method Chaining
console.log("\n=== EXAMPLE 14: Method Chaining ===");

const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true },
  { name: "David", age: 28, active: true }
];

const activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name)
  .sort();

console.log(activeUserNames); // ["Alice", "Charlie", "David"]

const totalAge = users
  .filter(user => user.active)
  .reduce((sum, user) => sum + user.age, 0);

console.log("Total age of active users:", totalAge); // 88

// EXAMPLE 15: Practical Function - Data Validator
console.log("\n=== EXAMPLE 15: Data Validator ===");

function createValidator(rules) {
  return function(data) {
    const errors = [];
    
    for (const [field, rule] of Object.entries(rules)) {
      if (rule.required && !data[field]) {
        errors.push(`${field} is required`);
      }
      
      if (rule.minLength && data[field]?.length < rule.minLength) {
        errors.push(`${field} must be at least ${rule.minLength} characters`);
      }
      
      if (rule.pattern && !rule.pattern.test(data[field])) {
        errors.push(`${field} format is invalid`);
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  };
}

const validateUser = createValidator({
  username: { required: true, minLength: 3 },
  email: { 
    required: true, 
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
  },
  password: { required: true, minLength: 8 }
});

const validUser = validateUser({
  username: "john_doe",
  email: "john@example.com",
  password: "secret123"
});

const invalidUser = validateUser({
  username: "jo",
  email: "invalid-email",
  password: "123"
});

console.log("Valid user:", validUser);
console.log("Invalid user:", invalidUser);

console.log("\n=== DAY 2 COMPLETE ===");
console.log("You've mastered:");
console.log("✓ Function declarations, expressions, and arrows");
console.log("✓ Closures and private variables");
console.log("✓ Higher-order functions");
console.log("✓ Currying and composition");
console.log("✓ IIFEs and callbacks");
console.log("✓ Memoization and recursion");