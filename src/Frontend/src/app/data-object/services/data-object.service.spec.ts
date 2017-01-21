/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataObjectService } from './data-object.service';

describe('DataObjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataObjectService]
    });
  });

  it('should ...', inject([DataObjectService], (service: DataObjectService) => {
    expect(service).toBeTruthy();
  }));
});
