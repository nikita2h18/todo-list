import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Todo} from "../../entity/Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: Todo;
  private _isEdit = true;

  get isEdit(): boolean {
    return this._isEdit;
  }

  set isEdit(value: boolean) {
    this._isEdit = value;
  }

  switchIsEdit() {
    this.isEdit = !this.isEdit;
  }
}
