import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from '../field';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DataObjectBuilderService } from '../../data-object/services/data-object-builder.service';
import { FieldService } from '../field.service';
import { FieldOverviewService } from '../field-overview.service';

@Component({
  selector: 'new-fields',
  templateUrl: './new-fields.component.html',
  styleUrls: ['./new-fields.component.css']
})
export class NewFieldsComponent implements OnInit {
  @Input()
  editingFormat: boolean;
  @Input('group')
  fieldsForm: FormGroup;

  private warnList = []
  private displayWarning: boolean = false;
  private fields: Field[] = [];
  private editFields: Field[] = [];
  private existingFields: Field[] = [];

  onExtractionComplete(fields: Field[]){
    const fieldsControl  = <FormArray>this.fieldsForm.get('fields');
    // check if the new fields are in the current editing fields list or in the existing fields list and warn if so
    for(var i = 0; i < fields.length; i++){
      for(var j = 0; j < fieldsControl.controls.length; j++){
        if(Field.isEquivalent(fieldsControl.controls[j].value,fields[i])){
          this.warnList.push(fields[i]);
        }
      }
      for(var j = 0; j < this.existingFields.length; j++)
      {
        if(Field.isEquivalent(this.existingFields[j], fields[i])){
          this.warnList.push(fields[i]);
        }
      }
    }
    this.fields = fields;
    // delay adding to form if warning
    if(this.warnList.length > 0){   
      this.showConfirmDialog();
    }
    else{
      this.confirmFields();
    }
  }

  confirmFields(){
    this.fieldOverviewService.setEditingFields(this.fields);
  }

  denyWarnedFields(){
    let warnFields = this.warnList;
    this.fields = this.fields.filter(function(field){
        return warnFields.indexOf(field) < 0;
    });
    this.confirmFields();
  }

  showConfirmDialog()
    {
      this.displayWarning = !this.displayWarning;
    }

  constructor(private dataObjectBuilderService: DataObjectBuilderService, 
  private fieldsService: FieldService,
  private fieldOverviewService: FieldOverviewService) { }

  ngOnInit() {
    this.fieldsService.fields.subscribe(existingFields => this.existingFields == existingFields);
  }

}
