import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosViewComponent} from "./component/todo-views/todos-view.component";
import {RoutingComponentComponent} from "./component/routing-component/routing-component.component";

const routes: Routes = [
  { path: 'views', component: TodosViewComponent },
  { path: '', redirectTo: '/views', pathMatch: 'full' },
  { path: 'routing', component: RoutingComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
