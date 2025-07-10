import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'how-to-install', redirectTo: 'info', pathMatch: 'full' },
  {
    path: 'how-to-install',
    loadComponent: () => import('./how-to-install/how-to-install.component').then(c => c.HowToInstallComponent),
    data: {title: 'MedesUI - Introduction'}
  },
  {
    path: 'color-scheme',
    loadComponent: () => import('./color-scheme/color-scheme.component').then(c => c.ColorSchemeComponent),
    data: {title: 'MedesUI - Color Scheme'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
