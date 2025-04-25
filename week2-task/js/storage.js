const STORAGE_KEY = "todoList";

export function loadTodos(defaultTodos) {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [...defaultTodos];
}

export function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
