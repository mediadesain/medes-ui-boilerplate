import { Routes } from '@angular/router';

export const DemoNavigationManagerRoutes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', loadComponent: () => import('./intro/demo-navigation-manager.component').then(c => c.DemoNavigationManagerComponent), title: 'MedesUI - Navigation Manager' },
  { path: 'page-navigation', loadComponent: () => import('./demo-page-navigation/demo-page-navigation.component').then(c => c.DemoPageNavigationComponent), title: 'MedesUI - Demo Page Navigation' },
  { path: 'page-counter', loadComponent: () => import('./demo-page-counter/demo-page-counter.component').then(c => c.DemoPageCounterComponent), title: 'MedesUI - Demo Page Counter' },
];