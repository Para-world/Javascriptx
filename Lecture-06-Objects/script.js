// Lecture 06: Objects in JavaScript

// Objects are a fundamental part of JavaScript. They are used to store collections of data and more complex entities.
// Objects are created using curly braces {} with a list of properties.
// A property is a "key: value" pair, where key is a string (also called a "property name"), and value can be anything.

// 1. Creating an Object
// Using object literal syntax
let person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  courses: ["Math", "Science"],
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

console.log("Person object:", person);

// 2. Accessing Properties
// You can access properties using dot notation or bracket notation.

// Dot notation
console.log("Name:", person.name); // John Doe
console.log("Age:", person.age);   // 30

// Bracket notation
// Useful when property names are dynamic or have special characters.
console.log("Courses:", person["courses"]); // ["Math", "Science"]
let propertyName = "isStudent";
console.log("Is Student?", person[propertyName]); // false

// Accessing nested object properties
console.log("City:", person.address.city); // Anytown

// 3. Modifying Properties
// You can add, update, or delete properties.

// Adding a new property
person.email = "john.doe@example.com";
console.log("Person after adding email:", person);

// Updating an existing property
person.age = 31;
console.log("Person after updating age:", person);

// Deleting a property
delete person.isStudent;
console.log("Person after deleting isStudent:", person);

// 4. Object Methods
// Objects can also have methods, which are functions stored as object properties.

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  isRunning: false,

  // Method to start the car
  start: function() {
    this.isRunning = true;
    console.log(`${this.brand} ${this.model} has started.`);
  },

  // Method to stop the car
  stop: function() {
    this.isRunning = false;
    console.log(`${this.brand} ${this.model} has stopped.`);
  },

  // Method to display car info
  displayInfo: function() {
    console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
  }
};

car.displayInfo(); // Car: Toyota Camry (2022)
car.start();       // Toyota Camry has started.
console.log("Is car running?", car.isRunning); // true
car.stop();        // Toyota Camry has stopped.
console.log("Is car running?", car.isRunning); // false

// 5. "this" keyword
// In an object method, "this" refers to the object itself.
// It allows you to access other properties of the same object.

// 6. Iterating over Object Properties
// You can use a for...in loop to iterate over the properties of an object.

console.log("Iterating over car properties:");
for (let key in car) {
  // The check hasOwnProperty is used to ensure that the property belongs to the object itself and not to its prototype chain.
  if (car.hasOwnProperty(key)) {
    console.log(`${key}: ${car[key]}`);
  }
}

// 7. Object Keys, Values, and Entries
// The Object.keys(), Object.values(), and Object.entries() methods are useful for working with object properties.

const keys = Object.keys(person);
console.log("Object keys:", keys); // ["name", "age", "courses", "address", "email"]

const values = Object.values(person);
console.log("Object values:", values); // ["John Doe", 31, ["Math", "Science"], {street: "123 Main St", city: "Anytown"}, "john.doe@example.com"]

const entries = Object.entries(person);
console.log("Object entries:", entries); // [["name", "John Doe"], ["age", 31], ...]

// You can use these with for...of loops for more modern iteration patterns.
console.log("Iterating with Object.entries:");
for (const [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}

// --- Advanced Notes (for professionals) ---
// - Understand the prototype chain and how hasOwnProperty helps distinguish own props from inherited ones.
// - Use object spread ({...obj}) or Object.assign to create shallow copies instead of mutating shared objects.
// - Be careful with nested objects: shallow copies are not enough if inner objects are also mutated.

// --- Exercises ---
// 1. Implement a shallowClone(obj) function and test how it behaves with nested objects like person.address.
// 2. Write a function mergePerson(p, extra) that returns a new merged object without mutating the original.
// 3. Using Object.entries, build a function to invert a simple lookup object (keys become values, values become keys).
