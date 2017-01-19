import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'api-info-edit',
  templateUrl: './api-info-edit.component.html',
  styleUrls: ['./api-info-edit.component.css']
})
export class ApiInfoEditComponent implements OnInit {
  @Input('group')
  apiInfoForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
