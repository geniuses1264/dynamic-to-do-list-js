document.addEventListener("DOMContentLoaded", () => {
  // DOM element references
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Save tasks to Local Storage
  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach(task => addTask(task, false));
  }

  // Add task to the DOM and optionally save to Local Storage
  function addTask(taskText, shouldSave = true) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Remove task on click
    removeBtn.addEventListener("click", () => {
      taskList.removeChild(listItem);
      const updatedTasks = Array.from(taskList.children).map(li =>
        li.firstChild.textContent.trim()
      );
      saveTasks(updatedTasks);
    });

    // Append button and list item
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Save new task
    if (shouldSave) {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      tasks.push(taskText);
      saveTasks(tasks);
    }
  }

  // Handle add button click
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task to continue");
      return;
    }
    addTask(taskText);
    taskInput.value = "";
  });

  // Handle Enter key press
  taskInput.addEventListener("keypress", event => {
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

  // Load tasks on page load
  loadTasks();
});
