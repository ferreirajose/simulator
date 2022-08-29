import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Lending } from './lending';

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  constructor() { }

  public calcValue(params: Lending | any): Observable<any> {
    const pagar = this.combine(this.calcJuros, this.sumJuros)
    return of(pagar(params.value, params.installments)).pipe(
      map(val => ({
        valueInstallments: this.round(params),
        numberInstallments: params.installments ?? 0,
        totalWithInterest: val
      }))
    )
  }


  public combine(fnCalcJuros: Function, fnSumJuros: Function) {
    return (capital: number, installments: number) => fnSumJuros(capital, fnCalcJuros(capital, installments))
}

  private calcJuros(capital: number, temp: number): number {
    return capital * 0.05 * temp;
  }


  private sumJuros(capital: number, juros: number): number {
    return capital + juros;
  }

  private round(params: Lending): number | Error {

    const value = typeof params.value === 'number' && !Number.isNaN(params.value)
    const installments = typeof params.installments === 'number' && !Number.isNaN(params.installments)

    if (value && installments) {
      return Math.round(params.value / params.installments)
    }

    throw Error('Informe um valor valido')
  }

}
