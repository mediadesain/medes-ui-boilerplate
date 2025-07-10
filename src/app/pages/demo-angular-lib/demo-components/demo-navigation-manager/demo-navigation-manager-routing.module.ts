import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', loadComponent: () => import('./intro/demo-navigation-manager.component').then(c => c.DemoNavigationManagerComponent), data: {title: 'MedesUI - Navigation Manager'} },
  { path: 'page-navigation', loadComponent: () => import('./demo-page-navigation/demo-page-navigation.component').then(c => c.DemoPageNavigationComponent), data: {title: 'MedesUI - Demo Page Navigation'} },
  { path: 'page-counter', loadComponent: () => import('./demo-page-counter/demo-page-counter.component').then(c => c.DemoPageCounterComponent), data: {title: 'MedesUI - Demo Page Counter'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoNavigationManagerRoutingModule { }
