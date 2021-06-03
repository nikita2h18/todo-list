import {Component, ViewEncapsulation} from '@angular/core';
import {TodoListService} from "../../service/TodoListService";
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoViewComponent {
  private isTodoDone = false;
  private isTodoProcessed = false;
  private _todoMessage = '';
  private todoListService = new TodoListService();

  constructor() {
  }

  get todoMessage(): string {
    return this._todoMessage;
  }

  set todoMessage(value: string) {
    this._todoMessage = value;
  }

  clearValue(): void {
    this._todoMessage = '';
  }

  addTodo(message: string): void {
    this.clearValue();
    this.todoListService.pushTodo(new Todo(message, false));
  }

  chooseButton(isDone: boolean, isProcessed: boolean): void {
    this.isTodoDone = isDone;
    this.isTodoProcessed = isProcessed;
  }

  getTodo(): Todo[] {
    if (this.isTodoProcessed) {
      this.isTodoDone = false;
      return this.todoListService.getTodosByIsDone(false);
    }

    if (this.isTodoDone) {
      this.isTodoProcessed = false;
      return this.todoListService.getTodosByIsDone(true);
    }

    return this.todoListService.getTodoList();
  }
}
