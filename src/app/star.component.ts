import { Component } from "@angular/core";

@Component({
    selector: "app-star",
    template: `
    <h1>STAR RATING</h1>
    <i class="fa fa-3x" aria-hidden="true"
    [class.fa-star-o]="!isActive"
    [class.fa-star]="isActive"
    (click)="LikeStar()"
    >
    </i>
    <hr/>
    <button type="button" class="btn btn-danger btn-md"
    (click)="person=male"
    >Male</button>
    <button type="button" class="btn btn-info btn-md"
    (click)="person=female"
    >female</button>
    <div *ngIf="person">
    <img src="{{person.imgUrl}}">
    <h3>{{person.name}}</h3>
    </div>
    `,
    styles: [`
       button{
           margin:20px
       }
     
    `]
})

export class StarComponent {
    public isActive: boolean = false;
    public male = {
        name: "John Doe",
        imgUrl: "../assets/img/face2.jpg"
    };
    public female = {
        name: "Emma Doe",
        imgUrl: "../assets/img/face1.jpg"
    };
    public person;
    constructor() { };
    LikeStar() {
        this.isActive = !this.isActive;
 }

}