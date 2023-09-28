import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",loadChildren:()=> import('./auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path:'ecart/returns',loadChildren: () =>
    import('./comman/comman.module').then((m) => m.CommanModule),
  },
  {
    path:'ecart/maintenance',loadChildren: () =>
    import('./maintenance/maintenance.module').then((m) => m.MaintenanceModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
