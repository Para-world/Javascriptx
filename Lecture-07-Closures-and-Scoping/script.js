let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar);
}

showGlobal();

function outerFunction() {
  let outerVar = "Outer";

  function innerFunction() {
    console.log(outerVar);
  }

  innerFunction();
}

outerFunction();

function createCounter(start) {
  let count = start;
  return function() {
    count++;
    console.log("Current count:", count);
    return count;
  };
}

let counter1 = createCounter(0);
counter1();
counter1();

let counter2 = createCounter(10);
counter2();

function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let doubleValue = createMultiplier(2);
let tripleValue = createMultiplier(3);
console.log(doubleValue(5));
console.log(tripleValue(5));

function createContactManager() {
  let contacts = [];

  function addContact(name, phone, email) {
    let contact = { name: name, phone: phone, email: email };
    contacts.push(contact);
    console.log("Added contact:", contact);
  }

  function getAllContacts() {
    console.log("All contacts:", contacts);
    return contacts;
  }

  function findContactByName(name) {
    let lower = name.toLowerCase();
    let found = contacts.find(function(contact) {
      return contact.name.toLowerCase() === lower;
    });
    if (found) {
      console.log("Found contact:", found);
    } else {
      console.log("Contact not found with name:", name);
    }
    return found;
  }

  return {
    addContact: addContact,
    getAllContacts: getAllContacts,
    findContactByName: findContactByName
  };
}

let contactManager = createContactManager();

contactManager.addContact("Alice", "1234567890", "alice@example.com");
contactManager.addContact("Bob", "9876543210", "bob@example.com");

contactManager.getAllContacts();
contactManager.findContactByName("Alice");
contactManager.findContactByName("Charlie");

// --- Advanced Notes (for professionals) ---
// - Closures capture variables, not just values: if the closed-over variable changes, all closures see the change.
// - Be mindful of long-lived closures that keep large objects in memory (e.g., references in global event handlers).
// - Many real-world patterns like debounce, throttle, and module patterns are built on top of closures.

// --- Exercises ---
// 1. Implement a once(fn) helper that returns a function which only allows fn to run a single time.
// 2. Create a createIdGenerator(prefix) that returns a function generating ids like prefix-1, prefix-2, ...
// 3. Refactor contactManager so that it exposes a method to remove a contact by name using the same closed-over array.
