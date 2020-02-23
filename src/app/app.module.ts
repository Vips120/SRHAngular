import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from "./courses.component";
import { Courses } from "./courses";
import {StarComponent } from "./star.component";
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { HeartComponent } from './heart.component';
import { ProductComponent } from './product.component';
import { CustomPipe } from './custom.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StarComponent,
    ParentComponent,
    ChildComponent,
    HeartComponent,
    ProductComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
