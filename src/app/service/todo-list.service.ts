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
  public todoListSubject = new BehaviorSubject<Todo[]>(this.todos);

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/');
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

  add(todo: Todo): Observable<Todo[]> {
    return this.http.post('http://localhost:3000/all', todo) as Observable<Todo[]>;
  }

  delete(todo: Todo): Observable<Todo[]> {
    return this.http.post('http://localhost:3000/delete', todo) as Observable<Todo[]>;
  }

  switch(todo: Todo): Observable<Todo[]> {
    return this.http.put('http://localhost:3000/switch', todo) as Observable<Todo[]>;
  }
}
