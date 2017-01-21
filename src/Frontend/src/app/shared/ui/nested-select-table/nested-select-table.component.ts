import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';

// column options
import { DataTableColumns } from '../datatable-columns';

// type imports
import { Field } from '../../../field/field';
import { DataObject, ObjectFormat, ObjectTarget } from '../../../data-object/data-object';

// service imports
import { DataObjectService, ObjectFormatService, ObjectTargetService } from '../../../data-object/data-object.module';
import { FieldService } from '../../../field/field.service';

@Component({
  selector: 'nested-select-table',
  templateUrl: './nested-select-table.component.html',
  styleUrls: ['./nested-select-table.component.css'],
  inputs: ['selectedVal', 'parentType', 'childType']
})
export class NestedSelectTableComponent implements OnInit, ControlValueAccessor {
  parentType: string;
  childType: string;

  propagateChange: any = () => { };
  validateFn: any = () => { };
  private _selectedChild: any;
  private parents: any[];
  private showDialog = false;
  private expandedParent: any;
  private loading = true;

  private parentColumnOptions: SelectItem[];
  private childColumnOptions: SelectItem[];

  private parentCols: any[];
  private childCols: any[];

  rowExpanded(event){
      // only display the loading dots after 1s to avoid strange UI if API call takes less time.
      let timeout = setTimeout(function(){ this.loading = true }, 1000);
      this.expandedParent = event.data;
      // get parent fields for the selected parent
      if(this.expandedParent.children == null || this.expandedParent.children == []){
          this.getChildren(this.expandedParent)
        .subscribe(children => 
            this.expandedParent.children = children, 
            () => {
                clearTimeout(timeout);
                this.loading = false;
            });
      }
  }

  getParentVals(): Observable<any>
  {
    switch(this.parentType){
      case "dataObject": 
        return this.dataObjectService.dataObjects;
      case "objectFormat": 
        return this.objectFormatService.objectFormats;
      case "objectTarget": 
        return this.objectTargetService.objectTargets;
      case "field": 
        return this.fieldService.fields;
    }
      
  }

  getChildren(expandedParent: any): Observable<any>
  {
      if(expandedParent instanceof DataObject){
         if(this.childType == "objectFormat")
         {
            return this.dataObjectService.getObjectFormats(expandedParent.dataObjectId);
         }
         else if(this.childType == "objectTarget"){
           return this.dataObjectService.getObjectTargets(expandedParent.dataObjectId);
         }
      }
      else if(expandedParent instanceof ObjectFormat){
          if(this.childType == "fields"){
            return this.objectFormatService.getFields(expandedParent.objectFormatId);
          }
          else if(this.childType == "infos"){
            return this.objectFormatService.getSourceInfos(expandedParent.objectFormatId);
          }
      }
      else if(expandedParent instanceof ObjectTarget){
        return this.objectTargetService.getTargetInfos(expandedParent.objectTargetId);
      }
  }

  cancel(){
      this.selectedChild = null;
      this.toggleDialog();
  }

  toggleDialog(){
    this.showDialog = !this.showDialog;
  }
  
  registerOnChange(fn) {
      this.propagateChange = fn;
  }

  registerOnTouched() { }

  writeValue(value: any) {
      if (value) {
          this.selectedChild = value;
      }
  }

  validate(c: FormControl) {
      return this.validateFn(c);
  }

  get selectedChild() {
      return this._selectedChild;
  }

  set selectedChild(val) {
      this._selectedChild = val;
      this.propagateChange(val);
  }

  constructor(private dataObjectService: DataObjectService, 
      private objectFormatService: ObjectFormatService,
      private objectTargetService: ObjectTargetService,
      private fieldService: FieldService,
      private dataTableColumns: DataTableColumns) { 
  }
  ngOnInit() {
    // Initialize parent and parentfield column options
    this.parentCols = this.dataTableColumns.getColumns(this.parentType);
    this.childCols = this.dataTableColumns.getColumns(this.childType);

    // Populate parents
    this.getParentVals().subscribe(parents => this.parents = parents);

    for (let i = 0; i < this.parentCols.length; i++) {
        this.parentColumnOptions.push({ label: this.parentCols[i].header, value: this.parentCols[i] });
    }
    for (let i = 0; i < this.parentCols.length; i++) {
        this.childColumnOptions.push({ label: this.childCols[i].header, value: this.childCols[i] });
    }
  }
}
