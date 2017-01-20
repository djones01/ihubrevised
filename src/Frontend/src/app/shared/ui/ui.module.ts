import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoadingDotsComponent } from './loading-dots/loading-dots.component';
import { NestedSelectTableComponent } from './nested-select-table/nested-select-table.component';

import { DataTableColumns } from './datatable-columns';

import { DataTableModule, DialogModule, MultiSelectModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule, 
    DialogModule,
    MultiSelectModule
  ],
  declarations: [LoadingDotsComponent, NestedSelectTableComponent],
  exports: [LoadingDotsComponent],
  providers: [DataTableColumns]
})
export class UiModule { }
