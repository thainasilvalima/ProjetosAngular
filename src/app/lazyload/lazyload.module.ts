import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LazyloadComponent } from "./lazyload.component";
import { LazyloadRoutingsModule } from "./lazyload-routing.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({

    declarations: [LazyloadComponent],
    imports: [ CommonModule, RouterModule, LazyloadRoutingsModule],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class LazyloadModule {}

