import { createPage } from "../functions/createPage";
import { createTodo } from "../functions/createTodo";
import { todoExampleData } from "../objects/todo";

const createMainContent = () => {
  const createContent = () => {
    const createHeader = () => {
      const headerDiv = document.createElement("div")
      headerDiv.setAttribute("id", "header-div")

      const getFormattedDate = () => {
        const date = new Date();
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const dayOfWeek = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();
        const month = monthsOfYear[date.getMonth()];

        const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month}`;

        return formattedDate
      }

      const header = document.createElement("h1");
      header.textContent = "All Todos"

      const date = document.createElement("p")
      date.setAttribute("id", "header-date")
      date.textContent = getFormattedDate()

      headerDiv.appendChild(header)
      headerDiv.appendChild(date)
      return headerDiv;
    };

    const createTodoContainer = () => {
      const todoContainer = document.createElement("div");
      todoContainer.setAttribute("class", "todo-master-container")

      todoContainer.append(createTodo(todoExampleData))

      return todoContainer;
    }

    const createAddTodoBtn = () => {
      const btn = document.createElement("button");
      btn.setAttribute("type", "button");
      
      btn.textContent = "Add todo...";
      btn.setAttribute("class", "add-todo-btn")
      return btn;
    };

    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.append(createHeader(), createTodoContainer(), createAddTodoBtn());
    return content;
  };

  const main = document.createElement("main");
  main.append(
    createContent()
  );
  return main;
};

const createHomePage = () => {
  const homePage = createPage("home");
  homePage.appendChild(createMainContent());
  return homePage;
};

export { createHomePage };
