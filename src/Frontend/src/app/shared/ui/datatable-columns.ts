import { Injectable } from '@angular/core';

@Injectable()
export class DataTableColumns {
    public dataObjectColumns = [];
    public objectFormatColumns = [];
    public objectTargetColumns = [];
    public fieldColumns = [];

    getColumns(type: string)
    {
        switch(type){
            case "dataObject": return this.dataObjectColumns;
            case "objectFormat": return this.objectFormatColumns;
            case "objectTarget": return this.objectTargetColumns;
            case "field": return this.fieldColumns;
        }
    }

    constructor(){
        this.dataObjectColumns = [
            { field: 'name', header: 'Name' },
            { field: 'description', header: 'Description' },
            { field: 'effective_Date', header: 'Effective Date' },
            { field: 'active', header: 'Active' },
            { field: 'created_By', header: 'Created By' },
            { field: 'creation_Date', header: 'Creation Date' },
            { field: 'modified_By', header: 'Modified By' },
            { field: 'date_Modified', header: 'Date Modified' }
        ];
    }
}