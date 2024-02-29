import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { ButtonComponent } from './component/button/button.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { TasksComponent } from './component/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddTaskComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    TaskItemComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
