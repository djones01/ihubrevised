import { Injectable } from "@angular/core";
import { Map } from "../map";
import { Field } from "../../field/field";
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class MapBuilderService {
    mapForm: FormGroup;
    ruleFieldSeqNum = 1;
    condSeqNum = 1;

    buildMap() {
        return this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: [new Date()],
            active: [true],
            transformations: this._fb.array([])
        });
    }

    buildTransform() {
        return this._fb.group({
            description: ['', Validators.required],
            rule: this._fb.group({
                rule_Value: ['', Validators.required],
                alt_Value: [''],
                rule_Operation: ['', Validators.required],
                targetField: [null, Validators.required],
                ruleFields: this._fb.array([])
            }),
            conditions: this._fb.array([])
        });
    }

    buildRuleField() {
        let field = this._fb.control(null, Validators.required)
        return this._fb.group({        
            seqNum: [this.ruleFieldSeqNum++],
            append: [{ value: '', disabled: field.invalid }],
            prepend: [{ value: '', disabled: field.invalid }],
            custom_Format: [''],
            field: [null, Validators.required],
            trim: [false]
        });
    }

    // Init new condition
    buildCondition() {
        let leftField = this._fb.control(new Field('','',0,true), Validators.required);
        let operation = this._fb.control({value: '', disabled: leftField.invalid });
        return this._fb.group({
            seqNum: [this.condSeqNum++],
            chain_Operation: [{ value: '', disabled: (leftField.invalid || this.condSeqNum == 1) },],
            left_Paren: [{ value: '', disabled: leftField.invalid }],
            operation: operation,
            cond_Value: [{ value: '', disabled: operation.invalid }],
            right_Paren: [{ value: '', disabled: leftField.invalid }],
            leftField: leftField,
            rightField: [{ value: new Field('','',0,true), disabled: operation.invalid }],
            fieldToFieldCompare: [false]
        });
    }

    buildEditMapForm(editMap: Map) {
        if (editMap != null) {
            this.mapForm = this.buildMap();
            if (editMap.transformations.length > 0) {
                let transformsControl = <FormArray>this.mapForm.controls['transformations'];
                editMap.transformations.forEach((transform, i) => {
                    let transformControl = this.buildTransform();
                    transformsControl.push(transformControl);
                    if (transform.conditions != undefined && transform.conditions.length > 0) {
                        let condsControl = <FormArray>transformControl.controls['conditions'];
                        transform.conditions.forEach((cond, i) => {                       
                            condsControl.push(this.buildCondition());
                        });        
                    }
                    if (transform.rule.ruleFields != undefined && transform.rule.ruleFields.length > 0) {
                        let ruleFieldsControl = <FormArray>(<FormGroup>transformControl.controls['rule']).controls['ruleFields'];
                        transform.rule.ruleFields.forEach((ruleField, i) => {                           
                            ruleFieldsControl.push(this.buildRuleField());
                        });                  
                    }
                });
            }
            this.mapForm.patchValue(editMap);
        }
        return this.mapForm;
    }

    constructor(private _fb: FormBuilder) { }
}