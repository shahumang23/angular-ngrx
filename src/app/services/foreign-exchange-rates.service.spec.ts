import { TestBed } from '@angular/core/testing';

import { ForeignExchangeRatesService } from './foreign-exchange-rates.service';

describe('ForeignExchangeRatesService', () => {
  let service: ForeignExchangeRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForeignExchangeRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
