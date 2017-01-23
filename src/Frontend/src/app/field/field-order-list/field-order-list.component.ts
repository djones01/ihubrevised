import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataObjectBuilderService } from '../../data-object/services/data-object-builder.service';

@Component({
  selector: 'field-order-list',
  templateUrl: './field-order-list.component.html',
  styleUrls: ['./field-order-list.component.css']
})
export class FieldOrderListComponent implements OnInit {
  @Input('group') 
  fieldsForm: FormGroup;
  fields: any[] = [];
  formSub: Subscription;

  @Output() onItemsConfirmed = new EventEmitter();

  constructor(private dataObjectBuilderService: DataObjectBuilderService) {
   }

  ngOnInit() {
    this.dataObjectBuilderService.stagingFields.subscribe(fields => this.fields.push(fields));
  }

  confirmOrder(){
    // update the seqnums of the fields then copy to form
    if(this.fields && this.fields.length > 0){
      for(var i = 0; i < this.fields.length; i++){
        this.fields[i].seqNum = i+1;
        (<FormArray>this.fieldsForm.get('fields')).controls[i].patchValue(this.fields[i]);
      }
    }
  }
}