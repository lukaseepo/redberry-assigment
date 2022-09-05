import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxDropzoneModule} from "ngx-dropzone";
import { UserFormComponent } from './user-form/user-form.component';
import { SharedModule } from '../shared/shared-module';
import { FormsRoutingModule } from './user-forms-routing.module';




@NgModule({
  declarations: [
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    SharedModule
  ]
})
export class FormsModule { }
