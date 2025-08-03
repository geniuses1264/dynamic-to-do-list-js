document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to save tasks array to Local Storage
  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to load tasks from Local Storage and render them
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' means don't save again
  }

  // Function to add a task to the DOM and optionally save to Local Storage
  function addTask(taskText, save = true) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button for each task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Set up event to remove task and update Local Storage
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
      const tasks = Array.from(taskList.children).map(li =>
        li.firstChild.textContent.trim()
      );
      saveTasks(tasks);
    };

    // Add button to list item, then list item to task list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Save to Local Storage if this is a user action
    if (save) {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      tasks.push(taskText);
      saveTasks(tasks);
    }
  }

  // Event handler when the Add Task button is clicked
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task to continue");
      return;
    }
    addTask(taskText);
    taskInput.value = ""; // Clear input after adding
  });

  // Allow adding task by pressing Enter key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task to continue");
        return;
      }
      addTask(taskText);
      taskInput.value = "";
    }
  });

  // Load saved tasks when the page loads
  loadTasks();
});
