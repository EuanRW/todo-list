import { createPage } from "../functions/createPage";
import { createTodo } from "../elements/todo";
import { todoExampleData } from "../objects/todo";
import { todoArray } from "../..";
import { listArray } from "../..";
import autosize from "autosize";

const createMainContent = () => {
  const createContent = () => {
    const createHeader = () => {
      // TODO: Add list creating button.
      const headerDiv = document.createElement("div");
      headerDiv.setAttribute("id", "header-div");

      const getFormattedDate = () => {
        const date = new Date();
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const monthsOfYear = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        const dayOfWeek = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();
        const month = monthsOfYear[date.getMonth()];

        const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month}`;

        return formattedDate;
      };

      const header = document.createElement("h1");
      header.textContent = "All Todos";

      const date = document.createElement("p");
      date.setAttribute("id", "header-date");
      date.textContent = getFormattedDate();

      headerDiv.appendChild(header);
      headerDiv.appendChild(date);
      return headerDiv;
    };

    const createTodoContainer = () => {
      const todoContainer = document.createElement("div");
      todoContainer.setAttribute("id", "todo-master-container");

      todoContainer.append(createTodo(todoExampleData));

      return todoContainer;
    };

    const createAddTodoBtn = () => {
      const btn = document.createElement("button");
      btn.setAttribute("type", "button");

      btn.textContent = "Add todo...";
      btn.setAttribute("class", "add-todo-btn");

      // TODO: Create Add Todo button functionality.
      return btn;
    };

    const createForm = () => {
      const createTitleInput = () => {
        const field = document.createElement("div");
        field.setAttribute("class", "field");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", `task_title`);
        input.setAttribute("name", `task_title`);
        input.setAttribute("maxlength", "30");
        input.setAttribute("placeholder", "Task title");
        input.setAttribute(
          "title",
          "Please enter a valid name (must only contain letters or numbers)."
        );
        input.setAttribute("required", "");
        input.classList.add("input")

        field.append(input);
        return field;
      };

      const createDescriptionInput = () => {
        const field = document.createElement("div");
        field.setAttribute("class", "field");

        const input = document.createElement("textarea");
        input.setAttribute("id", `task_description`);
        input.setAttribute("name", `task_description`);
        input.setAttribute("cols", "20");
        input.setAttribute("rows", "1");
        input.setAttribute("placeholder", "Task description");
        input.setAttribute("title", "Please enter your message here.");
        input.setAttribute("required", "");
        input.classList.add("input")

        autosize(input)

        field.append(input);
        return field;
      };

      const createDueDateInput = () => {
        const field = document.createElement("div");
        field.setAttribute("class", "field");

        const input = document.createElement("input");
        input.setAttribute("type", "date");
        input.setAttribute("id", `task_due_date`);
        input.setAttribute("name", `task_due_date`);
        input.setAttribute("required", "");
        input.classList.add("extra-input")


        field.append(input);
        return field;
      };

      const createPriorityInput = () => {
        const field = document.createElement("div");
        field.setAttribute("class", "field");

        const input = document.createElement("select");
        input.setAttribute("type", "text");
        input.setAttribute("id", `task_title`);
        input.setAttribute("name", `task_title`);
        input.setAttribute("maxlength", "30");
        input.setAttribute("placeholder", "Task priority");
        input.setAttribute(
          "title",
          "Please enter a valid name (must only contain letters or numbers)."
        );
        input.setAttribute("required", "");
        input.classList.add("extra-input")


        const option1 = document.createElement("option");
        option1.value = "High";
        option1.text = "High";

        const option2 = document.createElement("option");
        option2.value = "Medium";
        option2.text = "Medium";

        const option3 = document.createElement("option");
        option3.value = "Low";
        option3.text = "Low";

        input.appendChild(option1);
        input.appendChild(option2);
        input.appendChild(option3);

        field.append(input);
        return field;
      };

      const createListInput = () => {
        const field = document.createElement("div");
        field.setAttribute("class", "field");

        const input = document.createElement("select");
        input.setAttribute("type", "text");
        input.setAttribute("id", `task_list`);
        input.setAttribute("name", `task_list`);
        input.setAttribute("maxlength", "30");
        input.setAttribute("placeholder", "Task list");
        input.setAttribute(
          "title",
          "Please enter a valid name (must only contain letters or numbers)."
        );
        input.setAttribute("required", "");
        input.classList.add("extra-input")


        const listTitlesArray = listArray.map(list => list.title);

        //Create and append the options
        for (var i = 0; i < listTitlesArray.length; i++) {
          var option = document.createElement("option");
          option.value = listTitlesArray[i];
          option.text = listTitlesArray[i];
          input.appendChild(option);
        }

        field.append(input);
        return field;
      };

      const createSubmitBtn = () => {
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "submit-task-button");
        btn.textContent = "Submit";
        
        
        btn.addEventListener("click", (() => {
          // TODO: Add labels to form elements so this can read them!
          const formData = new FormData(document.querySelector('#new-task-form'))
          formData.forEach(file => console.log("File: ", file));
        }))
        return btn;
      };

      const createExtraFields = () => {
        const formBottomFields = document.createElement("div");
        formBottomFields.setAttribute("class", "form-bottom-fields-container");

        const extraFieldsDiv = document.createElement("div");
        extraFieldsDiv.setAttribute("class", "extra-fields-container");

        const submitButtonDiv = document.createElement("div");
        submitButtonDiv.setAttribute("class", "submit-button-container");

        extraFieldsDiv.append(
          createDueDateInput(),
          createPriorityInput(),
          createListInput()
        )

        submitButtonDiv.append(
          createSubmitBtn()
        )

        formBottomFields.append(
          extraFieldsDiv,
          submitButtonDiv
        )
        return formBottomFields
      }

      const form = document.createElement("form");
      form.setAttribute("action", "");
      form.setAttribute("method", "");
      form.setAttribute("class", "task-form");
      form.setAttribute("id", "new-task-form")
      form.append(
        createTitleInput(),
        createDescriptionInput(),
        createExtraFields(),
      );
      return form;
    };

    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.append(
      createHeader(),
      createTodoContainer(),
      createAddTodoBtn(),
      createForm()
    );
    return content;
  };

  const main = document.createElement("main");
  main.append(createContent());
  return main;
};

const createHomePage = () => {
  const homePage = createPage("home");
  homePage.appendChild(createMainContent());
  return homePage;
};

export { createHomePage };
