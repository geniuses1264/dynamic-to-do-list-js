# 📝 To-Do List App with Local Storage

A lightweight and responsive To-Do List application built with **HTML**, **CSS**, and **JavaScript**. This app allows users to add, remove, and persist their daily tasks using the browser's **Local Storage**, ensuring tasks remain available even after refreshing or closing the browser.

---

## 🚀 Features

- ✅ Add new tasks using a button or pressing **Enter**
- ✅ Remove tasks individually
- ✅ Automatically saves tasks to **Local Storage**
- ✅ Loads tasks on page refresh
- ✅ Clean and minimal user interface
- ✅ Responsive design with basic styling

---

## 🏗️ Project Structure

###to-do-list-app/

index.html # Main HTML structure
style.css # Styling for layout and buttons (optional)
script.js # Main logic for task management
README.md # Project documentation


---

## 🔧 How It Works

### 1. DOM Initialization
JavaScript waits for the DOM to load using `DOMContentLoaded` before running.

### 2. Task Loading
Tasks are retrieved from `localStorage` using `JSON.parse()` and displayed in the list.

### 3. Adding Tasks
Tasks are added via:
- Clicking the "Add Task" button
- Pressing the "Enter" key

Each task is:
- Shown in the list
- Saved to `localStorage` using `JSON.stringify()`

### 4. Removing Tasks
Each task has a "Remove" button. When clicked:
- The task is removed from the DOM
- `localStorage` is updated to reflect the change

---

## 🧪 How to Use

1. **Clone or Download** this repository.
2. Open the `index.html` file in your browser.
3. Type a task into the input field.
4. Click the **Add Task** button or press **Enter**.
5. To remove a task, click the **Remove** button next to it.

---

## 💡 Technologies Used

- **HTML5** — Structure of the app
- **CSS3** — Basic styling (optional but recommended)
- **JavaScript (ES6)** — Core functionality and logic
- **Local Storage API** — Data persistence in the browser

---

## 📦 Future Enhancements

- [ ] Add edit/update task functionality
- [ ] Mark tasks as completed
- [ ] Task filtering and searching
- [ ] Dark/light theme toggle
- [ ] Store data using IndexedDB or external APIs

---

## 🤝 Contributing

Feel free to fork the project, improve the logic, enhance the design, or refactor the code. Pull requests are welcome!

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## ✨ Demo Preview

> Coming soon: A live demo will be hosted for testing and preview.

---

## 🙌 Author

**Eben**  
*Frontend Developer | Problem Solver | Lifelong Learner*

