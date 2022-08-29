/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulatorService } from './simulator.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('Service: Simulator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SimulatorService]
    });
  });

  it('should ...', inject([SimulatorService], (service: SimulatorService) => {
    expect(service).toBeTruthy();
  }));
});
