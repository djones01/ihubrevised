import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileSelectWithInfoComponent } from './file-select-with-info/file-select-with-info.component';
import { ExtractionComponent } from './extraction/extraction.component';

// third party modules
import { PanelModule, InputSwitchModule, ChipsModule } from 'primeng/primeng';

import { ExtractionService } from './extraction.service';

import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    InputSwitchModule,
    PipesModule,
    ChipsModule
  ],
  declarations: [ExtractionComponent, FileSelectWithInfoComponent],
  exports: [ExtractionComponent],
  providers: [ExtractionService]
})
export class FileHandlingModule { }
