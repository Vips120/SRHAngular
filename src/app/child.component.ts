import { Component,Input,Output,EventEmitter } from "@angular/core";
@Component({
    selector: "app-child",
    template: `
    <h1>CHILD COMPONENT</h1>
     <h3>{{userEmail}}</h3>
     <button type="button" class="btn btn-danger btn-md"
      (click)="SendAddress()"
     >
       Click
     </button>
     <input type="text" placeholder="enter name" class="form-control"
      #username
     >
     <button type="button" class="btn btn-danger btn-md"
      (click)="AddData(username)"
     >submit</button>
    `
})

export class ChildComponent {
    @Input() public userEmail: string;
    public Address: string = "Thane";
    @Output() add = new EventEmitter();
    constructor() { }
    SendAddress() {
        this.add.emit(this.Address);
    };

    AddData(data) {
        console.log(data.value);
    }
}