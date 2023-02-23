import { Todo } from "../objects/todo";
import { todoArray } from "../..";
import trash from "../../img/trash.svg";
import unchecked from "../../img/circle.svg";
import checked from "../../img/check-circle.svg";
import { removeTodo } from "../functions/removeTodo";
import { formatDate } from "../functions/formatDate";
import { modifyTodo } from "../functions/modifyTodo";

const createTodo = (todo: Todo) => {
  //Update master todo list with this todo.
  todoArray.push(todo);

  //Create todo element.
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("id", `todo-${todo.id}`);
  todoDiv.setAttribute("class", "todo");

  const createTodoLeftDiv = () => {
    const todoLeftDiv = document.createElement("div");
    todoLeftDiv.setAttribute("class", "todo-left-container");

    const createCheckIconContainer = () => {
      const checkDiv = document.createElement("div");
      checkDiv.setAttribute("id", `check-container`);

      const createUncheckedIcon = () => {
        const icon = document.createElement("img");
        icon.setAttribute("class", "check-icon");
        icon.setAttribute("id", "unchecked-icon");
        icon.src = unchecked;
        icon.alt = "Unchecked task icon.";
        icon.addEventListener("click", () => {
          icon.remove();
          checkDiv.append(createCheckedIcon());
          const checkedTodo = todo
          checkedTodo.status = "Complete"
          modifyTodo(checkedTodo)
        });
        return icon;
      };

      const createCheckedIcon = () => {
        const icon = document.createElement("img");
        icon.setAttribute("class", "check-icon");
        icon.setAttribute("id", "checked-icon");
        icon.src = checked;
        icon.alt = "Checked task icon.";
        icon.addEventListener("click", () => {
          icon.remove();
          checkDiv.append(createUncheckedIcon());
          const uncheckedTodo = todo
          uncheckedTodo.status = "To do"
          modifyTodo(uncheckedTodo)
        });
        return icon;
      };

      checkDiv.append(createUncheckedIcon());

      return checkDiv;
    };

    const todoTitle = document.createElement("p");
    todoTitle.setAttribute("id", `todo-${todo.id}-title`);
    todoTitle.textContent = todo.title;

    todoLeftDiv.append(createCheckIconContainer(), todoTitle);

    return todoLeftDiv;
  };

  const createMetaDataDiv = () => {
    const todoMetaDataDiv = document.createElement("div");
    todoMetaDataDiv.setAttribute("class", "todo-meta-data-div");

    const dueDate = document.createElement("p");
    dueDate.setAttribute("id", `todo-${todo.id}-due-date`);

    const today = new Date();
    const differenceInMilliseconds: number =
      todo.dueDate.getTime() - today.getTime();
    const differenceInDays: number = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays > 0) {
      dueDate.classList.add("todo-due-date");
    } else {
      dueDate.classList.add("todo-due-date-overdue");
    }

    dueDate.textContent = formatDate(todo.dueDate);

    const status = document.createElement("p");
    status.setAttribute("id", `todo-${todo.id}-status`);
    status.textContent = todo.status;
    status.setAttribute("class", "status");

    if (todo.status == "Complete") {
      status.classList.add("todo-status-complete");
    } else if (todo.status == "To do") {
      status.classList.add("todo-status-to-do");
    }

    const priority = document.createElement("p");
    priority.setAttribute("id", `todo-${todo.id}-priority`);
    priority.textContent = todo.priority;
    priority.setAttribute("class", "priority");

    if (todo.priority == "High") {
      priority.classList.add("todo-priority-high");
    } else if (todo.priority == "Medium") {
      priority.classList.add("todo-priority-medium");
    } else if (todo.priority == "Low") {
      priority.classList.add("todo-priority-low");
    }

    const list = document.createElement("p");
    list.setAttribute("id", `todo-${todo.id}-list`);
    list.textContent = todo.list.title;
    list.setAttribute("class", "todo-list");

    const deleteIcon = document.createElement("img");
    deleteIcon.setAttribute("class", "delete-icon");
    deleteIcon.src = trash;
    deleteIcon.alt = "Delete task icon.";
    deleteIcon.addEventListener("click", () => {
      removeTodo(todoDiv);
    });

    todoMetaDataDiv.append(dueDate, status, priority, list, deleteIcon);

    return todoMetaDataDiv;
  };

  todoDiv.append(createTodoLeftDiv(), createMetaDataDiv());

  const content = document.body;
  content.appendChild(todoDiv);
  return todoDiv;
};

export { createTodo };
