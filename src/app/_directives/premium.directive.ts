import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  constructor() {}

  @HostBinding('className') get cssProp() {
    return 'font-weight-bold';
  }

  @HostBinding('textContent') prop = 'Header from the directive';
  @HostBinding('style.color') color = 'red';
  @HostBinding('style.border') border = '1px solid blue';

  @HostListener('dblclick', ['$event'])
  handler(args) {
    console.log('Directive handler called', args);
  }
}
