import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataObjectEditComponent } from './data-object-edit/data-object-edit.component';
import { DataObjectListComponent } from './data-object-list/data-object-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: "list", component: DataObjectListComponent },
    { path: "edit", component: DataObjectEditComponent },
    { path: "**", component: DataObjectListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataObjectRoutingModule { }