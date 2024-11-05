{
  // mapped type
  type Todo = {
    task: string;
    completed: boolean;
    dueDate: string;
  }

  const requiredTodo: Todo = {
    task: "Mouth wash",
    completed: false,
    dueDate: "11th Nov"
  }

  //mapped type
  // T---> task completed dueDate
  // Todo --> T --> task, completed, dueData

  type OptionalTodo = {
    [T in keyof Todo]?: Todo[T];
  }

  const task: OptionalTodo = {
    task: "Ami kaaj korbo na"
  }




}