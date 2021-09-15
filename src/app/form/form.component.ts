import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
   forms=this.fb.group({email:["", [Validators.email, Validators.required]], pass:["", [Validators.required, Validators.pattern("^[A-Za-z0-9]{8,20}$")]]});
   get email(){
     return this.forms.get('email')
   }
   get pass(){
     return this.forms.get('pass')
   }
  ngOnInit(): void {
  }

}
