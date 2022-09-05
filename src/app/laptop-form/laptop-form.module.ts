import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopFormRoutingModule } from './laptop-form-routing.module';
import { LaptopFormComponent } from './laptop-form/laptop-form.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    LaptopFormComponent,
  ],
  imports: [
    CommonModule,
    LaptopFormRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    NgxDropzoneModule,
    SharedModule
  ]
})
export class LaptopFormModule { }
