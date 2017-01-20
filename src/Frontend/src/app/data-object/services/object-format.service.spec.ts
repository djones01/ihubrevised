/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObjectFormatService } from './object-format.service';

describe('ObjectFormatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectFormatService]
    });
  });

  it('should ...', inject([ObjectFormatService], (service: ObjectFormatService) => {
    expect(service).toBeTruthy();
  }));
});
