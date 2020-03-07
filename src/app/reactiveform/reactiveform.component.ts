import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { Iuser } from '../shared/model/user';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  public userRegister: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userRegister = this.fb.group({
      'username': ['', [Validators.required,Validators.minLength(5)]],
      'userid': ['',Validators.required],
      'UserLogin': this.fb.group({
        'emailid': ['',Validators.required],
        'password':['',Validators.required]
      })
    })
  };

  Save(item: Iuser) {
    console.log(item);
  }

}
