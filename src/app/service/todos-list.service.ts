import {Todo} from "../entity/todo";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class TodosListService {
  private todos: Todo[] = [new Todo('Сходить в магазин')];
  private todoListSubject = new BehaviorSubject<Todo[]>(this.todos);

  getAll(): Observable<Todo[]> {
    return this.todoListSubject.asObservable();
  }

  getDone(): Observable<Todo[]> {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => todo.isDone)));
  }

  getProcessed(): Observable<Todo[]> {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => !todo.isDone)));
  }

  add(todo: Todo): void {
    this.todos.push(todo);
    this.todoListSubject.next(this.todos);
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(t => t.id !== todo.id)
    this.todoListSubject.next(this.todos);
  }

  switch(todo: Todo): void {
    this.todos.forEach(t => {
      if (t.id === todo.id) {
        t.isDone = !t.isDone
      }
    });
    this.todoListSubject.next(this.todos);
  }
}
