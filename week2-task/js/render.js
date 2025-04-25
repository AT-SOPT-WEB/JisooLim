import { tbody } from "./dom.js";
import { addDragEvents } from "./drag.js";

export function renderTodos(todos) {
  tbody.innerHTML = "";
  todos.forEach((todo, i) => {
    const row = document.createElement("tr");
    row.setAttribute("data-index", i);
    row.setAttribute("draggable", "true");
    row.innerHTML = `
      <td><input type="checkbox" /></td>
      <td>${todo.priority}</td>
      <td>${todo.completed ? "✅" : "❌"}</td>
      <td>${todo.title}</td>
    `;
    tbody.appendChild(row);
  });
  addDragEvents(todos);
}
