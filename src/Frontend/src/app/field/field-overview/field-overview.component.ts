import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'field-overview',
  templateUrl: './field-overview.component.html',
  styleUrls: ['./field-overview.component.css']
})
export class FieldOverviewComponent implements OnInit {
  @Input('group')
  fieldForm: FormGroup;

  private showDialog;

  toggleDialog(){
    this.showDialog = !this.showDialog;
  }

  constructor() { }

  ngOnInit() {
  }

}
