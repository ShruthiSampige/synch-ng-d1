import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  private input: string;
  private propField: string;

  @Input() set appPremium(value: string) {
    this.input = value;
  }

  @Input() set prop(value: string) {
    this.propField = value;
  }

  constructor() {}

  @HostBinding('className') get css() {
    return `${this.input} ${this.propField}`;
  }

  @HostBinding('style.color') color;
}
