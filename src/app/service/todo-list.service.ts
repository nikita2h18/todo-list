import {Todo} from "../entity/todo";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todos: Todo[] = [new Todo('Сходить в магазин')];
  private todoListSubject = new BehaviorSubject<Todo[]>(this.todos);

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<Todo[]> {
    this.http.get<Todo[]>('http://localhost:3000/').subscribe(
      todoList => {
        this.todos = todoList
        this.todoListSubject.next(this.todos)
      }
    )
    return this.todoListSubject;
  }

  setTodos(todos: Todo[]) {
    this.todos = todos;
    this.todoListSubject.next(this.todos);
  }

  getDone(): Observable<Todo[]> {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => todo.isDone)));
  }

  getProcessed(): Observable<Todo[]> {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => !todo.isDone)));
  }

  add(todo: Todo): void {
    this.http.post('http://localhost:3000/all', todo).subscribe(todos => this.setTodos(todos as Todo[]));
  }

  delete(todo: Todo): void {
    this.http.post('http://localhost:3000/delete', todo).subscribe(todos => this.setTodos(todos as Todo[]));
  }

  switch(todo: Todo): void {
    this.http.put('http://localhost:3000/switch', todo).subscribe(todos => this.setTodos(todos as Todo[]));
  }
}
