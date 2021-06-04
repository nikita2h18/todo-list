import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../entity/Todo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-routing-component',
  templateUrl: './routing-component.component.html',
})
export class RoutingComponentComponent implements OnInit{
  todo: Todo = new Todo('', false);
  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const todo = JSON.parse(this.route.snapshot.queryParams.todo)
    this.todo.value = todo.value;
    this.todo.isDone = todo.isDone;
  }
}
