import { TestBed } from '@angular/core/testing';

import { OutcomeDataService } from './outcome-data.service';

describe('OutcomeDataService', () => {
  let service: OutcomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutcomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
