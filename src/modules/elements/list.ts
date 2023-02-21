import { List } from "../objects/list";
import { listArray } from "../..";

const createList = (list: List) => {

    //Update master todo list with this todo.
    listArray.push(list)

    //Create todo element.
    const listDiv = document.createElement("div");
    listDiv.setAttribute("id", `todo-${list.title}`);
    listDiv.setAttribute("class", "todo")

    const listTitle = document.createElement("p")
    listTitle.textContent = listTitle.title

    listDiv.appendChild(listTitle)

    const content = document.body;
    content.appendChild(listDiv);
    return listDiv;
};

export {
    createList
};