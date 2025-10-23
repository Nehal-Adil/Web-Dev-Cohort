const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Render Todos
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    li.innerHTML = `
      <span class="todo-text ${todo.completed ? "completed" : ""}">
        ${todo.text}
      </span>
      <div class="d-flex gap-2">
        <button class="btn-icon" onclick="editTodo(${index})" title="Edit">
          <i class="bi bi-pencil-square"></i>
        </button>
        <button class="btn-icon" onclick="toggleComplete(${index})" title="Mark Complete">
          <i class="bi bi-check-circle${todo.completed ? "-fill" : ""}"></i>
        </button>
        <button class="btn-icon btn-delete" onclick="deleteTodo(${index})" title="Delete">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    `;

    todoList.appendChild(li);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add todo
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = todoInput.value.trim();
  if (text === "") return;

  todos.push({ text: text, completed: false });
  todoInput.value = "";

  renderTodos();
});

// Edit todo
window.editTodo = (index) => {
  const newText = prompt("Edit your task:", todos[index].text);
  if (newText && newText.trim() !== "") {
    todos[index].text = newText.trim();
    renderTodos();
  }
};

// Delete todo
window.deleteTodo = (index) => {
  todos.splice(index, 1);
  renderTodos();
};

// Toggle complete
window.toggleComplete = (index) => {
  todos[index].completed = !todos[index].completed;
  renderTodos();
};

// Initial render
renderTodos();
