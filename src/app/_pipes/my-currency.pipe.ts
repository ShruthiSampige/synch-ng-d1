import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    let paramList = '';

    args.forEach((a, i) => {
      paramList += `Param ${a} at ${i}; `;
    });

    return `CURRENCY: ${value} ${paramList}`;
  }
}
