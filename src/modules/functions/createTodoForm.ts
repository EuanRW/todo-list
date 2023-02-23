import autosize from "autosize";
import { createTodo } from "../elements/todo";
import { listArray } from "../..";
import { todoArray } from "../..";
import { Todo } from "../objects/todo";
import { handleFormSubmit } from "./handleFormSubmit";

const createTodoForm = () => {
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
      input.classList.add("input");

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
      input.classList.add("input");

      autosize(input);

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
      input.setAttribute("placeholder", "Task due date.");
      input.setAttribute("title", "Please enter task due date here.");
      input.setAttribute("required", "");
      input.setAttribute("value", (new Date()).toISOString().split('T')[0]);
      input.classList.add("extra-input");

      field.append(input);
      return field;
    };

    const createPriorityInput = () => {
      const field = document.createElement("div");
      field.setAttribute("class", "field");

      const input = document.createElement("select");
      input.setAttribute("type", "text");
      input.setAttribute("id", `task_priority`);
      input.setAttribute("name", `task_priority`);
      input.setAttribute("maxlength", "30");
      input.setAttribute("placeholder", "Task priority");
      input.setAttribute(
        "title",
        "Please enter a valid name (must only contain letters or numbers)."
      );
      input.setAttribute("required", "");
      input.classList.add("extra-input");

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
      input.classList.add("extra-input");

      const listTitlesArray = listArray.map((list) => list.title);

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

    const createCancelBtn = () => {
      const btn = document.createElement("button");
      btn.setAttribute("type", "reset");
      btn.setAttribute("class", "cancel-task-button");
      btn.textContent = "Cancel";

      btn.addEventListener("click", () => {
        // Do nothing.
      });
      return btn;
    };

    const createSubmitBtn = () => {
      const btn = document.createElement("button");
      btn.setAttribute("type", "reset");
      btn.setAttribute("class", "submit-task-button");
      btn.textContent = "Submit";

      btn.addEventListener("click", () => {
        const todoMasterDiv = document.getElementById(
          "todo-master-container"
        );

        const dataObject = handleFormSubmit("#new-task-form")

        const todo: Todo = {
          id: Math.max(...todoArray.map(o => o.id))+1,
          title: dataObject.task_title.toString(),
          description: dataObject.task_description.toString(),
          dueDate: new Date(dataObject.task_due_date.toString()),
          list: listArray.find(o => o.title === dataObject.task_list.toString()),
          priority: dataObject.task_priority.toString() as ("High" | "Medium" | "Low"),
          status: "To do",
        };
        

        todoMasterDiv.append(
          createTodo(todo)
        )
      });

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
      );

      submitButtonDiv.append(createCancelBtn(), createSubmitBtn());

      formBottomFields.append(extraFieldsDiv, submitButtonDiv);
      return formBottomFields;
    };

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "");
    form.setAttribute("class", "task-form");
    form.setAttribute("id", "new-task-form");
    form.append(
      createTitleInput(),
      createDescriptionInput(),
      createExtraFields()
    );
    return form;
  };

  export {createTodoForm}