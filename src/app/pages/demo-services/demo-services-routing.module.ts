import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAlertComponent } from './demo-alert/demo-alert.component';

const routes: Routes = [
  { path: '', redirectTo: 'alert', pathMatch: 'full' },
  { path: 'alert', component: DemoAlertComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
