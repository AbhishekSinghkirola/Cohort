const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskListEl = document.getElementById("taskList");
const totalTaskEl = document.querySelector("#totalTasks>span");
const completedTaskEl = document.querySelector("#completedTasks>span");

const tasks = [];

const addTask = (e) => {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push({ id: tasks.length + 1, name: task, isCompleted: false });

  displayTasks();

  clearInput();

  setTotalCount();
};

const displayTasks = () => {
  taskListEl.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task-item");

    if (task.isCompleted) {
      li.style.background = "#706c6c29";
    }

    li.innerHTML = `<span>${task.id}</span>
            <span>${task.name}</span>
            <button type="button" class="add-button complete-task" ${
              task.isCompleted ? "disabled" : ""
            } data-task-id="${task.id}">Completed</button>`;

    li.addEventListener("click", markTaskCompleted);

    taskListEl.appendChild(li);
  });
};

const clearInput = () => {
  taskInput.value = "";
};

const setTotalCount = () => {
  totalTaskEl.innerText = tasks.length;
};

const markTaskCompleted = (e) => {
  const taskId = e.target.dataset.taskId;

  const task = tasks.findIndex((task) => task.id == taskId);

  tasks[task].isCompleted = true;

  displayTasks();

  setCompletedTaskCount();
};

const setCompletedTaskCount = () => {
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  completedTaskEl.innerText = completedTasks;
};

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask(e);
  }
});
