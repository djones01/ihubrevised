/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExtractionService } from './extraction.service';

describe('ExtractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtractionService]
    });
  });

  it('should ...', inject([ExtractionService], (service: ExtractionService) => {
    expect(service).toBeTruthy();
  }));
});
