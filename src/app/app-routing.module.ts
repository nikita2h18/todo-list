import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoViewComponent} from "./component/todo-view/todo-view.component";
import {RoutingComponentComponent} from "./component/routing-component/routing-component.component";

const routes: Routes = [
  { path: 'view', component: TodoViewComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'routing', component: RoutingComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
