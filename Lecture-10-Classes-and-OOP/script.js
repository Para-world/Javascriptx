function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

var person1 = new Person("Alice", 25);
person1.greet();

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(this.name + " barks. Breed: " + this.breed);
  }

  fetch() {
    console.log(this.name + " is fetching the ball.");
  }
}

let dog1 = new Dog("Rex", "Labrador");
dog1.speak();
dog1.fetch();

class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log("MathHelper.add(2, 3) =", MathHelper.add(2, 3));
console.log("MathHelper.multiply(4, 5) =", MathHelper.multiply(4, 5));

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }

  getInfo() {
    return this.title + " by " + this.author + " (" + (this.isAvailable ? "Available" : "Not available") + ")";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log("Added book:", book.getInfo());
  }

  listBooks() {
    console.log("Books in " + this.name + ":");
    if (this.books.length === 0) {
      console.log("No books in the library.");
      return;
    }

    for (let i = 0; i < this.books.length; i++) {
      console.log((i + 1) + ". " + this.books[i].getInfo());
    }
  }

  findBookByTitle(title) {
    const lowerTitle = title.toLowerCase();
    const found = this.books.find(function(book) {
      return book.title.toLowerCase() === lowerTitle;
    });

    if (found) {
      console.log("Found book:", found.getInfo());
    } else {
      console.log("No book found with title:", title);
    }

    return found;
  }
}

let library = new Library("My City Library");

let book1 = new Book("JavaScript Basics", "Deepak Kumar");
let book2 = new Book("Advanced JavaScript", "John Smith");
let book3 = new Book("Web Development", "Jane Doe");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();

library.findBookByTitle("JavaScript Basics");

book1.toggleAvailability();
console.log("After toggling availability:", book1.getInfo());

library.listBooks();

// --- Advanced Notes (for professionals) ---
// - Consider when composition (objects containing other objects) is better than inheritance for flexibility.
// - Classes are syntax sugar over prototypes; understanding both helps when reading older or library code.
// - Be cautious with methods that both mutate internal state and return values; keep APIs consistent.

// --- Exercises ---
// 1. Add a removeBook(title) method to Library that removes a book and logs what happened.
// 2. Implement a Member class and extend the mini project to support borrowing and returning books.
// 3. Try rewriting Book and Library as factory functions with closures instead of classes to compare styles.
