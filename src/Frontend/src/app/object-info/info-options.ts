import { Injectable } from '@angular/core';

@Injectable()
export class InfoOptions{
fileTypeOptions: any;
unitOptions: any;

  constructor(){
      this.fileTypeOptions = [
        { value: "txt", label: ".txt" },
        { value: "dat", label: ".dat" },
        { value: "csv", label: ".csv" }
    ];
    this.unitOptions = [{ value: "b", label: "Bytes" },
        { value: "kb", label: "KB" },
        { value: "mb", label: "MB" },
        { value: "gb", label: "GB" }];
    }
  }