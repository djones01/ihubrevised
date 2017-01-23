import { Component, OnInit, Input, Output } from '@angular/core';
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
  fields: any[];

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
    this.extractionService.extractFields(extractForm).subscribe(data => data);
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
