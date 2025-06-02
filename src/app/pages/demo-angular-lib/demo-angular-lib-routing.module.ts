import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoPrismjsHighlightComponent } from './demo-components/prismjs-highlight/prismjs-highlight.component';


const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'modal-component', loadChildren: () => import('./demo-components/modal-component/modal-component.module').then(m => m.ModalComponentModule)
  },
  {
    path: 'filter-components',
    loadChildren: () => import('./demo-components/filter-components/filter-components.module').then(m => m.FilterComponentsModule)
  },
  {
    path: 'navigation-manager',
    loadChildren: () => import('./demo-components/navigation-manager/navigation-manager.module').then(m => m.DemoNavigationManagerModule)
  },
  {
    path: 'prismjs-highlight',
    component: DemoPrismjsHighlightComponent
  },
  { path: 'pipes', loadChildren: () => import('./demo-pipes/demo-pipespipe.module').then(m => m.PipeModule) },
  {
    path: 'demo',
    component: DemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoAngularLibRoutingModule { }
