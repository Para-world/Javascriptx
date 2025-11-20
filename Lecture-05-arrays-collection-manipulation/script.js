//An array is a special variable that can store multiple values under a single name.

//Declaring Arrays
let fruits = ["Apple", "Banana", "Cherry"];

//You can also create arrays with:
let numbers = new Array(1, 2, 3, 4, 5);

//Accessing Array Elements
console.log(fruits[0]); 
console.log(numbers[2]);

//Changing Array Elements
fruits[1] = "Mango";
console.log(fruits); 

//Array Properties
console.log(fruits.length); 

//Looping Through Arrays
//Using for loop:
let numbersx = [10, 20, 30, 40];

for (let i = 0; i < numbersx.length; i++) {
  console.log(numbersx[i]);
}

//Using for...of:
for (let fruit of fruits) {
  console.log(fruit);
}

//Using forEach():

fruits.forEach(function(fruit) {
  console.log(fruit);
});

//Or with arrow function:
fruits.forEach(fruit => console.log(fruit));

//Common Array Methods

// push()	Add to end	fruits.push("Grapes")	["Apple","Mango","Cherry","Grapes"]
// pop()	Remove last	fruits.pop()	["Apple","Mango","Cherry"]
// unshift()	Add to start	fruits.unshift("Orange")	["Orange","Apple","Mango","Cherry"]
// shift()	Remove first	fruits.shift()	["Apple","Mango","Cherry"]
// indexOf()	Find index	fruits.indexOf("Mango")	1
// includes()	Check existence	fruits.includes("Apple")	true
// join()	Convert to string	fruits.join(", ")	"Apple, Mango, Cherry"


//Combining and Slicing Arrays
//concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); 

// slice()
let sliced = fruits.slice(1, 3);
console.log(sliced); 


//splice()
fruits.splice(1, 1, "Kiwi"); 
console.log(fruits);

//Searching and Filtering Arrays
let numbersy = [10, 25, 30, 40];

let firstBig = numbersy.find(num => num > 20);
let allBig = numbersy.filter(num => num > 20);

console.log(firstBig);
console.log(allBig);   

//Transforming Arrays
//map
let doubled = numbers.map(num => num * 2);
console.log(doubled); 

// reduce()
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 


let cartItems = [
  { name: "Book", price: 299 },
  { name: "Pen", price: 49 },
  { name: "Notebook", price: 149 }
];

cartItems.push({ name: "Bag", price: 799 });

let totalPrice = cartItems.reduce(function(total, item) {
  return total + item.price;
}, 0);

console.log("Cart items:", cartItems);
console.log("Total price:", totalPrice);

// --- Advanced Notes (for professionals) ---
// - Prefer map/filter/reduce for transforming collections, but be mindful of performance on very large arrays.
// - Avoid mutating arrays in-place when building reusable utilities; instead, return new arrays (use spread [...arr]).
// - Understand that many array operations are O(n); be conscious of nested loops that can lead to O(n^2).

// --- Exercises ---
// 1. Implement a function getExpensiveItems(cart, minPrice) that returns a new array filtered by price.
// 2. Write a function groupBy(items, key) that groups an array of objects by a given property name.
// 3. Flatten a 2D array [[1,2],[3,4]] into [1,2,3,4] using reduce without using flat().
