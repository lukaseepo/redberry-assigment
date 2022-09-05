import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDetailRoutingModule } from './data-detail-routing.module';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    DataDetailComponent
  ],
  imports: [
    CommonModule,
    DataDetailRoutingModule,
    SharedModule
  ]
})
export class DataDetailModule { }
