import { Injectable } from '@angular/core';

@Injectable()
export class InfoOptions{
fileTypeOptions: any;
unitOptions: any;

  constructor(){
      this.fileTypeOptions = [
        { value: "url", display: "URL" },
        { value: "text", display: "Text" },
        { value: "date", display: "Date" },
        { value: "bool", display: "Boolean" },
        { value: "num", display: "Number" },
        { value: "currency", display: "Currency" },
        { value: "email", display: "Email" }
    ];

    this.unitOptions = [{ value: "b", display: "Bytes" },
        { value: "kb", display: "KB" },
        { value: "mb", display: "MB" },
        { value: "gb", display: "GB" }];
    }
  }