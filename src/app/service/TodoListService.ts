import {Todo} from "../entity/Todo";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todos: Todo[] = [new Todo('Сходить в магазин')];
  private todoListSubject = new BehaviorSubject<Todo[]>(this.todos);

  getAll() {
    return this.todoListSubject.asObservable();
  }

  getDoneTodos() {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => todo.isDone)));
  }

  getProcessedTodos() {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => !todo.isDone)));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todoListSubject.next(this.todos);
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo, 0), 1);
    this.todoListSubject.next(this.todos);
  }
}
