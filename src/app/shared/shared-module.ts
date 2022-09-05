import { InfoComponent } from './components/info/info.component';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ImageDropzoneComponent } from './components/image-dropzone/image-dropzone.component';
import { InputFieldOptionComponent } from './components/input-field-option/input-field-option.component';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponent } from './components/select/select.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    FooterComponent,
    InputFieldComponent,
    SelectComponent,
    InputFieldOptionComponent,
    ImageDropzoneComponent,
    BackButtonComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    NgxDropzoneModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    InputFieldComponent,
    SelectComponent,
    InputFieldOptionComponent,
    ImageDropzoneComponent,
    BackButtonComponent,
    InfoComponent
  ]
})
export class SharedModule { }
