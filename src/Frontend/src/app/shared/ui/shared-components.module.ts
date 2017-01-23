import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoadingDotsComponent } from './loading-dots/loading-dots.component';
import { NestedSelectTableComponent } from './nested-select-table/nested-select-table.component';

import { DataTableColumns } from './datatable-columns';

import { DataTableModule, DialogModule, MultiSelectModule, ConfirmationService } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule, 
    DialogModule,
    MultiSelectModule
  ],
  declarations: [NestedSelectTableComponent],
  exports: [NestedSelectTableComponent],
  providers: [DataTableColumns, ConfirmationService]
})
export class SharedComponentsModule { }
