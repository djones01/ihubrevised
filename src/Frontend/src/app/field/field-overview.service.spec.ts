/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FieldOverviewService } from './field-overview.service';

describe('FieldOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldOverviewService]
    });
  });

  it('should ...', inject([FieldOverviewService], (service: FieldOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
