import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.routes').then(r => r.IntroductionRoutes)
  }, {
    path: 'ui-elements',
    loadChildren: () => import('./pages/demo-ui-elements/demo-ui-elements.routes').then(r => r.DemoUiElementsRoutes)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/demo-services/demo-services.routes').then(r => r.DemoServiceRoutes)
  },
  {
    path: 'utils', loadChildren: () => import('./pages/demo-utils/demo-utils.routes').then(r => r.DemoUtilRoutes)
  },
  {
    path: 'libraries',
    loadChildren: () => import('./pages/demo-libraries/demo-libraries.route').then(r => r.DemoLibrariesRoutes)
  },
  {
    path: 'versioning',
    loadComponent: () => import('./shared/components/versioning/versioning.component').then(c => c.VersioningComponent),
    title: 'MedesUI - Versions'
    
  },
  {
    path: 'dev',
    loadComponent: () => import('./pages/dev-testing-components/dev-testing.component').then(c => c.DevTestingComponent),
    title: 'MedesUI - Introduction'
  },
  {
    path: '**', redirectTo: 'introduction/how-to-install'
  }
];