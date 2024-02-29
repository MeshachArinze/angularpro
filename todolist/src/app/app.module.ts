import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { ButtonComponent } from './component/button/button.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { TasksComponent } from './component/tasks/tasks.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddTaskComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    TaskItemComponent,
    TasksComponent,
  ],
  imports: [
  
    FontAwesomeModule,



  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
