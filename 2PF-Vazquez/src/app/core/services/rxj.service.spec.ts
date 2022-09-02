import { TestBed } from '@angular/core/testing';

import { RxjService } from './rxj.service';

describe('RxjService', () => {
  let service: RxjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
