import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileInfoEditComponent } from './file-info-edit/file-info-edit.component';
import { ApiInfoEditComponent } from './api-info-edit/api-info-edit.component';

import { InputSwitchModule, PanelModule } from 'primeng/primeng';

import { InfoOptions } from './info-options';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    PanelModule
  ],
  declarations: [FileInfoEditComponent, ApiInfoEditComponent],
  exports: [FileInfoEditComponent, ApiInfoEditComponent],
  providers: [InfoOptions]
})
export class ObjectInfoModule { }
