import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    //  More on template literals in JavaScript here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    //  More on JavaScript array API here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    switch (args[0]) {
      case 'INR':
        return `INR: ${value.toFixed(2)}`;
      case 'USD':
        return `$: ${value.toFixed(2)}`;
      case 'EUR':
        return `EUR: ${value.toFixed(2)}`;
      default:
        return `Unknown: ${value.toFixed(2)}`;
    }
  }
}
