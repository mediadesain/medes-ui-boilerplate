import { Routes } from '@angular/router';

export const DemoUtilRoutes: Routes = [
  { path: '', redirectTo: 'string', pathMatch: 'full' },
  { path: 'string', loadComponent: () => import('./string-utils/string-utils.component').then(c => c.StringUtilsComponent), title: 'MedesUI - String Utils' },
  { path: 'number', loadComponent: () => import('./number-utils/number-utils.component').then(c => c.NumberUtilsComponent), title: 'MedesUI - Number Utils' },
  { path: 'object', loadComponent: () => import('./object-utils/object-utils.component').then(c => c.ObjectUtilsComponent), title: 'MedesUI - Object Utils' },
  { path: 'array', loadComponent: () => import('./aray-utils/aray-utils.component').then(c => c.ArrayUtilsComponent), title: 'MedesUI - Array Utils' },
  { path: 'date', loadComponent: () => import('./date-utils/date-utils.component').then(c => c.DateUtilsComponent), title: 'MedesUI - Date Utils' },
  { path: 'color', loadComponent: () => import('./color-utils/color-utils.component').then(c => c.ColorUtilsComponent), title: 'MedesUI - Color Utils' }
];