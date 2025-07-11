import { Routes } from '@angular/router';
import { DemoAlertComponent } from './demo-alert/demo-alert.component';

export const DemoServiceRoutes: Routes = [
  { path: '', redirectTo: 'alert', pathMatch: 'full' },
  { path: 'alert', component: DemoAlertComponent, title: 'MedesUI - Alert Service' }
];
