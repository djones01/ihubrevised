import { Component, Input, OnInit } from "@angular/core";
import { Validators, FormGroup, FormArray } from '@angular/forms';
import { Map } from "../../../map";
import { MapBuilderService } from "../../../services/map-builder.service";

@Component({
  selector: 'rule-edit',
  templateUrl: './rule-edit.component.html',
  styleUrls: ['./rule-edit.component.css']
})
export class RuleEditComponent implements OnInit {
    @Input('group')
    ruleForm: FormGroup
    @Input('i')
    i: number;

    rule_Operations = [
        { value: "field", display: "Field(s)" },
        { value: "assign", display: "Automatic / System Generated" },
        { value: "text", display: "Text" }
    ];

    //Add and remove validation based on selection
    subscribeRuleOpChange() {
        const control = <FormGroup>this.ruleForm.controls["rule_Operation"];
        const changes = control.valueChanges;
        changes.subscribe(rule_Operation => {
            switch (rule_Operation) {
                case "sfield":
                    this.addRuleFieldValidators();
                    this.removeAssignValidators();
                    this.removeTextValidators();
                    break;
                case "assign":
                    //Add validators back to the assign fields
                    this.addAssignValidators();
                    this.removeRuleFieldValidators();
                    this.removeTextValidators();
                    break;
                case "text":
                    //Add validators back to the text fields
                    this.addTextValidators();
                    this.removeRuleFieldValidators();
                    this.removeAssignValidators();
                    break;
            }
        });     
    }

    // Methods for adding and removing validators
    addRuleFieldValidators() {
        // Add validators back to the rulesourcefields
        const rsfsControl = <FormArray>this.ruleForm.controls["ruleFields"];
        for (let i = 0; i < rsfsControl.length; i++) {
            const rsfControl = <FormGroup>rsfsControl.at(i);
            const sfControl = <FormGroup>rsfControl.controls["sourceField"];
            sfControl.setValidators(Validators.required);
            sfControl.updateValueAndValidity();
        }
    }

    removeRuleFieldValidators() {
        // Remove validators from the rulesourcefields
        const rsfsControl = <FormArray>this.ruleForm.controls["ruleFields"];
        for (let i = 0; i < rsfsControl.length; i++) {
            const rsfControl = <FormGroup>rsfsControl.at(i);
            const sfControl = <FormGroup>rsfControl.controls["sourceField"];
            sfControl.setValidators(null);
            sfControl.updateValueAndValidity();
        }
    }

    addAssignValidators() {
        
    }

    removeAssignValidators() {
        
    }

    addTextValidators() {
        const ruleValueControl = <FormArray>this.ruleForm.controls["rule_Value"];
        ruleValueControl.setValidators(Validators.required);
        ruleValueControl.updateValueAndValidity();
    }

    removeTextValidators() {
        const ruleValueControl = <FormArray>this.ruleForm.controls["rule_Value"];
        ruleValueControl.setValidators(null);
        ruleValueControl.updateValueAndValidity();
    }

    addRuleField() {
        const control = <FormArray>this.ruleForm.controls['ruleFields'];
        control.push(this.mapBuilderService.buildRuleField());
    }

    removeRuleField(i: number) {
        let x = i;
        const control = <FormArray>this.ruleForm.controls['ruleFields'];
        // renumber the seqnums of other source fields
        for (x; x < control.length; x++) {
            let group = <FormGroup>control.at(x);
            let newVal = group.controls['seqNum'].value - 1;
            group.controls['seqNum'].setValue(newVal);
        }    
        this.mapBuilderService.ruleFieldSeqNum--;
        control.removeAt(i);
    }

    constructor(private mapBuilderService: MapBuilderService) { }

    ngOnInit() {
        this.subscribeRuleOpChange();
    }

}
