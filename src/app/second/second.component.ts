import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  servercreationstatus;
  val;
  a;
  b:Number=10;
  constructor() { }

  ngOnInit() {
  }
  add(a){
    console.log(a);
this.val=this.b+a;
  }

  string(a){
    if(a==1){
      this.servercreationstatus="welcome to possible";
    }
     else if(a==2){
       this.servercreationstatus=this.b
     }
  }


}
