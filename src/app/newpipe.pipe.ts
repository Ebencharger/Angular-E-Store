import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newpipe'
})
export class NewpipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value>=1000) {
      return Number(value)/1000+"k"
    }
    return value;
  }

}
