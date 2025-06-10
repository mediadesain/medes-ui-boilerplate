import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormComponents } from './intro/form-components.component';
import { DemoToggleComponent } from './toggle/toggle.component';
import { DemoInputNumberComponent } from './input-number/input-number.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', component: DemoFormComponents },
  { path: 'toggle', component: DemoToggleComponent },
  { path: 'input-number', component: DemoInputNumberComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoFormRoutingModule { }
