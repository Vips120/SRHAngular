import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
@Component({
  selector: 'app-about3',
  templateUrl: './about3.component.html',
  styleUrls: ['./about3.component.css']
})
export class About3Component implements OnInit {
  public ProId;
  constructor(private AR: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.AR.params.subscribe(data => {
      console.log(data);
      let id = data['id'];
      console.log(id);
      this.ProId = id;
    })
  };
  GOBACK() {
    this.router.navigateByUrl("/about");
  }

}
