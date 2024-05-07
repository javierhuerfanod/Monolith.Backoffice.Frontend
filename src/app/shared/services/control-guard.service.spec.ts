import { TestBed } from '@angular/core/testing';

import { ControlGuardService } from './control-guard.service';

describe('ControlGuardService', () => {
  let service: ControlGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
