import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoButtonComponent {
  @Input() todo!: Todo;
  @Output() todoForDelete = new EventEmitter<Todo>();
  @Output() switchIsDone = new EventEmitter<Todo>();

  switch(): void {
    this.switchIsDone.emit(this.todo)
  }

  delete(): void {
    this.todoForDelete.emit(this.todo);
  }
}
