import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(value: number, dailyPrice:number ): number {
    return value*dailyPrice;
  }

}
