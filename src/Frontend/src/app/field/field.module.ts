import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// components
import { FieldEditComponent } from './field-edit/field-edit.component';
import { FieldEditListComponent } from './field-edit-list/field-edit-list.component';
import { FieldOverviewComponent } from './field-overview/field-overview.component';
import { FieldSelectExistingComponent } from './field-select-existing/field-select-existing.component';

// modules
import { DataTableModule, TabViewModule, DialogModule, ConfirmDialogModule, DropdownModule, InputSwitchModule } from 'primeng/primeng';

//services
import { FieldService } from './field.service';

import { FieldOptions } from './field-options';
import { FieldExtractorComponent } from './field-extractor/field-extractor.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    TabViewModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    InputSwitchModule
  ],
  declarations: [FieldEditComponent, FieldEditListComponent, FieldOverviewComponent, FieldSelectExistingComponent, FieldExtractorComponent],
  providers: [FieldService, FieldOptions],
  exports: [FieldOverviewComponent, FieldSelectExistingComponent]
})
export class FieldModule { }
