import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataObjectRoutingModule } from './data-object-routing.module';

import { ObjectInfoModule } from '../object-info/object-info.module';

// components
import { DataObjectEditComponent } from './data-object-edit/data-object-edit.component';
import { DataObjectListComponent } from './data-object-list/data-object-list.component';
import { ObjectFormatEditComponent } from './object-format-edit/object-format-edit.component';
import { ObjectFormatListComponent } from './object-format-list/object-format-list.component';
import { ObjectTargetEditComponent } from './object-target-edit/object-target-edit.component';
import { ObjectTargetListComponent } from './object-target-list/object-target-list.component';

// third party modules
import { 
  DataTableModule, 
  SharedModule, 
  ButtonModule, 
  DialogModule, 
  ConfirmDialogModule, 
  ConfirmationService, 
  MultiSelectModule, 
  PanelModule, 
  CalendarModule,
  InputSwitchModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataObjectRoutingModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule,
    PanelModule,
    CalendarModule,
    InputSwitchModule,
    ObjectInfoModule
  ],
  declarations: [DataObjectEditComponent, DataObjectListComponent, ObjectFormatEditComponent, ObjectFormatListComponent, ObjectTargetEditComponent, ObjectTargetListComponent]
})
export class DataObjectModule { }
