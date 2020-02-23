import { Component } from '@angular/core';
import { Iuser } from './shared/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  public like: number = 10;
  public userData: Iuser[] = [{
    id: 1,
    name: "john",
    email: "j@gmail.com"
  },
    {
      id: 2,
      name: "Mak",
      email:"mak@yahoo.com"
    },
    {
      id: 3,
      name: "mj",
      email:"mj@outlook.com"
    }
  ];

  AddNewUser(item:Iuser) {
    this.userData.push(item);
  }
}
