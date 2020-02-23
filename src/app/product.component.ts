import { Component } from "@angular/core";
@Component({
    selector: "app-product",
    template: `
    <h1>PRODUCT & USER DETAILS </h1>
     <h1 *ngIf="username.length >=5; else error">{{username}}</h1>
     <ng-template #error>
     <h2>username must be a 5 characters</h2>
     </ng-template>

     <hr/>
     <button type="button" class="btn btn-info btn-md"
      (click)="tab='home'"
     >Home</button>
     <button type="button" class="btn btn-danger btn-md"
     (click)="tab='about'"
     >About</button>
     <div [ngSwitch]="tab" *ngIf="tab">
     <h2 *ngSwitchCase="'home'">HOME SECTION </h2>
     <h2 *ngSwitchCase="'about'">ABOUT SECTION </h2>
     <h2 *ngSwitchDefault>NOT FOUND</h2>
     </div>
     <hr/>
<div class="row">
 <div class="col-md-8">
 <div class="card text-white bg-primary">
  <div class="card-body">
    <h4 class="card-title">
    <ng-content select=".title"></ng-content>
    </h4>
    <p class="card-text">Text --> <ng-content  select=".body"></ng-content></p>
  </div>
</div>
 
 </div>

</div>

<hr/>

<ul>
<li>{{user.name | titlecase}}</li>
<li>{{user.salary | currency:"EUR"}}</li>
<li>{{user.rank | number}}</li>
<li>{{user.fltno | number:"2.2-2"}}</li>
<li>{{user.date | date:"MM/dd/yyyy"}}</li>
<li>{{user | json}}</li>
</ul>

<a href="https://www.facebook.com/flipkart/">
  
{{heading | content:10 }}</a>

    `
})

export class ProductComponent {
    public username: string = "Vipul";
    public tab;
    public user = {
        name: "sagar sabat",
        salary: 450000,
        rank: 45555115616,
        fltno: 8.98665,
        date: Date.now().toString()
    };
    public heading: string = "Flipkart Online Shopping App - Download app for a delightful shopping experience. Online shopping with Flipkart is very easy as you get to shop from the ";
    constructor() { }
}