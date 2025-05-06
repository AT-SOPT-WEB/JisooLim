import { tbody } from "./dom.js";
import { saveTodos } from "./storage.js";
import { renderTodos } from "./render.js";

export function addDragEvents(todos) {
  const rows = Array.from(tbody.querySelectorAll("tr"));
  let draggedRow = null;
  let draggedIndex = null;

  rows.forEach((row) => {
    row.setAttribute("draggable", "true");

    row.addEventListener("dragstart", () => {
      draggedRow = row;
      draggedIndex = Array.from(tbody.children).indexOf(draggedRow);
      row.classList.add("dragging");
    });

    row.addEventListener("dragover", (e) => {
      e.preventDefault();
      const rect = row.getBoundingClientRect();
      const offset = e.clientY - rect.top;
      if (offset < rect.height / 2) {
        row.classList.add("drag-over-top");
        row.classList.remove("drag-over-bottom");
      } else {
        row.classList.add("drag-over-bottom");
        row.classList.remove("drag-over-top");
      }
    });

    row.addEventListener("dragleave", () => {
      row.classList.remove("drag-over-top", "drag-over-bottom");
    });

    row.addEventListener("drop", (e) => {
      e.preventDefault();
      row.classList.remove("drag-over-top", "drag-over-bottom");

      const targetIndex = rows.indexOf(e.currentTarget);
      const rect = e.currentTarget.getBoundingClientRect();
      const offset = e.clientY - rect.top;
      const isAbove = offset < rect.height / 2;
      let insertIndex = isAbove ? targetIndex : targetIndex + 1;

      if (draggedIndex < insertIndex) insertIndex--;
      if (insertIndex === draggedIndex || insertIndex === draggedIndex + 1) return;

      const [moved] = todos.splice(draggedIndex, 1);
      todos.splice(insertIndex, 0, moved);

      saveTodos(todos);
      renderTodos(todos);
    });

    row.addEventListener("dragend", () => {
      row.classList.remove("dragging", "drag-over-top", "drag-over-bottom");
    });
  });
}
