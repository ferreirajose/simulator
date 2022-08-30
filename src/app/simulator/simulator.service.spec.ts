/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, fakeAsync } from '@angular/core/testing';
import { SimulatorService } from './simulator.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('Service: Simulator', () => {
  let service: SimulatorService
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SimulatorService]
    });

    service = TestBed.inject(SimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be must calculate simple interest', fakeAsync(() => {
    const params = {
      value: 1200,
      installments: 14
    }

    const calc$ = service.calcValue(params);

    const obj = {
      valueInstallments: 86,
      numberInstallments: 14,
      totalWithInterest: 2040
    }

    calc$.subscribe(res => {
      expect(res).toEqual(obj)
    })

  }));
});
