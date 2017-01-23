import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../field';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'new-fields',
  templateUrl: './new-fields.component.html',
  styleUrls: ['./new-fields.component.css']
})
export class NewFieldsComponent implements OnInit {
  @Input('group')
  fieldsForm: FormGroup;
  fields: Field[] = [];

  constructor() { }

  ngOnInit() {
  }

}
