import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', loadComponent: () => import('./intro/demo-form-component.component').then(c => c.DemoFormComponent), data: {title: 'MedesUI - Form Components'} },
  { path: 'toggle', loadComponent: () => import('./demo-toggle-button/demo-toggle-button.component').then(c => c.DemoToggleButtonComponent), data: {title: 'MedesUI - Demo Toggle'} },
  { path: 'input-number', loadComponent: () => import('./demo-input-number/demo-input-number.component').then(c => c.DemoInputNumberComponent), data: {title: 'MedesUI - Demo Input Number'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoFormRoutingModule { }
