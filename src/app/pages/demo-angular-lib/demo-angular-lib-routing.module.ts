import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoPrismjsHighlightComponent } from './demo-components/demo-prismjs-highlight/demo-prismjs-highlight.component';


const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'modal-component', loadChildren: () => import('./demo-components/demo-modal-component/demo-modal-component.module').then(m => m.DemoModalComponentModule)
  },
  {
    path: 'form-components',
    loadChildren: () => import('./demo-components/demo-form-components/demo-form-components.module').then(m => m.DemoFormComponentsModule)
  },
  {
    path: 'filter-components',
    loadChildren: () => import('./demo-components/demo-filter-components/demo-filter-components.module').then(m => m.DemoFilterComponentsModule)
  },
  {
    path: 'navigation-manager',
    loadChildren: () => import('./demo-components/demo-navigation-manager/demo-navigation-manager.module').then(m => m.DemoNavigationManagerModule)
  },
  {
    path: 'prismjs-highlight',
    component: DemoPrismjsHighlightComponent
  },
  { path: 'pipes', loadChildren: () => import('./demo-pipes/demo-pipes.module').then(m => m.DemoPipesModule) },
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
