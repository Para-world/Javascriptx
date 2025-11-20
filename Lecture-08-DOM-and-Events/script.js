document.addEventListener("DOMContentLoaded", function() {
  const titleElement = document.getElementById("pageTitle");
  const highlightButton = document.getElementById("highlightBtn");
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  if (highlightButton && titleElement) {
    highlightButton.addEventListener("click", function() {
      const isHighlighted = titleElement.classList.contains("highlight");
      if (isHighlighted) {
        titleElement.classList.remove("highlight");
      } else {
        titleElement.classList.add("highlight");
      }
    });
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
      return;
    }

    const li = document.createElement("li");
    li.textContent = text + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
  }

  if (addTaskBtn && taskInput && taskList) {
    addTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  }
});

// --- Advanced Notes (for professionals) ---
// - For many dynamic lists, event delegation (listening on the parent and checking event.target) scales better.
// - Keep UI state (data) separate from DOM when applications grow; treat DOM as a view of your underlying model.
// - Understand the difference between input events (input, change, keydown) and choose the right one for your UX.

// --- Exercises ---
// 1. Refactor the delete logic to use event delegation with a single listener on taskList.
// 2. Extend the task item to support a "completed" state (toggle class) and filter to show only active tasks.
// 3. Persist tasks to localStorage so that the list survives page reloads (building on ideas from Lecture 11).
