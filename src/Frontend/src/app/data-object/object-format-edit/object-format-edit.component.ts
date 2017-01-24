import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { FieldOverviewService } from '../../field/field-overview.service';

@Component({
  selector: 'object-format-edit',
  templateUrl: './object-format-edit.component.html',
  styleUrls: ['./object-format-edit.component.css']
})
export class ObjectFormatEditComponent implements OnInit {
  @Input('group')
  objectFormatForm: FormGroup;

  constructor(private fieldOverviewService: FieldOverviewService) { 
  }

  ngOnInit() {
  }

}
