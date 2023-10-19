import { FirstPageComponent } from "./first-page.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

    {path:'', component: FirstPageComponent}
];


@NgModule({
    declarations: [FirstPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class FirstPageModule{}