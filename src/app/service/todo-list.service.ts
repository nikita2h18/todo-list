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

  getDone(): Observable<Todo[]> {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => todo.isDone)));
  }

  getProcessed(): Observable<Todo[]> {
    return this.todoListSubject.pipe(map(todos => todos.filter(todo => !todo.isDone)));
  }

  add(todo: Todo): void {
    this.http.post('http://localhost:3000/all', todo).subscribe(list => {
      this.todos = list as Todo[];
      this.todoListSubject.next(this.todos);
    });
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
