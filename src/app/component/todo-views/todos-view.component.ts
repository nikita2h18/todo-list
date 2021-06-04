import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TodoListService} from "../../service/todo-list.service";
import {Todo} from "../../entity/todo";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosViewComponent {
  public input = '';
  public currentTodos = this.getAll();

  constructor(
    private todoListService: TodoListService
  ) {}

  resetInput(): void {
    this.input = ''
  }

  addTodo(input: string): void {
    this.resetInput();
    this.todoListService.add(new Todo(input));
  }

  getAll(): Observable<Todo[]> {
    return this.todoListService.getAll()
  }

  getProcessed(): Observable<Todo[]> {
    return this.todoListService.getProcessed();
  }

  getDone(): Observable<Todo[]> {
    return this.todoListService.getDone();
  }

  delete(todo: Todo): void {
    this.todoListService.delete(todo);
  }

  switch(todo: Todo): void {
    this.todoListService.switch(todo);
  }
}
