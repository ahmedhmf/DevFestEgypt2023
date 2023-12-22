import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toEgp',
  standalone: true
})
export class ToEgpPipe implements PipeTransform {

  transform(value: number): number {
    return value * 35;
  }

}
