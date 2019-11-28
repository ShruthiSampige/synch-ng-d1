import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
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
