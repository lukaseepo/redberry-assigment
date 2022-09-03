import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDetailRoutingModule } from './data-detail-routing.module';
import { DataDetailComponent } from './data-detail/data-detail.component';


@NgModule({
  declarations: [
    DataDetailComponent
  ],
  imports: [
    CommonModule,
    DataDetailRoutingModule
  ]
})
export class DataDetailModule { }
