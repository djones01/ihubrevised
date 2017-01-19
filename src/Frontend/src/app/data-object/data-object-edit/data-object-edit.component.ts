import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'data-object-edit',
  templateUrl: './source-edit.component.html',
  styleUrls: ['./source-edit.component.css']
})
export class DataObjectComponent implements OnInit {
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
            objectFormats: this._fb.array([]),
            objectTargets: this._fb.array([])
        });
    }

    initDataObjectFormat() {
        return this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            sourceURL: [''],
            fromBatch: [false],
            autoProcessed: [false],
            fixedLength: [false],
            length: [null],
            fields: this._fb.array([])
        });
    }

    initDataObjectTarget() {
        return this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            objectFormats: this._fb.array([]),
            objectTargets: this._fb.array([])
        });
    }

    addDataObjectFormat() {
        // add address to the list
        const control = <FormArray>this.dataObjectForm.controls['objectFormats'];
        control.push(this.initDataObjectFormat());
    }

    removetDataObjectFormat(i: number) {
        // remove address from the list
        const control = <FormArray>this.dataObjectForm.controls['objectFormats'];
        control.removeAt(i);
    }

    addDataObjectTarget() {
        // add address to the list
        const control = <FormArray>this.dataObjectForm.controls['objectTargets'];
        control.push(this.initDataObjectTarget());
    }

    removetDataObjectTarget(i: number) {
        // remove address from the list
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
