import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaptopFormRoutingModule } from './laptop-form-routing.module';
import { LaptopFormComponent } from './laptop-form/laptop-form.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    LaptopFormComponent
  ],
  imports: [
    CommonModule,
    LaptopFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    NgxDropzoneModule
  ]
})
export class LaptopFormModule { }
