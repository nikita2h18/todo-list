import {Todo} from "../entity/Todo";

export class TodoListerService {
  todoList: Todo[] = [new Todo('Сходить в магазин', false)];

  pushTodo(todo: Todo) {
    this.todoList.push(todo);
  }

  getTodoList(): Todo[] {
    return this.todoList;
  }
}
