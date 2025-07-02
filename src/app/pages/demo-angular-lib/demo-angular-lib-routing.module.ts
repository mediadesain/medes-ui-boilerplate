import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'modal-component',
    loadComponent: () => import('./demo-components/demo-modal-component/demo-modal-component.component').then(c => c.DemoModalComponent),
    data: {title: 'MedesUI - Modal Component'}
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
    loadComponent: () => import('./demo-components/demo-prismjs-highlight/demo-prismjs-highlight.component').then(c => c.DemoPrismjsHighlightComponent),
    data: {title: 'MedesUI - PrismJs'}
  },
  { path: 'pipes', loadChildren: () => import('./demo-pipes/demo-pipes.module').then(m => m.DemoPipesModule) },
  {
    path: 'demo',
    loadComponent: () => import('./demo/demo.component').then(c => c.DemoComponent),
    data: {title: 'MedesUI - Demo'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoAngularLibRoutingModule { }
