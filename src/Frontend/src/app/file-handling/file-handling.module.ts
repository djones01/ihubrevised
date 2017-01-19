import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// third party modules
import { PanelModule, FileUploadModule } from 'primeng/primeng';
import { DataFileSelectComponentComponent } from './data-file-select-component/data-file-select-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    FileUploadModule
  ],
  declarations: [DataFileSelectComponentComponent],
  exports: []
})
export class FileHandlingModule { }
