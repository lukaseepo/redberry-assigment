import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: "full"
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user-form',
    loadChildren: () => import('./user-form/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'laptop-form',
    loadChildren: () => import('./laptop-form/laptop-form.module').then(m => m.LaptopFormModule)
  },
  {
    path: 'data-list',
    loadChildren: () => import('./data-list/data-list.module').then(m => m.DataListModule)
  },
  {
    path: 'data-list/:id',
    loadChildren: () => import('./data-detail/data-detail.module').then(m => m.DataDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
