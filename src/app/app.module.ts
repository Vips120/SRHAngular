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
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { About3Component } from './about3/about3.component';
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
    ReactiveformComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component,
    About3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
