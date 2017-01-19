/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthTokenService } from './auth-token.service';

describe('AuthTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTokenService]
    });
  });

  it('should ...', inject([AuthTokenService], (service: AuthTokenService) => {
    expect(service).toBeTruthy();
  }));
});
