import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { DataObjectBuilderService } from '../services/data-object-builder.service';

@Component({
  selector: 'object-target-edit',
  templateUrl: './object-target-edit.component.html',
  styleUrls: ['./object-target-edit.component.css']
})
export class ObjectTargetEditComponent implements OnInit {
  @Input('group')
  objectTargetForm: FormGroup;

  addFileInfo() {
      const control = <FormArray>this.objectTargetForm.controls['fileInfos'];
      control.push(this.dataObjectBuilderService.initTargetFileInfo());
  }

  removeFileInfo(i: number) {
      const control = <FormArray>this.objectTargetForm.controls['fileInfos'];
      control.removeAt(i);
  }

  addApiInfo() {
      const control = <FormArray>this.objectTargetForm.controls['apiInfos'];
      control.push(this.dataObjectBuilderService.initTargetApiInfo());
  }

  removeApiInfo(i: number) {
      const control = <FormArray>this.objectTargetForm.controls['apiInfos'];
      control.removeAt(i);
  }

  constructor(private dataObjectBuilderService: DataObjectBuilderService) { }

  ngOnInit() {
  }

}
