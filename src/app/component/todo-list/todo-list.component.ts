import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent{
  @Input() todoList: Todo[] = [new Todo('', false)];
  inputDisplay = 'none';
  todoDisplay = 'flex'

  constructor() { }

  changeDisplay(): void {
    if(this.todoDisplay === 'flex') {
      this.inputDisplay = 'block';
      this.todoDisplay = 'none';
    } else {
      this.inputDisplay = 'none';
      this.todoDisplay = 'flex';
    }
  }

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
