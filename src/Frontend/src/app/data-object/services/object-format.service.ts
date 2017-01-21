import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { DataService } from "../../shared/data/data.module";
import { AlertService } from "../../shared/alert/alert.module";
import { ObjectFormat } from "../data-object";

@Injectable()
export class ObjectFormatService {
    private _objectFormats: BehaviorSubject<ObjectFormat[]> = new BehaviorSubject([]);
    objectFormats: Observable<ObjectFormat[]> = this._objectFormats.asObservable();
    private _editObjectFormat: BehaviorSubject<ObjectFormat> = new BehaviorSubject(null);
    edit  : Observable<ObjectFormat> = this._editObjectFormat.asObservable();

    private dataStore: {
        objectFormats: ObjectFormat[]
    };

    loadall() {
        this.dataService.GetAll("objectformats")
            .subscribe(objectFormats => {
                this.dataStore.objectFormats = objectFormats;
                this._objectFormats.next(this.dataStore.objectFormats);
            }, error => console.log(error), () => { });
    }

    getFields(objectFormatId: number) {
        return this.dataService.Get("objectformats/getfields", objectFormatId);
    }

    getSourceInfos(objectFormatId: number)
    {
       return this.dataService.Get("objectformats/getsourceinfos", objectFormatId);
    }

    setEditObjectFormat(edit: ObjectFormat) {
        this._editObjectFormat.next(edit);
    }

    clearEditObjectFormat() {
        this._editObjectFormat.next(null);
    }

    add(objectFormat: ObjectFormat) {
        this.dataService.Add('objectformats', objectFormat).subscribe((objectFormat: ObjectFormat) => {
            this.dataStore.objectFormats.push(objectFormat);
            this._objectFormats.next(this.dataStore.objectFormats);           
        }, error => console.log(error));
    }

    update(objectFormat: ObjectFormat) {
        this.dataService.Update('objectformats', objectFormat.objectFormatId, objectFormat).subscribe((objectFormat: ObjectFormat) => {
            this.dataStore.objectFormats.forEach((m, i) => {
                if (m.objectFormatId === objectFormat.objectFormatId) { this.dataStore.objectFormats[i] = objectFormat; }
            });
            this._objectFormats.next(this.dataStore.objectFormats);
        }, error => console.log(error));
    }

    delete(objectFormatId: number) {
        this.dataService.Delete('objectformats', objectFormatId).subscribe(response => {
            this.dataStore.objectFormats.forEach((m, i) => {
                if (m.objectFormatId === objectFormatId) { this.dataStore.objectFormats.splice(i, 1); }
            });
            this._objectFormats.next(this.dataStore.objectFormats);
        }, error => console.log(error));
    }

    constructor(private dataService: DataService, private alertService: AlertService) {
        this.dataStore = { objectFormats: [] };
        // Get the list of objectFormats
        this.loadall();
    }
}
