import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// components
import { FieldEditComponent } from './field-edit/field-edit.component';
import { FieldEditListComponent } from './field-edit-list/field-edit-list.component';
import { FieldOverviewComponent } from './field-overview/field-overview.component';
import { FieldSelectExistingComponent } from './field-select-existing/field-select-existing.component';
import { NewFieldsComponent } from './new-fields/new-fields.component';
import { FieldOrderListComponent } from './field-order-list/field-order-list.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';
import { FieldDetailListComponent } from './field-detail-list/field-detail-list.component';

// modules
import { 
  DataTableModule, 
  TabViewModule, 
  DialogModule, 
  ConfirmDialogModule, 
  ConfirmationService, 
  DropdownModule, 
  InputSwitchModule, 
  OrderListModule,
  PanelModule,
  DataScrollerModule
} from 'primeng/primeng';
import { FileHandlingModule } from '../file-handling/file-handling.module';

//services
import { FieldService } from './field.service';
import { FieldOptions } from './field-options';

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
    InputSwitchModule,
    OrderListModule,
    PanelModule,
    DataScrollerModule,
    FileHandlingModule
  ],
  declarations: [FieldEditComponent, FieldEditListComponent, FieldOverviewComponent, FieldSelectExistingComponent, FieldOrderListComponent, NewFieldsComponent, FieldDetailComponent, FieldDetailListComponent],
  providers: [FieldService, FieldOptions, ConfirmationService],
  exports: [FieldOverviewComponent, FieldSelectExistingComponent]
})
export class FieldModule { }
