import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
 word="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque consequatur quaerat magni et totam velit voluptatibus explicabo, quis distinctio minima voluptate saepe ipsam soluta maiores, natus fuga ipsa dicta?"
 extra=this.word;
  constructor() { }
  show=true;
  new:any;
  greet=""
  num:any;
  num2:any;
  num3:any;
  answer=[0];
  ngOnInit(): void {
    if (this.answer[0]==0) {
      this.answer.splice(0, 1)
    }
  }
  apply(){
    console.log(this.word);
    
    if (this.show==true) {
      console.log(this.show);
      let a=this.word.slice(0,4);
      this.word=a;
      this.show=false;
    }
    else{
      console.log(this.show);
      this.word=this.extra;
      this.show=true;
    }
  }

  submit(){
    this.answer=[]
    this.num3=this.num3+1;
    for (let i = 0; i < (this.num3); i++) {
      this.answer.push(i*this.num2);
    } 
  }
}
