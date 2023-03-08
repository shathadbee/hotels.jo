import { TestBed } from '@angular/core/testing';

import { HotelsAPIService } from './hotels-api.service';

describe('HotelsAPIService', () => {
  let service: HotelsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
