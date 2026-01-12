// ============================================
// DAY 1: 20 JAVASCRIPT CORE SNIPPETS
// ============================================

// SNIPPET 1: Variable Scoping & Hoisting
console.log("=== SNIPPET 1: Variable Scoping ===");
function scopeTest() {
  console.log(x); // undefined (hoisted)
  // console.log(y); // ReferenceError (temporal dead zone)
  
  var x = 10;
  let y = 20;
  const z = 30;
  
  if (true) {
    var x = 100; // same variable (function scoped)
    let y = 200; // different variable (block scoped)
    console.log(x, y); // 100, 200
  }
  
  console.log(x, y, z); // 100, 20, 30
}
scopeTest();

// SNIPPET 2: Type Coercion Tricks
console.log("\n=== SNIPPET 2: Type Coercion ===");
console.log("5" + 3);        // "53"
console.log("5" - 3);        // 2
console.log("5" * "2");      // 10
console.log(true + true);    // 2
console.log([] + []);        // ""
console.log([] + {});        // "[object Object]"
console.log({} + []);        // "[object Object]"
console.log(!!"hello");      // true (double negation to boolean)
console.log(+"42");          // 42 (unary plus to number)

// SNIPPET 3: Equality Comparisons
console.log("\n=== SNIPPET 3: Equality ===");
console.log(5 == "5");       // true (loose)
console.log(5 === "5");      // false (strict)
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(0 == false);     // true
console.log(0 === false);    // false
console.log(NaN == NaN);     // false
console.log(Object.is(NaN, NaN)); // true

// SNIPPET 4: Template Literals
console.log("\n=== SNIPPET 4: Template Literals ===");
const name = "Alice";
const age = 25;
console.log(`Hello, ${name}! You are ${age} years old.`);
console.log(`Next year you'll be ${age + 1}.`);

const multiline = `
  This is a
  multiline string
  without concatenation
`;
console.log(multiline);

// SNIPPET 5: Destructuring Arrays
console.log("\n=== SNIPPET 5: Array Destructuring ===");
const colors = ["red", "green", "blue", "yellow"];
const [first, second, ...rest] = colors;
console.log(first);   // "red"
console.log(second);  // "green"
console.log(rest);    // ["blue", "yellow"]

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);    // 2, 1

// SNIPPET 6: Destructuring Objects
console.log("\n=== SNIPPET 6: Object Destructuring ===");
const user = {
  username: "john_doe",
  email: "john@example.com",
  age: 30,
  address: { city: "NYC", zip: 10001 }
};

const { username, email, age: userAge } = user;
console.log(username, email, userAge);

const { address: { city } } = user;
console.log(city); // "NYC"

// SNIPPET 7: Spread Operator with Arrays
console.log("\n=== SNIPPET 7: Spread with Arrays ===");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const arrCopy = [...arr1];
arrCopy.push(4);
console.log(arr1);     // [1, 2, 3] (original unchanged)
console.log(arrCopy);  // [1, 2, 3, 4]

// SNIPPET 8: Spread Operator with Objects
console.log("\n=== SNIPPET 8: Spread with Objects ===");
const defaults = { theme: "dark", lang: "en" };
const userPrefs = { lang: "es", notifications: true };
const config = { ...defaults, ...userPrefs };
console.log(config); // { theme: "dark", lang: "es", notifications: true }

// SNIPPET 9: Rest Parameters
console.log("\n=== SNIPPET 9: Rest Parameters ===");
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

function greet(greeting, ...names) {
  return `${greeting}, ${names.join(" and ")}!`;
}
console.log(greet("Hello", "Alice", "Bob", "Charlie"));

// SNIPPET 10: Ternary Operator
console.log("\n=== SNIPPET 10: Ternary Operator ===");
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // "B"

const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);

// SNIPPET 11: Short-circuit Evaluation
console.log("\n=== SNIPPET 11: Short-circuit ===");
const username1 = "";
const displayName = username1 || "Guest";
console.log(displayName); // "Guest"

const count = 0;
const showCount = count ?? "No count"; // nullish coalescing
console.log(showCount); // 0 (not "No count")

const user1 = { name: "Alice" };
console.log(user1 && user1.name); // "Alice"

// SNIPPET 12: Optional Chaining
console.log("\n=== SNIPPET 12: Optional Chaining ===");
const person = {
  name: "Bob",
  address: {
    city: "LA"
  }
};

console.log(person?.address?.city);      // "LA"
console.log(person?.phone?.mobile);      // undefined (no error)
console.log(person.contact?.email);      // undefined

// SNIPPET 13: Array Methods - map
console.log("\n=== SNIPPET 13: Array map ===");
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
const names = users.map(u => u.name);
console.log(names); // ["Alice", "Bob"]

// SNIPPET 14: Array Methods - filter
console.log("\n=== SNIPPET 14: Array filter ===");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

const adults = users.filter(u => u.age >= 18);
console.log(adults);

// SNIPPET 15: Array Methods - reduce
console.log("\n=== SNIPPET 15: Array reduce ===");
const values = [1, 2, 3, 4, 5];
const total = values.reduce((acc, val) => acc + val, 0);
console.log(total); // 15

const items = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 0.8 },
  { name: "Orange", price: 2.0 }
];
const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
console.log(totalPrice); // 4.3

// SNIPPET 16: Array Methods - find & findIndex
console.log("\n=== SNIPPET 16: Array find ===");
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];

const product = products.find(p => p.id === 2);
console.log(product); // { id: 2, name: "Phone" }

const index = products.findIndex(p => p.name === "Tablet");
console.log(index); // 2

// SNIPPET 17: Array Methods - some & every
console.log("\n=== SNIPPET 17: Array some & every ===");
const ages = [18, 21, 25, 30];
const hasMinor = ages.some(age => age < 18);
console.log(hasMinor); // false

const allAdults = ages.every(age => age >= 18);
console.log(allAdults); // true

// SNIPPET 18: String Methods
console.log("\n=== SNIPPET 18: String Methods ===");
const text = "  Hello World  ";
console.log(text.trim());              // "Hello World"
console.log(text.toUpperCase());       // "  HELLO WORLD  "
console.log(text.toLowerCase());       // "  hello world  "
console.log(text.includes("World"));   // true
console.log(text.startsWith("  He"));  // true
console.log(text.split(" "));          // ["", "", "Hello", "World", "", ""]
console.log("Hello".repeat(3));        // "HelloHelloHello"

// SNIPPET 19: Object Methods
console.log("\n=== SNIPPET 19: Object Methods ===");
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023
};

console.log(Object.keys(car));     // ["brand", "model", "year"]
console.log(Object.values(car));   // ["Tesla", "Model 3", 2023]
console.log(Object.entries(car));  // [["brand", "Tesla"], ...]

const merged = Object.assign({}, car, { color: "red" });
console.log(merged);

// SNIPPET 20: Practical Example - Data Transformation
console.log("\n=== SNIPPET 20: Data Transformation ===");
const transactions = [
  { id: 1, amount: 100, type: "credit" },
  { id: 2, amount: 50, type: "debit" },
  { id: 3, amount: 200, type: "credit" },
  { id: 4, amount: 75, type: "debit" }
];

const balance = transactions.reduce((acc, t) => {
  return t.type === "credit" ? acc + t.amount : acc - t.amount;
}, 0);
console.log(`Final Balance: $${balance}`); // 175

const credits = transactions
  .filter(t => t.type === "credit")
  .map(t => t.amount);
console.log("Credits:", credits); // [100, 200]