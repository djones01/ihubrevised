import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DataObjectBuilderService } from '../services/data-object-builder.service';

@Component({
  selector: 'data-object-edit',
  templateUrl: './data-object-edit.component.html',
  styleUrls: ['./data-object-edit.component.css']
})
export class DataObjectEditComponent implements OnInit {
    public dataObjectForm: FormGroup;
    
    onSubmit(dataObject: any) {

    }

    addDataObjectFormat() {
        const control = <FormArray>this.dataObjectForm.controls['objectFormats'];
        control.push(this.dataObjectBuilderService.initObjectFormat());
    }

    removeObjectFormat(i: number) {
        const control = <FormArray>this.dataObjectForm.controls['objectFormats'];
        control.removeAt(i);
    }

    addDataObjectTarget() {
        const control = <FormArray>this.dataObjectForm.controls['objectTargets'];
        control.push(this.dataObjectBuilderService.initObjectTarget());
    }

    removeObjectTarget(i: number) {
        const control = <FormArray>this.dataObjectForm.controls['objectTargets'];
        control.removeAt(i);
    }

    newDataObject() {
        this.dataObjectForm = this.dataObjectBuilderService.initDataObject();
    }

    constructor(private dataObjectBuilderService: DataObjectBuilderService) { }

    ngOnInit() {
        this.newDataObject();
    }
}
