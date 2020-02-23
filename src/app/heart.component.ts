import { Component,Input,Output, EventEmitter } from "@angular/core";
import { Iuser } from './shared/model/user';
@Component({
    selector: "app-heart",
    template: `
    <h1>Heart LIKE</h1>
<i class="fa fa-heart fa-3x" aria-hidden="true"
 [class.fa-heart1]="heartColor"
 (click)="Like()"
 style="cursor:pointer"
></i> <span>{{count}}</span>

<hr/>
<ul *ngFor="let data of userData">
<li>{{data.id}}</li>
<li>{{data.name}}</li>
<li>{{data.email}}</li>
</ul>

<div class="form-group">
 <input type="text" class="form-control" placeholder="Enter name" #name>
</div>
<div class="form-group">
 <input type="email" class="form-control" placeholder="Enter email" #email>
</div>

<button type="button" class="btn btn-danger btn-md"
 (click)="Add(name,email)"
>Submit</button>


    `,
    styles: [`
       .fa-heart1 {
          color:red
       }
    
    `]
})

export class HeartComponent {
    @Input() public count: number;
    @Input() public userData: Iuser[];
    @Output() data = new EventEmitter<Iuser>();
    public heartColor: boolean = false;
   
    constructor() { }
    
    Like() {
        this.heartColor = !this.heartColor;
        this.count += this.heartColor ? 1 : -1;
    };
    Add(name, email) {
        let newUserObj: Iuser = {
            id: this.userData.length + 1,
            name: name.value,
            email: email.value
        };
        this.data.emit(newUserObj);
    }
}