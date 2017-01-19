import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'object-target-edit',
  templateUrl: './object-target-edit.component.html',
  styleUrls: ['./object-target-edit.component.css']
})
export class ObjectTargetEditComponent implements OnInit {
  @Input('group')
  objectTargetForm: FormGroup;

  initFileInfo()
  {
      return this._fb.group({
            fileName: ['', Validators.required],
            fileType: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            compressFile: [false],
            rowLimit: [0],
            fileSizeLimit: [0],
            fileSizeLimitUnits: ['']
        });
  }
  initApiInfo()
  {
       return this._fb.group({
            fileName: ['', Validators.required],
            fileType: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            compressFile: [false],
            rowLimit: [0],
            fileSizeLimit: [0],
            fileSizeLimitUnits: ['mb']
        });
  }

  addFileInfo() {
      const control = <FormArray>this.objectTargetForm.controls['fileInfos'];
      control.push(this.initFileInfo());
  }

  removeFileInfo(i: number) {
      const control = <FormArray>this.objectTargetForm.controls['fileInfos'];
      control.removeAt(i);
  }

  addApiInfo() {
      const control = <FormArray>this.objectTargetForm.controls['apiInfos'];
      control.push(this.initApiInfo());
  }

  removeApiInfo(i: number) {
      const control = <FormArray>this.objectTargetForm.controls['apiInfos'];
      control.removeAt(i);
  }

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }

}
