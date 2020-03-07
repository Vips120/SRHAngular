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
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StarComponent,
    ParentComponent,
    ChildComponent,
    HeartComponent,
    ProductComponent,
    CustomPipe,
    TemplateFormComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
