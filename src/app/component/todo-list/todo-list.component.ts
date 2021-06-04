import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Todo} from "../../entity/todo";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todos!: Observable<Todo[]>;
  @Output() delete = new EventEmitter<Todo>();
  @Output() switchIsDone = new EventEmitter<Todo>();

  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }

  onSwitch(todo: Todo) {
    this.switchIsDone.emit(todo);
  }
}
