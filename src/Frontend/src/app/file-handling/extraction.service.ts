import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AppSettings } from '../app-settings';
import { AlertService } from '../shared/alert/alert.service';
import { Observable } from "rxjs/Rx";
import { ExtractModel } from './extract-model';

@Injectable()
export class ExtractionService {
  
    extractFields(fieldsForm: ExtractModel) {
      let formData = new FormData();
      formData.append('fromBatchFiles', fieldsForm.fromBatchFiles);
      formData.append('perFileFormats', fieldsForm.perFileFormats);
      formData.append('preserveFileOrdering', fieldsForm.preserveFileOrdering);
      fieldsForm.fileInfos.forEach((fileInfo, i) => {
          formData.append('file'+i, fileInfo.file, fileInfo.fileName);
          fileInfo.file = null;
          fileInfo.index = i;
          formData.append('fileInfo'+i, JSON.stringify(fileInfo))
      });
      return this.http.post('api/files/extract/fields', formData).map(res => res.json())
            .catch((error: any) => this.handleError(error));
    }

  constructor(private http: Http, private appSettings: AppSettings, private alertService: AlertService) {
    }
    
    private handleError(error: any) {
        const errMsg = (error.message)
            ? error.message
            : error.status ? `${error.status} - ${error.statusText}` : "Server Error";
        this.alertService.error("Server Error", "Please consult an admin for help");
        return Observable.throw(errMsg);
    }

}


