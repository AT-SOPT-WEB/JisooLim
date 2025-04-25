import {
  inputField,
  addButton,
  deleteButton,
  completeButton,
  selectAllCheckbox,
  tbody,
  prioritySelectBtn,
  prioritySelectMenu,
  completeModal,
  closeModalBtn
} from "./dom.js";
import { renderTodos } from "./render.js";
import { saveTodos } from "./storage.js";
import { addDragEvents } from "./drag.js";

export function setupActions(todos) {
  let selectedPriority = null;

  // 중요도 선택
  prioritySelectBtn.addEventListener("click", () => {
    const isOpen = prioritySelectMenu.style.display === "block";
    prioritySelectMenu.style.display = isOpen ? "none" : "block";
  });

  // 중요도 선택(메인)
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
    addDragEvents(todos);

    inputField.value = "";
    selectedPriority = null;
    prioritySelectBtn.innerHTML = `중요도 선택 <i class="fas fa-angle-down"></i>`;
  });

  // 전체 선택
  selectAllCheckbox.addEventListener("change", () => {
    const itemCheckboxes = document.querySelectorAll(
      '.todo-table tbody input[type="checkbox"]'
    );
    itemCheckboxes.forEach((cb) => (cb.checked = selectAllCheckbox.checked));
  });

  // 삭제
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
    addDragEvents(todos);
  });

  // 완료
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
    addDragEvents(todos);
  });

  // 모달 닫기
  closeModalBtn.addEventListener("click", () => {
    completeModal.style.display = "none";
  });
}