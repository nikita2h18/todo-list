import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../entity/todo";

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoButtonComponent {
  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<Todo>();
  @Output() switchIsDone = new EventEmitter<Todo>();

  onSwitch(): void {
    this.switchIsDone.emit(this.todo)
  }

  onDelete(): void {
    this.delete.emit(this.todo);
  }
}
