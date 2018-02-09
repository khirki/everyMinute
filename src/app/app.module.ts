import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TasksDetailComponent } from './tasks/tasks-detail/tasks-detail.component';
import { TasksItemComponent } from './tasks/tasks-list/tasks-item/tasks-item.component';
import { DaylogComponent } from './daylog/daylog.component';
import { DaylogEditComponent } from './daylog/daylog-edit/daylog-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TasksListComponent,
    TasksDetailComponent,
    TasksItemComponent,
    DaylogComponent,
    DaylogEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
