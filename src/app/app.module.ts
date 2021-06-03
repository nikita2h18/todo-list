import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoViewComponent} from './component/todo-view/todo-view.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {TodoListComponent} from './component/todo-list/todo-list.component';
import {TodoComponent} from "./component/todo/todo.component";
import { TodoButtonComponent } from './component/todo-button/todo-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoViewComponent,
    TodoListComponent,
    TodoButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
