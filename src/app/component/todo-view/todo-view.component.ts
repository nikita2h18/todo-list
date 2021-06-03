import {Component, ViewEncapsulation} from '@angular/core';
import {TodoListerService} from "../../service/TodoListerService";
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoViewComponent {
  isTodoDone = false;
  isTodoProcessed = false;
  private _todoMessage = '';
  private todoListContainer = new TodoListerService();

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
    this.todoListContainer.pushTodo(new Todo(message, false));
  }

  getAllTodos(): Todo[] {
    return this.todoListContainer.getTodoList();
  }

  getTodosByIsDoneValue(filter: boolean): Todo[] {
    const todos: Todo[] = [];
    this.getAllTodos().forEach(todo => {
      if (todo.isDone === filter) {
        todos.push(todo);
      }
    })

    return todos;
  }

  changeFlag(isDone: boolean, isProcessed: boolean): void {
    this.isTodoDone = isDone;
    this.isTodoProcessed = isProcessed;
  }

  getFilteredTodos(): Todo[] {
    if (this.isTodoProcessed) {
      this.isTodoDone = false;
      return this.getTodosByIsDoneValue(false);
    }

    if (this.isTodoDone) {
      this.isTodoProcessed = false;
      return this.getTodosByIsDoneValue(true);
    }

    return this.getAllTodos();
  }
}
