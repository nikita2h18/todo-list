import {Component, Input, OnInit} from '@angular/core';
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
    console.log(this.route.snapshot);
    this.todo.value = (this.route.snapshot.queryParams.value as string);
    this.todo.isDone = !!this.route.snapshot.queryParams.isDone;
  }
}
