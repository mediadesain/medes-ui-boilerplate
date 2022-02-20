import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { FilterComponentsComponent } from './filter-components.component';
import { ResetAllComponent } from './reset-all/reset-all.component';
import { SwatchComponent } from './swatch/swatch.component';

const routes: Routes = [
  { path: '', component: FilterComponentsComponent },
  { path: 'checkboxes', component: CheckboxesComponent },
  { path: 'swatch', component: SwatchComponent },
  { path: 'reset', component: ResetAllComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterComponentsRoutingModule { }
