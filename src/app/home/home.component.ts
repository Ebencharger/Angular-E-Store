import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
namet=0;
 newname=[{name:"", qt:0, pr:0, tt:0}];
 grandtot=this.newname[this.newname.length-1].qt * this.newname[this.newname.length-1].pr;
//  show=false;
//  fruit=["Mango", "Orange", "Apple"];
  constructor() { }

  ngOnInit(): void {
  }
  apply(){
   if (this.newname[this.newname.length-1].qt && this.newname[this.newname.length-1].pr) {
    this.newname.push({name:"", qt:0,pr:0, tt:0});
    this.namet=this.namet+this.newname[this.newname.length-2].qt * this.newname[this.newname.length-2].pr
   }
  }

  delete(i:any){
if (this.newname.length>1) {
  this.newname.splice(i,1);
}
  }
}
