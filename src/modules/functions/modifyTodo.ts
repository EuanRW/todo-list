// TODO: Create functionality for when a todo is modified
import { List } from "../objects/list";
import { Todo } from "../objects/todo";
import { listArray } from "../..";
import { todoArray } from "../..";
import { formatDate } from "./formatDate";

const modifyTodo = (todo: Todo) => {
  //Update state array
  const modificationIndex = todoArray.map((e) => e.id).indexOf(todo.id);

  todoArray[modificationIndex] = todo;

  //Update UI

  //Title
  const todoTitle = document.getElementById(`todo-${todo.id}-title`);
  todoTitle.textContent = todo.title;

  //Due date
  const todoDueDate = document.getElementById(`todo-${todo.id}-due-date`);
  todoDueDate.className = "";

  const today = new Date();
  const differenceInMilliseconds: number =
    todo.dueDate.getTime() - today.getTime();
  const differenceInDays: number = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays > 0) {
    todoDueDate.classList.add("todo-due-date");
  } else {
    todoDueDate.classList.add("todo-due-date-overdue");
  }

  todoDueDate.textContent = formatDate(todo.dueDate);

  //Status
  const todoStatus = document.getElementById(`todo-${todo.id}-status`);
  todoStatus.textContent = todo.status;

  //Priority
  const todoPriority = document.getElementById(`todo-${todo.id}-priority`);
  todoPriority.textContent = todo.priority;

  //List
  const todoList = document.getElementById(`todo-${todo.id}-list`);
  todoList.textContent = todo.priority;

};

export {modifyTodo}