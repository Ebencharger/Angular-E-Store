import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipec'
})
export class PipecPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (value>=2000) {
      return value=value/1000+"k";
    }
    return null;
  }

}
