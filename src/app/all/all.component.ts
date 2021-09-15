import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
array=[{name:"", qt:0, pr:0, tt:0, editable:false}];
show=false;
word=2000;
grandtot:any=0;
none=false;
  constructor(private fb:FormBuilder) { }
  forms=this.fb.group({email:["",[Validators.email, Validators.required]], pass:["", [Validators.required, Validators.pattern("^[A-Z]{8,20}$")]]})
  get email(){
    return this.forms.get("email")
  }
  get pass(){
    return this.forms.get("pass")
  }


  ngOnInit(): void {
    if (this.array.length==1) {
      this.array.splice(0,1);
    }
  }
 click() {
   this.show==false?this.show=true:this.show=false;
 }
 del(i:any){
   this.grandtot=0;
   this.array.splice(i, 1);
   this.sum();
 }

 sum(){
  this.grandtot=0;
   for (let i = 0; i < this.array.length; i++) {     
     this.grandtot=this.grandtot+this.array[i].tt;
   }
 }

 add(){
  if (this.array.length==0) {
     this.array.push({name:"", qt:0,pr:0,tt:0, editable:false})
  }
  else if(this.array.length>0 && this.array[this.array.length-1].qt && this.array[this.array.length-1].pr){
    this.array.push({name:"", qt:0,pr:0,tt:0, editable:false})
    this.array[this.array.length-2].editable=true;
    this.array[this.array.length-2].tt=this.array[this.array.length-2].qt*this.array[this.array.length-2].pr;
    this.grandtot=0;
    this.sum();
  }
 }

 edit(i:any){
   this.array[i].editable==true?this.array[i].editable=false:this.array[i].editable=true;
   this.array[i].tt=this.array[i].qt*this.array[i].pr;
   console.log(this.array);
   this.grandtot=0;
   this.sum();
 }
}
