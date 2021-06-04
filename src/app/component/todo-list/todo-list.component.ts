import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Todo} from "../../entity/Todo";
import {TodoListService} from "../../service/TodoListService";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todos!: Observable<Todo[]>;
  @Output() event = new EventEmitter<Todo>();

  delete(todo: Todo) {
    this.event.emit(todo);
  }
}
