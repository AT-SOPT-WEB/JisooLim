import { todos as defaultTodos } from "./todo.js";
import { loadTodos, saveTodos } from "./js/storage.js";
import { renderTodos } from "./js/render.js";
import { addDragEvents } from "./js/drag.js";
import { setupFilters } from "./js/filter.js";
import { setupActions } from "./js/actions.js";

let todos = loadTodos(defaultTodos);
saveTodos(todos);
renderTodos(todos);
addDragEvents(todos);

setupFilters(todos);
setupActions(todos);
