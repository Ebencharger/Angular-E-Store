import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angpipe'
})
export class AngpipePipe implements PipeTransform {
  greet=""
  transform(value: any, ...args: unknown[]): any {
    if (value=="Ebencharger") {
      value="STRONG PASSWORD";
      this.greet="welcome"
      return value;
    }
    else  if (value.length==0) {
      value="";
      return value;
    }
    else{
      return "WEAK PASSWORD";
    }
    
  }

}
