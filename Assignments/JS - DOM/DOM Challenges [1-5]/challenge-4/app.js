const taskInput = document.querySelector(".task-input");
const addButton = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");
const emptyList = document.querySelector(".empty-list");
const totalTasksElement = document.querySelector("#totalTasks");
const completedTasksElement = document.querySelector("#completedTasks");

let totalTasks = 0;
let completedTasks = 0;

function addTask(inputText) {
  const newLi = document.createElement("li");
  newLi.classList.add("task-item");
  //   newLi.innerText = inputText;

  // checkbox
  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.className = "complete-checkbox";

  checkboxElement.addEventListener("change", () => {
    if (checkboxElement.checked) {
      newLi.classList.add("completed");
      updateCompletedCount("increment");
    } else {
      newLi.classList.remove("completed");
      updateCompletedCount("decrement");
    }
  });

  // div
  const divElement = document.createElement("div");
  divElement.classList.add("task-text");
  divElement.textContent = inputText;

  // button
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("delete-button");
  buttonElement.textContent = "Delete";

  buttonElement.addEventListener("click", () => {
    taskList.removeChild(newLi);
    updateTaskCount("decrement");
    if (checkboxElement.checked) updateCompletedCount("decrement");
  });

  // add newLi ot taskList
  newLi.appendChild(checkboxElement);
  newLi.appendChild(divElement);
  newLi.appendChild(buttonElement);

  taskList.appendChild(newLi);
}

function updateTaskCount(operation) {
  operation === "increment" ? totalTasks++ : totalTasks--;

  if (totalTasks) {
    emptyList.remove();
  } else {
    taskList.appendChild(emptyList);
  }

  totalTasksElement.textContent = `Total tasks: ${totalTasks}`;
}

function updateCompletedCount(operation) {
  operation === "increment" ? completedTasks++ : completedTasks--;

  completedTasksElement.textContent = `Completed: ${completedTasks}`;
}

addButton.addEventListener("click", (e) => {
  if (taskInput.value.trim() != "") {
    // console.log(taskInput.value);

    addTask(taskInput.value);
    updateTaskCount("increment");

    taskInput.value = "";
  }
});

taskInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && taskInput.value.trim() != "") {
    // console.log(taskInput.value);

    addTask(taskInput.value);
    updateTaskCount("increment");

    taskInput.value = "";
  }
});
