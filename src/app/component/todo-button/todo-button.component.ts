import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.scss'],
})
export class TodoButtonComponent {
  @Input() todo!: Todo;
  @Output() event = new EventEmitter<Todo>();

  switchIsDone(id: string): void {
    if (this.todo.id === id) {
      this.todo.isDone = !this.todo.isDone;

    }
  }

  deleteTodo(): void {
    this.event.emit(this.todo);
  }
}
