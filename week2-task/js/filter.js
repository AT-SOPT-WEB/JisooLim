import { renderTodos } from "./render.js";
import { addDragEvents } from "./drag.js";
import { topButtons, dropdownToggle, priorityMenu } from "./dom.js";

export function setupFilters(todos) {
  topButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const text = button.innerText.trim();
      if (text === "전체") filterTodos("all", null, todos);
      else if (text === "완료") filterTodos("completed", null, todos);
      else if (text === "미완료") filterTodos("incomplete", null, todos);
    });
  });

  dropdownToggle.addEventListener("click", () => {
    const isOpen = priorityMenu.style.display === "block";
    priorityMenu.style.display = isOpen ? "none" : "block";
  });

  priorityMenu.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const priority = parseInt(li.dataset.priority);
      filterTodos("priority", priority, todos);
      priorityMenu.style.display = "none";
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdownToggle.contains(e.target) && !priorityMenu.contains(e.target)) {
      priorityMenu.style.display = "none";
    }
  });
}

function filterTodos(type, value, todos) {
  let filtered = [];
  switch (type) {
    case "all":
      filtered = todos;
      break;
    case "completed":
      filtered = todos.filter((todo) => todo.completed);
      break;
    case "incomplete":
      filtered = todos.filter((todo) => !todo.completed);
      break;
    case "priority":
      filtered = todos.filter((todo) => todo.priority === value);
      break;
  }
  renderTodos(filtered);
  addDragEvents(todos);
}