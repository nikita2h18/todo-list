import {Component, ViewEncapsulation} from '@angular/core';
import {TodoListContainer} from "../../entity/TodoListContainer";
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoComponent {
  private _todoMessage = '';
  private todoListContainer = new TodoListContainer();

  constructor() {
  }

  get todoMessage(): string {
    return this._todoMessage;
  }

  set todoMessage(value: string) {
    this._todoMessage = value;
  }

  clearValue() {
    this._todoMessage = '';
  }

  addTodo(message: string) {
    this.clearValue();
    this.todoListContainer.pushTodo(new Todo(message, false));
  }

  getTodos(): Todo[] {
    return this.todoListContainer.getTodoList();
  }

  getProcessedTodos(): Todo[] {
    const todos: Todo[] = [];
    this.getTodos().forEach(todo => {
      if (!todo.isDone) {
        todos.push(todo);
      }
    })

    return todos;
  }
}
