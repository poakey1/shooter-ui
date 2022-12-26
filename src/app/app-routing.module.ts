import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'playground', loadChildren: () => import('./playground/sandpit/sandpit.module').then(m => m.SandpitModule) },
  { path: '', redirectTo: '/playground', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
