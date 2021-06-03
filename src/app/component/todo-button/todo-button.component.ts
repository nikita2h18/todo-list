import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.scss']
})
export class TodoButtonComponent {
  @Input() todo!: Todo;
  @Input() todoList!: Todo[];
  @Output() event = new EventEmitter<Todo>();

  constructor() {
  }

  switchIsDone(message: string): void {
    this.todoList.forEach((todo: Todo) => {
      if (todo.value === message) {
        todo.isDone = !todo.isDone;
      }
    })
  }

  deleteTodo(): void {
    this.event.emit(this.todo);
  }
}
