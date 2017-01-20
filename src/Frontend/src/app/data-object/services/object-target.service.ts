import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { DataService } from "../../shared/data/data.module";
import { AlertService } from "../../shared/alert/alert.module";
import { ObjectTarget } from "../data-object";

@Injectable()
export class ObjectTargetService {
    private _objectTargets: BehaviorSubject<ObjectTarget[]> = new BehaviorSubject([]);
    objectTargets: Observable<ObjectTarget[]> = this._objectTargets.asObservable();
    private _editObjectTarget: BehaviorSubject<ObjectTarget> = new BehaviorSubject(null);
    edit  : Observable<ObjectTarget> = this._editObjectTarget.asObservable();

    private dataStore: {
        objectTargets: ObjectTarget[]
    };

    loadall() {
        this.dataService.GetAll("objecttargets")
            .subscribe(objectTargets => {
                this.dataStore.objectTargets = objectTargets;
                this._objectTargets.next(this.dataStore.objectTargets);
            }, error => console.log(error), () => { });
    }

    getTargetInfos(objectFormatId: number)
    {
       return this.dataService.Get("objecttargets/gettargetinfos", objectFormatId);
    }

    setEditObjectTarget(edit: ObjectTarget) {
        this._editObjectTarget.next(edit);
    }

    clearEditObjectTarget() {
        this._editObjectTarget.next(null);
    }

    add(objectTarget: ObjectTarget) {
        this.dataService.Add('objecttargets', objectTarget).subscribe((objectTarget: ObjectTarget) => {
            this.dataStore.objectTargets.push(objectTarget);
            this._objectTargets.next(this.dataStore.objectTargets);           
        }, error => console.log(error));
    }

    update(objectTarget: ObjectTarget) {
        this.dataService.Update('objecttargets', objectTarget.objectTargetId, objectTarget).subscribe((objectTarget: ObjectTarget) => {
            this.dataStore.objectTargets.forEach((m, i) => {
                if (m.objectTargetId === objectTarget.objectTargetId) { this.dataStore.objectTargets[i] = objectTarget; }
            });
            this._objectTargets.next(this.dataStore.objectTargets);
        }, error => console.log(error));
    }

    delete(objectTargetId: number) {
        this.dataService.Delete('objecttargets', objectTargetId).subscribe(response => {
            this.dataStore.objectTargets.forEach((m, i) => {
                if (m.objectTargetId === objectTargetId) { this.dataStore.objectTargets.splice(i, 1); }
            });
            this._objectTargets.next(this.dataStore.objectTargets);
        }, error => console.log(error));
    }

    constructor(private dataService: DataService, private alertService: AlertService) {
        this.dataStore = { objectTargets: [] };
        // Get the list of objectTargets
        this.loadall();
    }
}
