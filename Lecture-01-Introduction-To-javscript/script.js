function changeText() {
  const titleElement = document.getElementById("title");
  if (titleElement) {
    titleElement.innerText = "JavaScript is running!";
  }
}

let clickCount = 0;

function incrementCounter() {
  clickCount++;
  const countElement = document.getElementById("clickCount");
  if (countElement) {
    countElement.innerText = clickCount.toString();
  }
  console.log("Button clicked", clickCount, "times");
}

//
console.log("Hello, JavaScript!");



console.log("Welcome, Deepak!");
// alert("Hello Deepak, welcome to JavaScript!"); 

// --- Advanced Notes (for professionals) ---
// - Prefer attaching events with addEventListener instead of inline onclick attributes in HTML.
// - Use console.log only for quick checks; rely on DevTools breakpoints and the debugger for real debugging.
// - For more complex pages, wrap your code inside DOMContentLoaded to ensure elements exist before you query them.

// --- Exercises ---
// 1. Remove inline onclick handlers from index.html and attach both button listeners from JavaScript only.
// 2. Add a "Reset Counter" button that sets the counter back to zero and logs that reset.
// 3. Log the timestamp of every click using new Date().toISOString() so students see real-world logging patterns.
