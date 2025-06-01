import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoNavigationManagerComponent } from './intro/navigation-manager.component';
import { DemoPageNavigationComponent } from './page-navigation/page-navigation.component';
import { DemoPageCounterComponent } from './page-counter/page-counter.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', component: DemoNavigationManagerComponent },
  { path: 'page-navigation', component: DemoPageNavigationComponent },
  { path: 'page-counter', component: DemoPageCounterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoNavigationManagerRoutingModule { }
