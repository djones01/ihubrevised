import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { FieldOptions } from '../field-options';
import { Field } from '../field';
import { DataObjectBuilderService } from '../../data-object/services/data-object-builder.service';
import { FieldOverviewService } from '../field-overview.service';

@Component({
  selector: 'field-edit-list',
  templateUrl: './field-edit-list.component.html',
  styleUrls: ['./field-edit-list.component.css']
})
export class FieldEditListComponent implements OnInit {
  @Input()
  editingFormat: string;
  fields: Field[] = [];
  stagingForm: FormGroup;
  private dataTypeOptions;

  doneEditing(){
    this.fieldOverviewService.addNewToWorkingSet(this.stagingForm.value.fields);
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

  constructor(private fieldOptions: FieldOptions, private dataObjectBuilderService: DataObjectBuilderService, private fieldOverviewService: FieldOverviewService) { 
    this.dataTypeOptions = this.fieldOptions.dataTypeOptions;
  }

  ngOnInit() {
    this.stagingForm = this.dataObjectBuilderService.initFieldsGroup();
    this.fieldOverviewService.editingFields.subscribe(fields => {
      this.fields = fields;
      if(fields.length > 0){
        for(var i = 0; i < this.fields.length; i++){
          this.addField();
        }
        this.stagingForm.get('fields').patchValue(this.fields);
      }   
    });
  }
}
