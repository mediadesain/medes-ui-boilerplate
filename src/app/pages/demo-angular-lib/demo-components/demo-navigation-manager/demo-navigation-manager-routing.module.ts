import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoNavigationManagerComponent } from './intro/demo-navigation-manager.component';
import { DemoPageNavigationComponent } from './demo-page-navigation/demo-page-navigation.component';
import { DemoPageCounterComponent } from './demo-page-counter/demo-page-counter.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', component: DemoNavigationManagerComponent, data: {title: 'MedesUI - Navigation Manager'} },
  { path: 'page-navigation', component: DemoPageNavigationComponent, data: {title: 'MedesUI - Demo Page Navigation'} },
  { path: 'page-counter', component: DemoPageCounterComponent, data: {title: 'MedesUI - Demo Page Counter'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoNavigationManagerRoutingModule { }
