import { Component, OnInit, Input } from '@angular/core';
import { FieldOptions } from '../field-options';
import { Field } from '../field';
import { FieldService } from '../field.service';

@Component({
  selector: 'field-select-existing',
  templateUrl: './field-select-existing.component.html',
  styleUrls: ['./field-select-existing.component.css']
})
export class FieldSelectExistingComponent implements OnInit {
  @Input() selectSingle: boolean = false;
  private datatypes = [{ value: null, label: "All Datatypes"}];

  constructor(private fieldOptions: FieldOptions, private fieldService: FieldService) { 
    this.datatypes.concat(this.fieldOptions.dataTypeOptions);
  }

  ngOnInit() {

  }

}
