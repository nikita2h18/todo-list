import {Todo} from "../entity/Todo";
import {Injectable} from "@angular/core";
import {todos} from "../globals/todos";

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  pushTodo(todo: Todo) {
    todos.push(todo);
  }

  getTodoList(): Todo[] {
    return todos;
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
    return todos.splice(todos.indexOf(todo, 0), 1);
  }
}
