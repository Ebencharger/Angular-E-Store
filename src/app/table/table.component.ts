import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  product=[{name:"", qt:0, pr:0, tt:0, editable:false}];
  array=[{name:"MILK", pr:300}]
  grandtot:any=0;
  hide=false;
  b:any;
  c:any;
  custName:any="";
  tog=0;
  date=new Date;
  angle="ANGULAR"
  constructor(private fb:FormBuilder) { }
   forms=this.fb.group({email:["", [Validators.email, Validators.required]], pass:["",[Validators.required, Validators.pattern("^[a-z]{8}$")]]})
   get email(){
     return this.forms.get("email");
   }
   get pass(){
     return this.forms.get("pass");
   }
  ngOnInit(): void {
    console.log(this.date);
  }
  

  grn(){
    this.grandtot=0;
    this.product.forEach((max)=>{
     this.grandtot+=max.tt;
    })
  }


delete(i:any){
if(this.product.length>1){
  this.grandtot=0;
  this.product.splice(i, 1);
  this.grn();
}
}
edit(i:any){
  this.grandtot=0;
  this.product[i].editable==true?this.product[i].editable=false:this.product[i].editable=true;
  this.product[i].tt=this.product[i].qt*this.product[i].pr;
  this.grn();
  //or this way
// if (this.product[i].editable==false) {
//   this.product[i].tt=this.product[i].qt*this.product[i].pr;
//   this.grandtot=0;
//   this.product[i].editable=true;
//   this.grn();
// }
// else{
//   this.grandtot=0;
//   this.product[i].tt=this.product[i].qt*this.product[i].pr;
//   this.product[i].editable=false;
//   this.grn();
// }
}

apply(){
  if (this.product[this.product.length-1].qt && this.product[this.product.length-1].pr) {
    this.product.push({name:"", qt:0, pr:0, tt:0, editable:false});
    this.product[this.product.length-2].tt=this.product[this.product.length-2].qt*this.product[this.product.length-2].pr;
    this.product[this.product.length-2].editable=true;
    console.log(this.product);
    this.grandtot=0;
    this.grn()
  }
}

prin(){
  this.b=`Customer's name: ${(prompt("Customer name?"))}`;
  this.hide=true;
  setTimeout(() => {
    window.print();
  location.reload();
  }, 1000);
}
}

