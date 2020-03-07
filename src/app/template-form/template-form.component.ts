import { Component, OnInit } from '@angular/core';
import { User } from "../shared/model/template";
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public model = new User();
  constructor() { }

  ngOnInit() {
  }
  Save(data) {
    console.log(data);
  }

}
