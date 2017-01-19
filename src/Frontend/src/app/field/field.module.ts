import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { FieldEditComponent } from './field-edit/field-edit.component';
import { FieldEditListComponent } from './field-edit-list/field-edit-list.component';
import { FieldListComponent } from './field-list/field-list.component';

// modules
import { DataTableModule } from 'primeng/primeng';

//services
import { FieldService } from './field.service';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule
  ],
  declarations: [FieldEditComponent, FieldEditListComponent, FieldListComponent],
  providers: [FieldService]
})
export class FieldModule { }
