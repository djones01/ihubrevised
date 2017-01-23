import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { DataObjectBuilderService } from '../../data-object/services/data-object-builder.service';
import { AlertService } from '../../shared/alert/alert.module';

@Component({
  selector: 'file-select-with-info',
  templateUrl: './file-select-with-info.component.html',
  styleUrls: ['./file-select-with-info.component.css']
})
export class FileSelectWithInfoComponent implements OnInit {
    @Input('group')
    fileInfoForm: FormGroup;
    @Input()
    index: number;

    onFileChange(event) {
      const fileControl = <FormControl>this.fileInfoForm.get('file');
      const fileNameControl = <FormControl>this.fileInfoForm.get('fileName');
      let file = (event.srcElement || event.target).files[0] as File;
      if(file){
        fileControl.setValue(file);
        fileNameControl.setValue(file.name);
      }
    }

    subscribeLineFormatsChanges(){
      const lineFormatsControl = <FormControl>this.fileInfoForm.get('lineFormat');    
      lineFormatsControl.valueChanges.subscribe(newValue => {
        switch(newValue){
          case "Delimited":
              this.removeFllValidators();
              this.addFllValidators();
          case "FixedLength":
              this.removeDelimiterValidators();
              this.addFllValidators();
          case "Mixed":
              this.addFllValidators();
              this.addDelimiterValidators();
        }
      });
    }

    addDelimiterValidators(){
      const delimiterControl = <FormControl>this.fileInfoForm.get('delimiter');
      delimiterControl.setValidators(Validators.required);
      delimiterControl.updateValueAndValidity();
    }
    removeDelimiterValidators(){
      const delimiterControl = <FormControl>this.fileInfoForm.get('delimiter');
      delimiterControl.setValidators(null);
      delimiterControl.updateValueAndValidity();
    }
    addFllValidators(){
      const fllsControl = <FormArray>this.fileInfoForm.get('flls');
      fllsControl.controls.forEach((fllGroup: FormGroup) => {
        Object.keys(fllGroup.controls).forEach(key => {
          fllGroup.controls[key].setValidators(Validators.required);
          fllGroup.controls[key].updateValueAndValidity();
        });
      });
    }
    removeFllValidators(){
      const fllsControl = <FormArray>this.fileInfoForm.get('flls');
      fllsControl.controls.forEach((fllGroup: FormGroup) => {
        Object.keys(fllGroup.controls).forEach(key => {
          fllGroup.controls[key].setValidators(null);
          fllGroup.controls[key].updateValueAndValidity();
        });
      });
    }

  addFll() {
      const control = <FormArray>this.fileInfoForm.get('flls');
      control.push(this.dataObjectBuilderService.initFll());
  }

  removeFll(i: number) {
      const control = <FormArray>this.fileInfoForm.get('flls');
      control.removeAt(i);
  }

  addedFllFieldIndex(event, i: number){
    let eventVal = event.value as string;
    // remove the chip that was just added if it isn't a number
    if(!this.isNumeric(eventVal)){
        const control = (<FormGroup>(<FormArray>this.fileInfoForm.get('flls')).controls[i]).get('fieldIndexes');
        let controlValue = control.value as Array<any>;
        controlValue.splice(controlValue.indexOf(eventVal), 1)
        control.setValue(controlValue);
        this.alertService.info('Removed Field Index', 'Indexes may only be numbers');
    }
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  constructor(private dataObjectBuilderService: DataObjectBuilderService, private alertService: AlertService) { }

  ngOnInit() {
    this.subscribeLineFormatsChanges();
  }

}
