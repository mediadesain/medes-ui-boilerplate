import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormComponent } from './intro/demo-form-component.component';
import { DemoToggleButtonComponent } from './demo-toggle-button/demo-toggle-button.component';
import { DemoInputNumberComponent } from './demo-input-number/demo-input-number.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: DemoFormComponent, data: {title: 'MedesUI - Form Components'} },
  { path: 'toggle', component: DemoToggleButtonComponent, data: {title: 'MedesUI - Demo Toggle'} },
  { path: 'input-number', component: DemoInputNumberComponent, data: {title: 'MedesUI - Demo Input Number'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoFormRoutingModule { }
