import {Todo} from "../entity/Todo";
import {Injectable} from "@angular/core";
import {todoList} from "../globals/todo-list";

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  pushTodo(todo: Todo) {
    todoList.push(todo);
  }

  getTodoList(): Todo[] {
    return todoList;
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
    return todoList.splice(todoList.indexOf(todo, 0), 1);
  }
}
