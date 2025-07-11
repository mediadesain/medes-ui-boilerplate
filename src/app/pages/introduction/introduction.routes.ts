import { Routes } from '@angular/router';

export const IntroductionRoutes: Routes = [
  { path: 'how-to-install', redirectTo: 'info', pathMatch: 'full' },
  {
    path: 'how-to-install',
    loadComponent: () => import('./how-to-install/how-to-install.component').then(c => c.HowToInstallComponent),
    title: 'MedesUI - Introduction'
  },
  {
    path: 'color-scheme',
    loadComponent: () => import('./color-scheme/color-scheme.component').then(c => c.ColorSchemeComponent),
    title: 'MedesUI - Color Scheme'
  }
];