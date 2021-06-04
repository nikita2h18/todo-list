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

  doneTodos() {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => todo.isDone)));
  }

  undoneTodos() {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => !todo.isDone)));
  }

  push(todo: Todo) {
    this.todos.push(todo);
    this.todoListSubject.next(this.todos);
  }

  get() {
    return this.todoListSubject.asObservable();
  }

  delete(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo, 0), 1);
    this.todoListSubject.next(this.todos);
  }
}
