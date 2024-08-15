import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdPkr',
  standalone: true
})
export class UsdPkrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;

    return value * x;
  }

}
