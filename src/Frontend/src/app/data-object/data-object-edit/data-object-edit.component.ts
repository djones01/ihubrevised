import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'data-object-edit',
  templateUrl: './data-object-edit.component.html',
  styleUrls: ['./data-object-edit.component.css']
})
export class DataObjectEditComponent implements OnInit {
    public dataObjectForm: FormGroup;


    onSubmit(dataObject: any) {

    }

    // Init form models
    initDataObject() {
        this.dataObjectForm = this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            existingObjectFormats: [[]],
            existingObjectTargets: [[]],
            objectFormats: this._fb.array([]),
            objectTargets: this._fb.array([])
        });
    }

    initObjectFormat() {
        return this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            sourceGroup: this._fb.group({
                existingFields: [[]],
                newFields: this._fb.array([]),
                apiInfos: this._fb.array([]),
                fileInfos: this._fb.array([])
            })    
        });
    }

    initObjectTarget() {
        return this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            checkTypes: [true],
            evalConditions: [true],
            stopOnError: [true],
            apiInfos: this._fb.array([]),
            fileInfos: this._fb.array([])
        });
    }

    addDataObjectFormat() {
        const control = <FormArray>this.dataObjectForm.controls['objectFormats'];
        control.push(this.initObjectFormat());
    }

    removeObjectFormat(i: number) {
        const control = <FormArray>this.dataObjectForm.controls['objectFormats'];
        control.removeAt(i);
    }

    addDataObjectTarget() {
        const control = <FormArray>this.dataObjectForm.controls['objectTargets'];
        control.push(this.initObjectTarget());
    }

    removeObjectTarget(i: number) {
        const control = <FormArray>this.dataObjectForm.controls['objectTargets'];
        control.removeAt(i);
    }

    newDataObject() {
        this.initDataObject();
    }

    constructor(private _fb: FormBuilder, ) { }

    ngOnInit() {
        this.initDataObject();
        
    }
}
