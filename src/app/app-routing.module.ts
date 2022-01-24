import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'filter-checkbox',
    loadChildren: () => import('./demo-pages/filter-checkbox/filter-checkbox.module').then(m => m.FilterCheckboxModule)
  },
  {
    path: 'doc-boilerplate',
    loadChildren: () => import('./demo-pages/mds-doc-boilerplate/mds-doc-boilerplate.module').then(m => m.MdsDocBoilerplateModule)
  },
  { path: '**', redirectTo: 'filter-checkbox'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
