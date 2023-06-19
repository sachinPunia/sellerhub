import { TestBed } from '@angular/core/testing';

import { GuardHeaderService } from './guard-header.service';

describe('GuardHeaderService', () => {
  let service: GuardHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
