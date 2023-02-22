import { Todo } from "../objects/todo";
import { todoArray } from "../..";

const removeTodo = (todoDiv: HTMLElement) => {
    // Remove from todoArray
    const id = +todoDiv.id.replace('todo-','');

    todoArray.map(item => item.id).indexOf(id);

    // Remove todo element.
    todoDiv.remove()

  };
  
  export {removeTodo}