import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InformationProcessingComponent} from "./information-processing/information-processing.component";

const routes: Routes = [
  {path: '', component: InformationProcessingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
