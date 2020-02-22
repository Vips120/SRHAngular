import { Component } from "@angular/core";
@Component({
    selector: "app-parent",
    template: `
    <h1>PARENT COMPONENT</h1>
     <h3>{{userAddress}}</h3>

    <app-child 
    [userEmail]="email"
    (add)="Add($event)"
    ></app-child>
    `
})

export class ParentComponent {
    public email: string = "vs@gmail.com";
    public userAddress: string;
    constructor() { }
    Add(item) {
        this.userAddress = item;
    }
}