import { Routes } from '@angular/router';

export const DemoFormComponentsroutes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', loadComponent: () => import('./intro/demo-form-component.component').then(c => c.DemoFormComponent), title: 'MedesUI - Form Components' },
  { path: 'toggle', loadComponent: () => import('./demo-toggle-button/demo-toggle-button.component').then(c => c.DemoToggleButtonComponent), title: 'MedesUI - Demo Toggle' },
  { path: 'input-number', loadComponent: () => import('./demo-input-number/demo-input-number.component').then(c => c.DemoInputNumberComponent), title: 'MedesUI - Demo Input Number' },
];