import {Todo} from "./Todo";

export class TodoListContainer {
  todoList: Todo[] = [];

  pushTodo(todo: Todo) {
    this.todoList.push(todo);
  }

  getTodoList(): Todo[] {
    return this.todoList;
  }
}
