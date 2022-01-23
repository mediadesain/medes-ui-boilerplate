import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: 'filter-checkbox'},
  { path: 'filter-checkbox', loadChildren: () => import('./filter-checkbox/filter-checkbox.module').then(m => m.FilterCheckboxModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
