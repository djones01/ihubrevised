import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

import { InfoOptions } from '../info-options';

@Component({
  selector: 'file-info-edit',
  templateUrl: './file-info-edit.component.html',
  styleUrls: ['./file-info-edit.component.css']
})
export class FileInfoEditComponent implements OnInit {
  @Input('group')
  fileInfoForm: FormGroup;
  private fileTypeOptions;
  private unitOptions;

  constructor(private options: InfoOptions) { 
    this.fileTypeOptions = this.options.fileTypeOptions;
    this.unitOptions = this.options.unitOptions;
  }

  ngOnInit() {
  }

}
