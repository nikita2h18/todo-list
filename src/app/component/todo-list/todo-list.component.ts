import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Todo} from "../../entity/Todo";
import {TodoListService} from "../../service/TodoListService";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent {
  @Input() todoList!: Todo[];

  constructor(
    private todoListService: TodoListService
  ) {
  }

  deleteTodo(todo: Todo): Todo[] {
    return this.todoListService.deleteTodo(todo, this.todoList);
  }
}
