import {Todo} from "../entity/Todo";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: Todo[] = [new Todo('Сходить в магазин', false)];

  pushTodo(todo: Todo) {
    this.todoList.push(todo);
  }

  getTodoList(): Todo[] {
    return this.todoList;
  }

  getTodosByIsDone(filter: boolean): Todo[] {
    const todos: Todo[] = [];
    this.getTodoList().forEach(todo => {
      if (todo.isDone === filter) {
        todos.push(todo);
      }
    })

    return todos;
  }

  deleteTodo(todo: Todo): Todo[] {
    return this.todoList.splice(this.todoList.indexOf(todo, 0), 1);
  }
}
