document.addEventListener("DOMContentLoaded", function() {
  const STORAGE_KEY = "lecture11_notes";

  const noteInput = document.getElementById("noteInput");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const notesList = document.getElementById("notesList");
  const clearAllBtn = document.getElementById("clearAllBtn");

  function loadNotesFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return [];
    }

    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return [];
    } catch (error) {
      console.error("Failed to parse notes from localStorage:", error);
      return [];
    }
  }

  function saveNotesToStorage(notes) {
    const json = JSON.stringify(notes);
    localStorage.setItem(STORAGE_KEY, json);
  }

  function renderNotes(notes) {
    notesList.innerHTML = "";

    notes.forEach(function(note, index) {
      const li = document.createElement("li");
      li.textContent = note.text;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", function() {
        notes.splice(index, 1);
        saveNotesToStorage(notes);
        renderNotes(notes);
      });

      li.appendChild(deleteBtn);
      notesList.appendChild(li);
    });
  }

  let notes = loadNotesFromStorage();
  renderNotes(notes);

  function addNote() {
    const text = noteInput.value.trim();
    if (!text) {
      return;
    }

    const newNote = { text: text };
    notes.push(newNote);
    saveNotesToStorage(notes);
    renderNotes(notes);
    noteInput.value = "";
    noteInput.focus();
  }

  if (addNoteBtn && noteInput) {
    addNoteBtn.addEventListener("click", addNote);

    noteInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        addNote();
      }
    });
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener("click", function() {
      notes = [];
      saveNotesToStorage(notes);
      renderNotes(notes);
    });
  }
});

// --- Advanced Notes (for professionals) ---
// - Treat localStorage as a simple key-value store; always version your data format for future migrations.
// - Be aware of storage limits and that localStorage is synchronous, which can matter on performance-critical paths.
// - Always wrap JSON.parse in try/catch to handle corrupted data gracefully (already demonstrated above).

// --- Exercises ---
// 1. Extend notes to store createdAt timestamps and show them next to each note.
// 2. Add a simple search box that filters notes on the client without touching localStorage.
// 3. Introduce a version field into the stored data and write a small migration that can upgrade from an older format.

