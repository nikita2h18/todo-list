import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TodoListService} from "../../service/TodoListService";
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosViewComponent {
  public button = 'all';
  public input = '';

  constructor(
    private todoListService: TodoListService
  ) {
  }

  resetInput(): void {
    this.input = ''
  }

  addTodo(input: string): void {
    this.resetInput();
    this.todoListService.addTodo(new Todo(input));
  }

  chooseButton(button: string): void {
    this.button = button;
  }

  deleteTodo(todo: Todo) {
    this.todoListService.deleteTodo(todo);
  }

  getAll() {
    return this.todoListService.getAll()
  }

  getProcessed() {
    return this.todoListService.getUndoneTodos();
  }

  getDone() {
    return this.todoListService.getDoneTodos();
  }
}
