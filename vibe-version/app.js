// Vibe version: self-contained task manager with the exact app-spec features only.
const tasks = [
  { id: 1, title: "Map the filter state", completed: false },
  { id: 2, title: "Test the active task view", completed: false },
  { id: 3, title: "Keep the implementation explainable", completed: true },
];
let filter = "all";
const list = document.querySelector("#taskList");
const input = document.querySelector("#taskInput");
function render() {
  const shown = tasks.filter((task) => filter === "all" || (filter === "active" ? !task.completed : task.completed));
  document.querySelector("#taskCount").textContent = tasks.length;
  document.querySelector("#activeCount").textContent = `${tasks.filter((task) => !task.completed).length} ACTIVE`;
  document.querySelectorAll("#filters button").forEach((button) => button.classList.toggle("selected", button.dataset.filter === filter));
  list.innerHTML = shown.length ? shown.map((task, index) => `<article class="task ${task.completed ? "done" : ""}"><span class="index">${String(index + 1).padStart(2, "0")}</span><button class="toggle" type="button" data-id="${task.id}" aria-label="Toggle ${task.title}">${task.completed ? "✓" : ""}</button><span class="title">${task.title}</span><span class="state">${task.completed ? "DONE" : "OPEN"}</span></article>`).join("") : '<p class="empty">No tasks in this filter. Try another view.</p>';
}
document.querySelector("#taskForm").addEventListener("submit", (event) => { event.preventDefault(); const title = input.value.trim(); if (!title) return; tasks.unshift({ id: Date.now(), title, completed: false }); input.value = ""; filter = "all"; render(); });
document.querySelector("#filters").addEventListener("click", (event) => { const button = event.target.closest("button[data-filter]"); if (!button) return; filter = button.dataset.filter; render(); });
list.addEventListener("click", (event) => { const button = event.target.closest("button[data-id]"); if (!button) return; const task = tasks.find((item) => item.id === Number(button.dataset.id)); if (task) task.completed = !task.completed; render(); });
render();
