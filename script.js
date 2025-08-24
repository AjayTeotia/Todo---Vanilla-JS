// * Formate date
function formateDate(date) {
  return date.toLocaleDateString();
}

const today = formateDate(new Date());
const yesterday = formateDate(
  new Date(new Date().setDate(new Date().getDate() - 1))
);

// * State
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// * Shift old tasks
tasks = tasks
  .map((task) => {
    if (task.date !== today && task.date !== yesterday)
      return { ...task, date: yesterday };
    return task;
  })
  .filter((task) => task.date === today || task.date === yesterday);

// *  Save tasks
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// * Add New Tasks
document.getElementById("taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("taskInput");

  const newTask = input.value.trim();
  if (!newTask) return alert("Please enter a task");
  if (tasks.find((t) => t.text === newTask && t.date === today))
    return alert("Task already exists");

  tasks.push({
    id: Date.now(),
    text: newTask,
    date: today,
    completed: false,
  });

  saveTasks();
  renderTasks();
  input.value = "";
});

// * Delete Task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  saveTasks();
  renderTasks();
}

// * Toggle Task
function toggleTask(id) {
  tasks = tasks.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );

  saveTasks();
  renderTasks();
}

// * Render Tasks
function renderTasks() {
  const todayList = document.getElementById("todayTasks");
  const yesterdayList = document.getElementById("yesterdayTasks");
  const todayMessage = document.getElementById("todayMessage");
  const yesterdayMessage = document.getElementById("yesterdayMessage");
  const search = document.getElementById("searchInput").value.toLowerCase();

  todayList.innerHTML = "";
  yesterdayList.innerHTML = "";

  const todayTasks = tasks.filter(
    (t) => t.date === today && t.text.toLowerCase().includes(search)
  );
  const yesterdayTasks = tasks.filter(
    (t) => t.date === yesterday && t.text.toLowerCase().includes(search)
  );

  todayTasks.forEach((task) => todayList.appendChild(createTaskCard(task)));
  yesterdayTasks.forEach((task) =>
    yesterdayList.appendChild(createTaskCard(task))
  );

  todayMessage.textContent =
    tasks.filter((t) => t.date === today).length === 0
      ? "No tasks for today. Add some!"
      : todayTasks.length === 0
      ? "No matching tasks."
      : "";

  yesterdayMessage.textContent =
    tasks.filter((t) => t.date === yesterday).length === 0
      ? "No tasks yesterday."
      : yesterdayTasks.length === 0
      ? "No matching tasks."
      : "";

  document.getElementById("totalTasks").textContent = tasks.length;
  document.getElementById("completedTasks").textContent = tasks.filter(
    (t) => t.completed
  ).length;
  document.getElementById("pendingTasks").textContent = tasks.filter(
    (t) => !t.completed
  ).length;
}

// * Create Task Card
function createTaskCard(task) {
  const card = document.createElement("div");
  card.className = `task-card ${task.completed ? "completed" : ""}`;

  const span = document.createElement("span");
  span.textContent = task.text;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.onchange = () => toggleTask(task.id);

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => deleteTask(task.id);

  card.appendChild(checkbox);
  card.appendChild(span);
  card.appendChild(delBtn);

  return card;
}

document.getElementById("searchInput").addEventListener("input", renderTasks);

renderTasks();
