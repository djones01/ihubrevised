// module Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// pipes imports
import { ExtractFileNamePipe } from "./extract-file-name.pipe";

@NgModule({
    declarations: [
        ExtractFileNamePipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ExtractFileNamePipe
    ]
})
export class PipesModule {
}
