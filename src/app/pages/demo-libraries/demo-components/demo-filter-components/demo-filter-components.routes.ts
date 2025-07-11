import { Routes } from '@angular/router';

export const DemoFilterComponentsRoutes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', loadComponent: () => import('./intro/demo-filter-components.component').then(c => c.DemoFilterComponentsComponent), title: 'MedesUI - Filter Components' },
  { path: 'checkboxes', loadComponent: () => import('./demo-checkboxes/demo-checkboxes.component').then(c => c.DemoCheckboxesComponent), title: 'MedesUI - Demo Filter Checkbox' },
  { path: 'swatch', loadComponent: () => import('./demo-swatch/demo-swatch.component').then(c => c.DemoSwatchComponent), title: 'MedesUI - Demo Filter Swatch' },
  { path: 'range-slider', loadComponent: () => import('./demo-filter-range-slider/demo-filter-range-slider.component').then(c => c.DemoFilterRangeSliderComponent), title: 'MedesUI - Demo Filter Range' },
  { path: 'reset', loadComponent: () => import('./demo-reset-all/demo-reset-all.component').then(c => c.DemoResetAllComponent), title: 'MedesUI - Demo Reset Filter' }
];