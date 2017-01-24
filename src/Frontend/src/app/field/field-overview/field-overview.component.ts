import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { FieldOverviewService } from '../field-overview.service';

@Component({
  selector: 'field-overview',
  templateUrl: './field-overview.component.html',
  styleUrls: ['./field-overview.component.css']
})
export class FieldOverviewComponent implements OnInit {
  @Input()
  editingFormat: boolean;
  @Input('group')
  fieldsForm: FormGroup;

  private showDialog;

  toggleDialog(){
    this.fieldOverviewService.showEditingDialog();
  }

  constructor(private fieldOverviewService: FieldOverviewService) { }

  ngOnInit() {
    this.fieldOverviewService.showDialog.subscribe(showDialog => this.showDialog = showDialog);
  }

}
