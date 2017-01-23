import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { FieldOptions } from '../field-options';
import { Field } from '../field';
import { DataObjectBuilderService } from '../../data-object/services/data-object-builder.service';

@Component({
  selector: 'field-edit-list',
  templateUrl: './field-edit-list.component.html',
  styleUrls: ['./field-edit-list.component.css']
})
export class FieldEditListComponent implements OnInit {
  @Input() 
  fields: Field[] = [];
  @Input()
  editingFormat: string;
  stagingForm: FormGroup;
  private dataTypeOptions;

  doneEditing(){
    this.dataObjectBuilderService.setStagedFields(this.stagingForm.value);
    this.clearNewFields();
  }

  clearNewFields(){
    this.stagingForm.setControl('fields', new FormArray([]));
  }

  addField(){
    const control = <FormArray>this.stagingForm.controls['fields'];
    control.push(this.dataObjectBuilderService.initField());
  }

  removeField(i: number) {
        const control = <FormArray>this.stagingForm.controls['fields'];
        control.removeAt(i);
    }

  constructor(private fieldOptions: FieldOptions, private dataObjectBuilderService: DataObjectBuilderService) { 
    this.dataTypeOptions = this.fieldOptions.dataTypeOptions;
  }

  ngOnInit() {
    this.stagingForm = this.dataObjectBuilderService.initFieldsGroup();
  }
}
