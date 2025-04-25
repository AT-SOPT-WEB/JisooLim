import { todos as defaultTodos } from "./todo.js";

const STORAGE_KEY = "todoList";
let todos = loadTodos();

const tbody = document.getElementById("todoTableBody");
const topButtons = document.querySelectorAll(".top__btn");
const dropdownToggle = document.getElementById("dropdownToggle");
const priorityMenu = document.getElementById("priorityMenu");
const prioritySelectBtn = document.getElementById("prioritySelectBtn");
const prioritySelectMenu = document.getElementById("prioritySelectMenu");
const inputField = document.querySelector(".main__top--search");
const addButton = document.querySelectorAll(".main__top_btn")[1];
const selectAllCheckbox = document.querySelector(
  '.todo-table thead input[type="checkbox"]'
);
const deleteButton = document.querySelectorAll(".middle__btn")[0];
const completeButton = document.querySelectorAll(".middle__btn")[1];
const completeModal = document.getElementById("completeModal");
const closeModalBtn = document.getElementById("closeModalBtn");

let selectedPriority = null;

function loadTodos() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [...defaultTodos];
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function renderTodos(todoList) {
  tbody.innerHTML = "";
  todoList.forEach((todo, i) => {
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

  addDragEvents();
}

// 필터링 기능
function filterTodos(type, value) {
  switch (type) {
    case "all":
      renderTodos(todos);
      break;
    case "completed":
      renderTodos(todos.filter((todo) => todo.completed));
      break;
    case "incomplete":
      renderTodos(todos.filter((todo) => !todo.completed));
      break;
    case "priority":
      renderTodos(todos.filter((todo) => todo.priority === value));
      break;
  }
}

topButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.innerText.trim();
    if (text === "전체") filterTodos("all");
    else if (text === "완료") filterTodos("completed");
    else if (text === "미완료") filterTodos("incomplete");
  });
});

// 드래그 앤 드롭
function addDragEvents() {
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

      const rows = Array.from(tbody.querySelectorAll("tr"));
      const targetRow = e.currentTarget;
      const targetIndex = rows.indexOf(targetRow);

      const rect = targetRow.getBoundingClientRect();
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

// 우선순위 드롭다운
dropdownToggle.addEventListener("click", () => {
  const isOpen = priorityMenu.style.display === "block";
  priorityMenu.style.display = isOpen ? "none" : "block";
});

priorityMenu.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    const priority = parseInt(li.dataset.priority);
    filterTodos("priority", priority);
    priorityMenu.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!dropdownToggle.contains(e.target) && !priorityMenu.contains(e.target)) {
    priorityMenu.style.display = "none";
  }
});

prioritySelectBtn.addEventListener("click", () => {
  const isOpen = prioritySelectMenu.style.display === "block";
  prioritySelectMenu.style.display = isOpen ? "none" : "block";
});

prioritySelectMenu.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    selectedPriority = parseInt(li.dataset.priority);
    prioritySelectBtn.innerHTML = `중요도 ${selectedPriority} <i class="fas fa-angle-down"></i>`;
    prioritySelectMenu.style.display = "none";
  });
});

// 할 일 추가
addButton.addEventListener("click", () => {
  const title = inputField.value.trim();

  if (!title || selectedPriority === null) {
    alert("할 일과 중요도를 모두 입력해주세요.");
    return;
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false,
    priority: selectedPriority,
  };

  todos.push(newTodo);
  saveTodos(todos);
  renderTodos(todos);

  inputField.value = "";
  selectedPriority = null;
  prioritySelectBtn.innerHTML = `중요도 선택 <i class="fas fa-angle-down"></i>`;
});

// 전체 선택 체크박스
selectAllCheckbox.addEventListener("change", () => {
  const itemCheckboxes = document.querySelectorAll(
    '.todo-table tbody input[type="checkbox"]'
  );
  itemCheckboxes.forEach((cb) => (cb.checked = selectAllCheckbox.checked));
});

// 삭제 기능
deleteButton.addEventListener("click", () => {
  const checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
  const rowsToDelete = [];

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) rowsToDelete.push(index);
  });

  if (rowsToDelete.length === 0) {
    alert("삭제할 항목을 선택하세요.");
    return;
  }

  rowsToDelete.reverse().forEach((idx) => {
    todos.splice(idx, 1);
  });

  saveTodos(todos);
  renderTodos(todos);
});

// 완료 기능
completeButton.addEventListener("click", () => {
  const checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
  const selectedIndexes = [];

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) selectedIndexes.push(index);
  });

  if (selectedIndexes.length === 0) {
    alert("완료할 항목을 선택하세요.");
    return;
  }

  const hasCompletedAlready = selectedIndexes.some(
    (idx) => todos[idx].completed
  );

  if (hasCompletedAlready) {
    completeModal.style.display = "flex";
    return;
  }

  selectedIndexes.forEach((idx) => {
    todos[idx].completed = true;
  });

  saveTodos(todos);
  renderTodos(todos);
});

closeModalBtn.addEventListener("click", () => {
  completeModal.style.display = "none";
});

saveTodos(todos);
renderTodos(todos);
