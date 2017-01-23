import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Field } from "../../field/field";

@Injectable()
export class DataObjectBuilderService {

    private _fields: BehaviorSubject<Field[]> = new BehaviorSubject([]);
    stagingFields: Observable<Field[]> = this._fields.asObservable();

  // Init form models
    initDataObject() {
        return this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: new Date(),
            active: true,
            existingObjectFormats: [],
            existingObjectTargets: [],
            objectFormats: this._fb.array([]),
            objectTargets: this._fb.array([])
        });
    }

    initObjectFormat() {
        return this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: new Date(),
            active: true,
            fieldsGroup: this.initFieldsGroup()
        });
    }

    initFieldsGroup(){
        return this._fb.group({
                fromBatchFiles: false,
                perFileFormats: false,
                preserveFileOrdering: true,
                fields: this._fb.array([]),
                apiInfos: this._fb.array([]),
                fileInfos: this._fb.array([])
            });
    }

    initObjectTarget() {
        return this._fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            effective_Date: new Date(),
            active: true,
            checkTypes: true,
            evalConditions: true,
            stopOnError: true,
            apiInfos: this._fb.array([]),
            fileInfos: this._fb.array([])
        });
    }

    initSourceFileInfo()
    {
        return this._fb.group({
            fileName: '',
            batchProcessLines: false,
            delimiter: '',
            lineFormat: ['', Validators.required],
            startLine: [1],
            flls: this._fb.array([]),
            file: [null, Validators.required]
        });
    }

    initTargetFileInfo()
  {
      return this._fb.group({
            fileName: ['', Validators.required],
            fileType: ['', Validators.required],
            compressFile: [false],
            lineLimit: 0,
            fileSizeLimit: 0,
            fileSizeLimitUnits: '',
            delimiter: '',
            lineFormat: ['', Validators.required],
            flls: this._fb.array([]),
            file: null
        });
  }
  
  initTargetApiInfo()
  {
       return this._fb.group({
            fileName: ['', Validators.required],
            fileType: ['', Validators.required],
            effective_Date: new Date(),
            active: true,
            compressFile: false,
            lineLimit: 0,
            fileSizeLimit: [0],
            fileSizeLimitUnits: ['mb'],
            batchProcessLines: [false],
            delimiter: ['', Validators.required],
            startLine: [1, Validators.required],
            hasFixedLengthLines: [false],
            flls: this._fb.array([])
        });
  }

  initFll(){
      return this._fb.group({
          lineLength: [100, Validators.required],
          lineIndex: [1, Validators.required],
          fieldIndexes: [[], Validators.required]
      });
  }

  

  initField(){
      return this._fb.group({
          seqNum: [null],
          fieldId: [null],
          name: ['', Validators.required],
          datatype: ['', Validators.required],
          length: [100, Validators.required],
          active: true,
          existing: false
      });
  }

  setStagedFields(fields){
      this._fields.next(fields);
  }

  constructor(private _fb: FormBuilder) { }

}
