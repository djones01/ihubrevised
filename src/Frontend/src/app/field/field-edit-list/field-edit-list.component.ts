import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'field-edit-list',
  templateUrl: './field-edit-list.component.html',
  styleUrls: ['./field-edit-list.component.css']
})
export class FieldEditListComponent implements OnInit {
  @Input('group')
  fieldsForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
