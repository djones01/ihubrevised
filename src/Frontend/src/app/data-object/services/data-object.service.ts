import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { DataService } from "../../shared/data/data.module";
import { AlertService } from "../../shared/alert/alert.module";
import { DataObject, ObjectFormat, ObjectTarget } from "../data-object";

@Injectable()
export class DataObjectService {
    private _dataObjects: BehaviorSubject<DataObject[]> = new BehaviorSubject([]);
    dataObjects: Observable<DataObject[]> = this._dataObjects.asObservable();
    private _editDataObject: BehaviorSubject<DataObject> = new BehaviorSubject(null);
    edit  : Observable<DataObject> = this._editDataObject.asObservable();

    private dataStore: {
        dataObjects: DataObject[]
    };

    loadall() {
        this.dataService.GetAll("dataobjects")
            .subscribe(dataObjects => {
                this.dataStore.dataObjects = dataObjects;
                this._dataObjects.next(this.dataStore.dataObjects);
            }, error => console.log(error), () => { });
    }

    getObjectFormats(dataObjectId: number): Observable<ObjectFormat[]> {
        return this.dataService.Get("dataobjects/getobjectformats", dataObjectId);
    }

    getObjectTargets(dataObjectId: number)
    {
       return this.dataService.Get("dataobjects/getobjecttargets", dataObjectId);
    }

    setEditDataObject(edit: DataObject) {
        this._editDataObject.next(edit);
    }

    clearEditDataObject() {
        this._editDataObject.next(null);
    }

    add(dataObject: DataObject) {
        this.dataService.Add('dataobjects', dataObject).subscribe((dataObject: DataObject) => {
            this.dataStore.dataObjects.push(dataObject);
            this._dataObjects.next(this.dataStore.dataObjects);           
        }, error => console.log(error));
    }

    update(dataObject: DataObject) {
        this.dataService.Update('dataobjects', dataObject.dataObjectId, dataObject).subscribe((dataObject: DataObject) => {
            this.dataStore.dataObjects.forEach((m, i) => {
                if (m.dataObjectId === dataObject.dataObjectId) { this.dataStore.dataObjects[i] = dataObject; }
            });
            this._dataObjects.next(this.dataStore.dataObjects);
        }, error => console.log(error));
    }

    delete(dataObjectId: number) {
        this.dataService.Delete('dataobjects', dataObjectId).subscribe(response => {
            this.dataStore.dataObjects.forEach((m, i) => {
                if (m.dataObjectId === dataObjectId) { this.dataStore.dataObjects.splice(i, 1); }
            });
            this._dataObjects.next(this.dataStore.dataObjects);
        }, error => console.log(error));
    }

    constructor(private dataService: DataService, private alertService: AlertService) {
        this.dataStore = { dataObjects: [] };
        // Get the list of dataObjects
        this.loadall();
    }
}
