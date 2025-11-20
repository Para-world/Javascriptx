document.addEventListener("DOMContentLoaded", function() {
  const startTimerBtn = document.getElementById("startTimerBtn");
  const loadPostBtn = document.getElementById("loadPostBtn");
  const postContainer = document.getElementById("postContainer");

  if (startTimerBtn) {
    startTimerBtn.addEventListener("click", function() {
      console.log("Timer demo started...");
      console.log("This log is synchronous.");

      setTimeout(function() {
        console.log("setTimeout fired after 2000ms");
      }, 2000);

      let count = 0;
      const intervalId = setInterval(function() {
        count++;
        console.log("Interval tick", count);
        if (count >= 5) {
          clearInterval(intervalId);
          console.log("Interval stopped");
        }
      }, 1000);
    });
  }

  function simulateAsyncTask(shouldSucceed) {
    return new Promise(function(resolve, reject) {
      console.log("Async task started...");
      setTimeout(function() {
        if (shouldSucceed) {
          resolve("Task completed successfully.");
        } else {
          reject("Task failed.");
        }
      }, 1500);
    });
  }

  async function runPromiseExamples() {
    try {
      const result = await simulateAsyncTask(true);
      console.log("Async/await result:", result);
    } catch (error) {
      console.error("Async/await error:", error);
    }
  }

  runPromiseExamples();

  async function loadRandomPost() {
    if (!postContainer) {
      return;
    }

    postContainer.textContent = "Loading...";
    const randomId = Math.floor(Math.random() * 10) + 1;

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + randomId);
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }

      const data = await response.json();
      postContainer.innerHTML = "<h3>" + data.title + "</h3><p>" + data.body + "</p>";
      console.log("Loaded post with id:", randomId);
    } catch (error) {
      console.error("Error loading post:", error);
      postContainer.textContent = "Failed to load post. See console for details.";
    }
  }

  if (loadPostBtn) {
    loadPostBtn.addEventListener("click", loadRandomPost);
  }
});

// --- Advanced Notes (for professionals) ---
// - Understand the event loop, macrotasks (setTimeout, setInterval) and microtasks (Promises, async/await).
// - Always handle errors from Promises (try/catch or .catch) to avoid unhandled rejection issues in production.
// - Prefer async/await for readability, but know how to use Promise.all and Promise.race for concurrency patterns.

// --- Exercises ---
// 1. Implement loadManyPosts(ids) that fetches multiple posts in parallel using Promise.all and logs the results.
// 2. Add basic retry logic to loadRandomPost so it retries a few times before failing.
// 3. Explore AbortController to allow cancelling an in-flight fetch request from a "Cancel" button.
