import { Todo } from "../objects/todo";
import { todoArray } from "../..";
import trash from "../../img/trash.svg"
import { removeTodo } from "../functions/removeTodo";

const createTodo = (todo: Todo) => {

    //Update master todo list with this todo.
    todoArray.push(todo)

    //Create todo element.
    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", `todo-${todo.id}`);
    todoDiv.setAttribute("class", "todo")

    const todoTitle = document.createElement("p")
    todoTitle.textContent = todo.title

    const createMetaDataDiv = () => {
        const todoMetaDataDiv = document.createElement("div")
        todoMetaDataDiv.setAttribute("class", "todo-meta-data-div")

        const dueDate = document.createElement("p")
        const today = new Date()
        const differenceInMilliseconds: number = todo.dueDate.getTime() - today.getTime();
        const differenceInDays: number = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        
        if (differenceInDays > 0) {
            dueDate.textContent = differenceInDays + " Days to go"
            dueDate.classList.add("todo-due-date")
        } else {
            dueDate.textContent = Math.abs(differenceInDays) + " Days ago"
            dueDate.classList.add("todo-due-date-overdue")
        }

        const status = document.createElement("p")
        status.textContent = todo.status
        status.setAttribute("class", "status-list")

        if (todo.status == "Complete") {
            status.classList.add("todo-status-complete")
        } else if (todo.status == "To do") {
            status.classList.add("todo-status-to-do")
        }

        const priority = document.createElement("p")
        priority.textContent = todo.priority
        priority.setAttribute("class", "priority-list")

        if (todo.priority == "High") {
            priority.classList.add("todo-priority-high")
        } else if (todo.priority == "Medium") {
            priority.classList.add("todo-priority-medium")
        } else if (todo.priority == "Low") {
            priority.classList.add("todo-priority-low")
        }

        const list = document.createElement("p")
        list.textContent = todo.list.title
        list.setAttribute("class", "todo-list")

        const deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("class", "delete-icon")
        deleteIcon.src = trash;
        deleteIcon.alt = "Delete task icon.";
        deleteIcon.addEventListener("click", () => {
            removeTodo(todoDiv)
          })

        todoMetaDataDiv.append(
            dueDate,
            status,
            priority,
            list,
            deleteIcon
            
        )

        return todoMetaDataDiv
    }

    todoDiv.appendChild(todoTitle)
    todoDiv.appendChild(createMetaDataDiv())

    const content = document.body;
    content.appendChild(todoDiv);
    return todoDiv;
};

export {
    createTodo
};