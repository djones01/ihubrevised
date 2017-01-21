import { Injectable } from '@angular/core';

@Injectable()
export class FieldOptions{
    dataTypeOptions: any;

  constructor(){
      this.dataTypeOptions = [
        { value: "url", label: "URL" },
        { value: "text", label: "Text" },
        { value: "date", label: "Date" },
        { value: "bool", label: "Boolean" },
        { value: "num", label: "Number" },
        { value: "currency", label: "Currency" },
        { value: "email", label: "Email" }
    ];
  }
}