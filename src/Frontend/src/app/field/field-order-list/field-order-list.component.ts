import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataObjectBuilderService } from '../../data-object/services/data-object-builder.service';
import { FieldOverviewService } from '../field-overview.service';
import { Field } from '../field';

@Component({
  selector: 'field-order-list',
  templateUrl: './field-order-list.component.html',
  styleUrls: ['./field-order-list.component.css']
})
export class FieldOrderListComponent implements OnInit {
  @Input('group') 
  fieldsForm: FormGroup;
  fields: Field[] = [];
  formSub: Subscription;

  @Output() onItemsConfirmed = new EventEmitter();

  resequenceFields(){
    for(var i = 1; i <= this.fields.length; i++){
      this.fields[i-1].seqNum = i;
    }
  }

  constructor(private dataObjectBuilderService: DataObjectBuilderService, private fieldOverviewService: FieldOverviewService) {
   }

  ngOnInit() {
    this.fieldOverviewService.workingFieldSet.subscribe(fields => {
      this.fields = fields;
      let fieldsControl = <FormArray>this.fieldsForm.get('fields');
      if(fieldsControl.length > 0){
        this.fields = fieldsControl.value;
      }
    });
  }

  confirmOrder(){
    const control = <FormArray>this.fieldsForm.get('fields');
    for(var i = 0; i < this.fields.length; i++){
      control.push(this.dataObjectBuilderService.initField());
    }
    control.patchValue(this.fields);
    this.fieldOverviewService.clearWorkingSet();
    this.fieldOverviewService.hideEditingDialog();
  }
}