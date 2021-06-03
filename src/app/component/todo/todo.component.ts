import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Todo} from "../../entity/Todo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: Todo;
  private _isEdit = true;
  isSingleClick: boolean = true;

  constructor(
    private router: Router
  ) {
  }

  get isEdit(): boolean {
    return this._isEdit;
  }

  set isEdit(value: boolean) {
    this._isEdit = value;
  }

  navigate(): void {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.router.navigate(['routing'], {
          queryParams: {
            value: this.todo.value, isDone: this.todo.isDone
          }
        });
      }
    }, 250)
  }

  switchIsEdit(): void {
    this.isSingleClick = false;
    this.isEdit = !this.isEdit;
  }
}
