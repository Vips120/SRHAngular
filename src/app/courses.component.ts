import { Component } from "@angular/core";
import { Courses } from "./courses";
@Component({
    selector: "app-courses",
    template: `
    <h1 
    [ngStyle]="{
              color: changeColor ? 'red' : 'green',
              fontSize: changeColor ? '25px' : '30px'

    }"
     (click)="ChangeColor()"
    >
    {{title}}
    </h1>
    <ul >
    <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    <hr/>
    <div
    [ngClass] = "{
        content1: changeColor,
        content2: !changeColor
    }"
    >
    
    </div>
    <button type="button" class="btn"
     [class.btn-danger]="changeColor"
     [class.btn-primary]="!changeColor"
    >Submit</button>
    <img [src]="imgUrl" [alt]="person">
    `,
    styles: [`
    .content1{
        width:400px;
        height:400px;
        background-color:orange;
    }
    .content2{
        width:300px; 
        height:300px;
        background-color:yellow;
    }
    
    `]
})

export class CourseComponent {
    public imgUrl = "../assets/img/1.jpg";
    public imgname = "person";
    public title: string = "COURSES";
    public changeColor: boolean = true;
    // public course = new Courses();
    public courses;
    constructor(private coursesBook: Courses ) {
        //never ever use tight coupling
    //   this.courses = this.course.getCourse();
        
        //loose coupling
        this.courses = this.coursesBook.getCourse();
    }
    // public courses: string[] = ["Angular", "reactjs", "typescript", "javascript"];
    ChangeColor() {
        this.changeColor = !this.changeColor; 
    }
}