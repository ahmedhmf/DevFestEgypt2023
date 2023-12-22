import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[changeColor]',
  standalone: true
})
export class ChangeColorDirective {

  constructor(ele: ElementRef) {
    ele.nativeElement.style.color = 'red';
  }

}
