import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataListRoutingModule } from './data-list-routing.module';
import { DataListComponent } from './data-list.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    DataListComponent,
  ],
  imports: [
    CommonModule,
    DataListRoutingModule,
    SharedModule
  ]
})
export class DataListModule { }
