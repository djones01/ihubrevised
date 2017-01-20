/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObjectTargetService } from './object-target.service';

describe('ObjectTargetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectTargetService]
    });
  });

  it('should ...', inject([ObjectTargetService], (service: ObjectTargetService) => {
    expect(service).toBeTruthy();
  }));
});
