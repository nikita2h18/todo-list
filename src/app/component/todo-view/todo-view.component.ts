import {Component, ViewEncapsulation} from '@angular/core';
import {TodoListService} from "../../service/TodoListService";
import {Todo} from "../../entity/Todo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoViewComponent {
  private isTodoDone = false;
  private isTodoProcessed = false;
  private _input = '';
  private todoListService = new TodoListService();

  get input(): string {
    return this._input;
  }

  set input(value: string) {
    this._input = value;
  }

  resetInput(): void {
    this.input = ''
  }

  addTodo(message: string): void {
    this.resetInput();
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
