import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { ExtractionService } from '../extraction.service';
import { DataObjectBuilderService } from '../../data-object/services/data-object-builder.service';

@Component({
  selector: 'extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.css']
})
export class ExtractionComponent implements OnInit {
  @Input('group')
  extractForm: FormGroup;
  @Input() extractMode: string = "Fields";
  @Output() extractionComplete = new EventEmitter();

  addSourceFileInfo() {
        const control = <FormArray>this.extractForm.controls['fileInfos'];
        control.push(this.dataObjectBuilderService.initSourceFileInfo());
  }

  removeSourceFileInfo(i: number) {
      const control = <FormArray>this.extractForm.controls['fileInfos'];
      control.removeAt(i);
  }

  onSelectFile(event){
    let files = event.files;
  }

  uploadForExtraction(extractForm){
    this.extractionService.extractFields(extractForm).subscribe(data => {
      this.extractionComplete.emit(data);
      // push all current file infos and api infos to the previously extracted list
      (<FormArray>this.extractForm.get('extractedFileInfos')).push(this.extractForm.get('fileInfos'));
      this.extractForm.setControl('fileInfos', new FormArray([this.dataObjectBuilderService.initSourceFileInfo()]));
    }, () => this.newExtractForm()); 
  }

  newExtractForm(){
    this.extractForm = this.dataObjectBuilderService.initFieldsGroup();
    this.addSourceFileInfo();
  }

  constructor(private dataObjectBuilderService: DataObjectBuilderService, private extractionService: ExtractionService) { }

  ngOnInit() {
    // Start off with one file only if provided with an input form
    if(this.extractForm) this.addSourceFileInfo();
  }
}
