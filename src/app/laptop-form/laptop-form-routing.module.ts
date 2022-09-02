import { LaptopFormGuard } from './guards/laptop-form.guard';
import { LaptopFormComponent } from './laptop-form/laptop-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: LaptopFormComponent,
  canActivate: [LaptopFormGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaptopFormRoutingModule { }
