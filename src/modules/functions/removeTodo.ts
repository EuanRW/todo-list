import { Todo } from "../objects/todo";
import { todoArray } from "../..";

const removeTodo = (todoDiv: HTMLElement) => {
    // Remove from todoArray
    const id = +todoDiv.id.replace('todo-','');

    todoArray.splice(todoArray.findIndex(item => item.id === id), 1)

    // Remove todo element.
    todoDiv.remove()

  };
  
  export {removeTodo}