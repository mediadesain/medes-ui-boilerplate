import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFilterComponentsComponent } from './intro/demo-filter-components.component';
import { DemoCheckboxesComponent } from './demo-checkboxes/demo-checkboxes.component';
import { DemoSwatchComponent } from './demo-swatch/demo-swatch.component';
import { DemoFilterRangeSliderComponent } from './demo-filter-range-slider/demo-filter-range-slider.component';
import { DemoResetAllComponent } from './demo-reset-all/demo-reset-all.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', component: DemoFilterComponentsComponent },
  { path: 'checkboxes', component: DemoCheckboxesComponent },
  { path: 'swatch', component: DemoSwatchComponent },
  { path: 'range-slider', component: DemoFilterRangeSliderComponent },
  { path: 'reset', component: DemoResetAllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoFilterComponentsRoutingModule { }
