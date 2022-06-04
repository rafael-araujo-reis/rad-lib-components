import { TestBed } from '@angular/core/testing';

import { MatSignInService } from './mat-sign-in.service';

describe('MatSignInService', () => {
  let service: MatSignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatSignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
