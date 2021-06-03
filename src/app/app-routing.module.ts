import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoViewComponent} from "./component/todo-view/todo-view.component";

const routes: Routes = [
  { path: 'view', component: TodoViewComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
