import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from "./courses.component";
import { Courses } from "./courses";
import {StarComponent } from "./star.component";
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StarComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
