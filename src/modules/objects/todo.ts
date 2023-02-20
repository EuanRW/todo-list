export interface Todo {
  id: Number;
  title: string;
  description: string;
  dueDate: Date;
  list: string;
  status: "To do" | "In Progress" | "Complete"
  priority: "High" | "Medium" | "Low"; // priority can only be one of these three values
}

const todoExampleData: Todo = {
  id: 1,
  title: "Complete TypeScript project",
  description: "Finish building a todo app with TypeScript",
  dueDate: new Date("2023-03-15"),
  list: "Personal",
  priority: "High",
  status: "To do"
};

export {todoExampleData}
