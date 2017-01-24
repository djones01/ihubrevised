import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Field } from "./field";

@Injectable()
export class FieldOverviewService {
  private _editingFields: BehaviorSubject<Field[]> = new BehaviorSubject([]);
  editingFields: Observable<Field[]> = this._editingFields.asObservable();

  private _workingFieldSet: BehaviorSubject<Field[]> = new BehaviorSubject([]);
  workingFieldSet: Observable<Field[]> = this._workingFieldSet.asObservable();

  private _showDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  showDialog: Observable<boolean> = this._showDialog.asObservable();

  showEditingDialog(){
    this._showDialog.next(true);
  }

  hideEditingDialog(){
    this._showDialog.next(false);
  }

  addNewToWorkingSet(fields: Field[]){
    let newWorkingSet = this._workingFieldSet.getValue();
    for(var i = 0; i < fields.length; i++){
      fields[i].seqNum = newWorkingSet.length + 1;
      fields[i].existing = false;
      newWorkingSet.push(fields[i]);
    }
    this._workingFieldSet.next(newWorkingSet);
  }

  addExistingToWorkingSet(fields: Field[]){
    let newWorkingSet = this._workingFieldSet.getValue();
    for(var i = 0; i < fields.length; i++){
      fields[i].seqNum = newWorkingSet.length + 1;
      newWorkingSet.push(fields[i]);
    }
    this._workingFieldSet.next(newWorkingSet);
  }

  setEditingFields(fields: Field[]){
    this._editingFields.next(fields);
  }

  clearWorkingSet(){
    this._workingFieldSet.next([]);
  }

  constructor() { }

}
