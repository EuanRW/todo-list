import { List } from "./list";
import { listExampleData } from "./list";

export interface Todo {
  id: Number;
  title: string;
  description: string;
  dueDate: Date;
  list: List;
  status: "To do" | "Complete"
  priority: "High" | "Medium" | "Low"; // priority can only be one of these three values
}

const todoExampleData: Todo = {
  id: 1,
  title: "Complete TypeScript project",
  description: "Finish building a todo app with TypeScript",
  dueDate: new Date("2023-03-15"),
  list: listExampleData,
  priority: "High",
  status: "To do"
};

export {todoExampleData}
