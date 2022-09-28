import { TestBed } from '@angular/core/testing';

import { CrubService } from './crub.service';

describe('CrubService', () => {
  let service: CrubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
