import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// third party modules
import { PanelModule, FileUploadModule, InputSwitchModule } from 'primeng/primeng';
import { DataFileSelectComponent } from './data-file-select/data-file-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    FileUploadModule,
    InputSwitchModule
  ],
  declarations: [DataFileSelectComponent],
  exports: [DataFileSelectComponent]
})
export class FileHandlingModule { }
