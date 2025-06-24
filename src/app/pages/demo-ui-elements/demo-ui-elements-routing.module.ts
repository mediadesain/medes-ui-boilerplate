import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoGridSystemComponent } from './demo-grid-system/demo-grid-system.component';
import { DemoLoaderComponent } from './demo-loader/demo-loader.component';
import { DemoBasicElementsComponent } from './demo-basic-elements/demo-basic-elements.component';
import { DemoLayoutUtilsComponent } from './demo-layout-utils/demo-layout-utils.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic-elements', pathMatch: 'full'  },
  { path: 'basic-elements', component: DemoBasicElementsComponent },
  { path: 'layout-utils', component: DemoLayoutUtilsComponent },
  { path: 'grid-system', component: DemoGridSystemComponent },
  { path: 'loader', component: DemoLoaderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoUiElementsRoutingModule { }
