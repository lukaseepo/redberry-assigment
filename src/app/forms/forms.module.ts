import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { InformationProcessingComponent } from './information-processing/information-processing.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxDropzoneModule} from "ngx-dropzone";




@NgModule({
  declarations: [
    InformationProcessingComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ]
})
export class FormsModule { }
