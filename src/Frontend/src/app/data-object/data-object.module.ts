import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataObjectEditComponent } from './data-object-edit/data-object-edit.component';
import { DataObjectListComponent } from './data-object-list/data-object-list.component';
import { ObjectFormatEditComponent } from './object-format-edit/object-format-edit.component';
import { ObjectFormatListComponent } from './object-format-list/object-format-list.component';
import { ObjectTargetEditComponent } from './object-target-edit/object-target-edit.component';
import { ObjectTargetListComponent } from './object-target-list/object-target-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataObjectEditComponent, DataObjectListComponent, ObjectFormatEditComponent, ObjectFormatListComponent, ObjectTargetEditComponent, ObjectTargetListComponent]
})
export class DataObjectModule { }
