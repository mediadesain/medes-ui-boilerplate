import { Routes } from '@angular/router';

export const DemoLibrariesRoutes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'modal-component',
    loadComponent: () => import('./demo-components/demo-modal-component/demo-modal-component.component').then(c => c.DemoModalComponent),
    title: 'MedesUI - Modal Component'
  },
  {
    path: 'form-components',
    loadChildren: () => import('./demo-components/demo-form-components/demo-form-components.routes').then(r => r.DemoFormComponentsroutes)
  },
  {
    path: 'filter-components',
    loadChildren: () => import('./demo-components/demo-filter-components/demo-filter-components.routes').then(r => r.DemoFilterComponentsRoutes)
  },
  {
    path: 'navigation-manager',
    loadChildren: () => import('./demo-components/demo-navigation-manager/demo-navigation-manager.routes').then(r => r.DemoNavigationManagerRoutes)
  },
  {
    path: 'prismjs-highlight',
    loadComponent: () => import('./demo-components/demo-prismjs-highlight/demo-prismjs-highlight.component').then(c => c.DemoPrismjsHighlightComponent),
    title: 'MedesUI - PrismJs'
  },
  { path: 'pipes', loadChildren: () => import('./demo-pipes/demo-pipes.routes').then(r => r.DemoPipesRoutes) },
  {
    path: 'demo',
    loadComponent: () => import('./demo/demo.component').then(c => c.DemoComponent),
    title: 'MedesUI - Demo'
  },
];