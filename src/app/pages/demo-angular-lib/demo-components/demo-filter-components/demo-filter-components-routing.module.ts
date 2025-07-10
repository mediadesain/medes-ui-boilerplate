import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', loadComponent: () => import('./intro/demo-filter-components.component').then(c => c.DemoFilterComponentsComponent), data: {title: 'MedesUI - Filter Components'} },
  { path: 'checkboxes', loadComponent: () => import('./demo-checkboxes/demo-checkboxes.component').then(c => c.DemoCheckboxesComponent), data: {title: 'MedesUI - Demo Filter Checkbox'} },
  { path: 'swatch', loadComponent: () => import('./demo-swatch/demo-swatch.component').then(c => c.DemoSwatchComponent), data: {title: 'MedesUI - Demo Filter Swatch'} },
  { path: 'range-slider', loadComponent: () => import('./demo-filter-range-slider/demo-filter-range-slider.component').then(c => c.DemoFilterRangeSliderComponent), data: {title: 'MedesUI - Demo Filter Range'} },
  { path: 'reset', loadComponent: () => import('./demo-reset-all/demo-reset-all.component').then(c => c.DemoResetAllComponent), data: {title: 'MedesUI - Demo Reset Filter'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoFilterComponentsRoutingModule { }
