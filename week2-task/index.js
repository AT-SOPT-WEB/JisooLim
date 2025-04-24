import { todos } from './todo.js';

const tbody = document.getElementById('todoTableBody');

function renderTodos(todoList) {
  tbody.innerHTML = '';
  todoList.forEach((todo) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td><input type="checkbox" /></td>
      <td>${todo.priority}</td>
      <td>${todo.completed ? '✅' : '❌'}</td>
      <td>${todo.title}</td>
    `;

    tbody.appendChild(row);
  });
}

renderTodos(todos);
