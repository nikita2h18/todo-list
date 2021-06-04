import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Todo} from "../../entity/Todo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: Todo;
  public isEdit = true;
  private isSingleClick: boolean = true;

  constructor(
    private router: Router
  ) {}

  navigate(): void {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.router.navigate(['routing'], {
          queryParams: { todo: JSON.stringify(this.todo) }
        });
      }
    }, 250)
  }

  switchIsEdit(): void {
    this.isSingleClick = false;
    this.isEdit = !this.isEdit;
  }
}
