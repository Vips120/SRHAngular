import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public users = [{
    id: 1,
    name:"about3"
  },
  {
    id: 2,
    name:"about4"
    },
    {
      id: 3,
      name:"about5"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
