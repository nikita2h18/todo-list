import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent {
  @Input() todoList: any;

  constructor() { }

  switchIsDone(message: string): void {
    this.todoList.forEach((todo: Todo) => {
      if (todo.message === message) {
        todo.isDone = !todo.isDone;
      }
    })
  }

  deleteTodo(todo: Todo): void {
    this.todoList.splice(this.todoList.indexOf(todo, 0), 1);
  }
}
