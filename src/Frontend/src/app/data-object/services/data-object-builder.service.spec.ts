/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataObjectBuilderService } from './data-object-builder.service';

describe('DataObjectBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataObjectBuilderService]
    });
  });

  it('should ...', inject([DataObjectBuilderService], (service: DataObjectBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
