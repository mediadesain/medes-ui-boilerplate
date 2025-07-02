import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFilterComponentsComponent } from './intro/demo-filter-components.component';
import { DemoCheckboxesComponent } from './demo-checkboxes/demo-checkboxes.component';
import { DemoSwatchComponent } from './demo-swatch/demo-swatch.component';
import { DemoFilterRangeSliderComponent } from './demo-filter-range-slider/demo-filter-range-slider.component';
import { DemoResetAllComponent } from './demo-reset-all/demo-reset-all.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', component: DemoFilterComponentsComponent, data: {title: 'MedesUI - Filter Components'} },
  { path: 'checkboxes', component: DemoCheckboxesComponent, data: {title: 'MedesUI - Demo Filter Checkbox'} },
  { path: 'swatch', component: DemoSwatchComponent, data: {title: 'MedesUI - Demo Filter Swatch'} },
  { path: 'range-slider', component: DemoFilterRangeSliderComponent, data: {title: 'MedesUI - Demo Filter Range'} },
  { path: 'reset', component: DemoResetAllComponent, data: {title: 'MedesUI - Demo Reset Filter'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoFilterComponentsRoutingModule { }
