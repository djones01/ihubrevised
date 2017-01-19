import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { DataService } from "../shared/data/data.module";
import { AlertService } from "../shared/alert/alert.module";
import { Field } from "./field";

@Injectable()
export class FieldService {
    private _fields: BehaviorSubject<Field[]> = new BehaviorSubject([]);
    fields: Observable<Field[]> = this._fields.asObservable();
    private _editField: BehaviorSubject<Field> = new BehaviorSubject(null);
    edit  : Observable<Field> = this._editField.asObservable();

    private dataStore: {
        fields: Field[]
    };

    loadall() {
        this.dataService.GetAll("Fields")
            .subscribe(fields => {
                this.dataStore.fields = fields;
                this._fields.next(this.dataStore.fields);
            }, error => console.log(error), () => { });
    }

    setEditField(edit: Field) {
        this._editField.next(edit);
    }

    clearEditField() {
        this._editField.next(null);
    }

    add(field: Field) {
        this.dataService.Add('Fields', field).subscribe((field: Field) => {
            this.dataStore.fields.push(field);
            this._fields.next(this.dataStore.fields);           
        }, error => console.log(error));
    }

    update(field: Field) {
        this.dataService.Update('Fields', field.fieldId, field).subscribe((field: Field) => {
            this.dataStore.fields.forEach((m, i) => {
                if (m.fieldId === field.fieldId) { this.dataStore.fields[i] = field; }
            });
            this._fields.next(this.dataStore.fields);
        }, error => console.log(error));
    }

    delete(fieldId: number) {
        this.dataService.Delete('Fields', fieldId).subscribe(response => {
            this.dataStore.fields.forEach((m, i) => {
                if (m.fieldId === fieldId) { this.dataStore.fields.splice(i, 1); }
            });
            this._fields.next(this.dataStore.fields);
        }, error => console.log(error));
    }

    constructor(private dataService: DataService, private alertService: AlertService) {
        this.dataStore = { fields: [] };
        // Get the list of fields
        this.loadall();
    }
}
