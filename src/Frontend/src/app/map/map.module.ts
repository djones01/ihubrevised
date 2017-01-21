import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MapRoutingModule } from './map-routing.module';
import { FieldModule } from '../field/field.module';

// third party modules
import { 
  DataTableModule, 
  SharedModule, 
  ButtonModule, 
  DialogModule, 
  ConfirmDialogModule, 
  ConfirmationService, 
  MultiSelectModule, 
  PanelModule, 
  CalendarModule,
  InputSwitchModule
} from 'primeng/primeng';


// Components
import { MapFileSelectComponent } from './map-run/map-file-select/map-file-select.component';
import { MapOptionsComponent } from './map-run/map-options/map-options.component';
import { MapRunComponent } from './map-run/map-run/map-run.component';
import { TransformationEditComponent } from './transformation/transformation-edit/transformation-edit.component';
import { ConditionEditComponent } from './transformation/condition/condition-edit/condition-edit.component';
import { RuleEditComponent } from './transformation/rule/rule-edit/rule-edit.component';
import { RuleFieldEditComponent } from './transformation/rule/rule-field-edit/rule-field-edit.component';
import { DateFormatComponent } from './transformation/rule/date-format/date-format.component';
import { FieldFormatComponent } from './transformation/rule/field-format/field-format.component';
import { MapEditComponent } from './map-edit/map-edit.component';
import { MapListComponent } from './map-list/map-list.component';

// Services
import { MapService } from './services/map.service';
import { MapBuilderService } from './services/map-builder.service';
import { MapRunService } from './services/map-run.service';
export { MapService } from './services/map.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MapRoutingModule,
    DataTableModule, 
    SharedModule, 
    ButtonModule, 
    DialogModule, 
    ConfirmDialogModule, 
    MultiSelectModule, 
    PanelModule, 
    CalendarModule,
    InputSwitchModule
  ],
  declarations: [
    MapFileSelectComponent, 
    MapOptionsComponent, 
    MapRunComponent, 
    TransformationEditComponent, 
    ConditionEditComponent, 
    RuleEditComponent, 
    RuleFieldEditComponent, 
    DateFormatComponent, 
    FieldFormatComponent, 
    MapEditComponent, 
    MapListComponent
    ],
    exports: [MapListComponent,
    MapEditComponent
    ],
    providers: [MapService, MapRunService, MapBuilderService, ConfirmationService]
})
export class MapModule { }
