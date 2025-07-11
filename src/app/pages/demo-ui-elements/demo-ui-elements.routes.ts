import { Routes } from '@angular/router';

export const DemoUiElementsRoutes: Routes = [
  { path: '', redirectTo: 'basic-elements', pathMatch: 'full'  },
  { path: 'basic-elements', loadComponent: () => import('./demo-basic-elements/demo-basic-elements.component').then(c => c.DemoBasicElementsComponent), title: 'MedesUI - Basic Elements' },
  { path: 'layout-utils', loadComponent: () => import('./demo-layout-utils/demo-layout-utils.component').then(c => c.DemoLayoutUtilsComponent), title: 'MedesUI - Layout Utils' },
  { path: 'grid-system', loadComponent: () => import('./demo-grid-system/demo-grid-system.component').then(c => c.DemoGridSystemComponent), title: 'MedesUI - Grid System' },
  { path: 'loader', loadComponent: () => import('./demo-loader/demo-loader.component').then(c => c.DemoLoaderComponent), title: 'MedesUI - Loader' }
];
