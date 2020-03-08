import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { Iuser } from '../shared/model/user';
import { RegEx } from "./regx";
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  public userRegister: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userRegister = this.fb.group({
      'username': ['', [Validators.required,Validators.minLength(5),RegEx.Username]],
      'userid': ['',[Validators.required,RegEx.UserId]],
      'UserLogin': this.fb.group({
        'emailid': ['',[Validators.required, RegEx.EmailId]],
        'password':['',[Validators.required, RegEx.Password]]
      })
    })
  };

  Save(item: Iuser) {
    this.submitted = true;
    if (!this.userRegister.valid) { return;}
    console.log(item);
  }

}
