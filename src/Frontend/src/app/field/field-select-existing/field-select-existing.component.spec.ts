/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FieldSelectExistingComponent } from './field-select-existing.component';

describe('FieldSelectExistingComponent', () => {
  let component: FieldSelectExistingComponent;
  let fixture: ComponentFixture<FieldSelectExistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldSelectExistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSelectExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
