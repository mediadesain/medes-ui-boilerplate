import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'string', pathMatch: 'full' },
  { path: 'string', loadComponent: () => import('./string-utils/string-utils.component').then(c => c.StringUtilsComponent), data: {title: 'MedesUI - String Utils'} },
  { path: 'number', loadComponent: () => import('./number-utils/number-utils.component').then(c => c.NumberUtilsComponent), data: {title: 'MedesUI - Number Utils'} },
  { path: 'object', loadComponent: () => import('./object-utils/object-utils.component').then(c => c.ObjectUtilsComponent), data: {title: 'MedesUI - Object Utils'} },
  { path: 'array', loadComponent: () => import('./aray-utils/aray-utils.component').then(c => c.ArrayUtilsComponent), data: {title: 'MedesUI - Array Utils'} },
  { path: 'date', loadComponent: () => import('./date-utils/date-utils.component').then(c => c.DateUtilsComponent), data: {title: 'MedesUI - Date Utils'} },
  { path: 'color', loadComponent: () => import('./color-utils/color-utils.component').then(c => c.ColorUtilsComponent), data: {title: 'MedesUI - Color Utils'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoUtilsRoutingModule { }
