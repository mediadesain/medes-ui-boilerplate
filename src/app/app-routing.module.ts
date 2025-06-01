import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPrismjsHighlightComponent } from './pages/demo-components/prismjs-highlight/prismjs-highlight.component';
import { VersioningComponent } from './shared/components/versioning/versioning.component';
import { DemoTestingComponent } from './pages/demo-testing-components/demo-testing.component';
import { DemoAlertComponent } from './pages/demo-components/alert-component/alert.component';
import { DemoComponent } from './pages/demo-components/demo/demo.component';

const routes: Routes = [
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.module').then(m => m.IntroductionModule),
  }, {
    path: 'ui-elements',
    loadChildren: () => import('./pages/demo-ui-boilerplate/ui-boilerplate.module').then(m => m.MdsDocBoilerplateModule)
  },
  {
    path: 'filter-components',
    loadChildren: () => import('./pages/demo-components/filter-components/filter-components.module').then(m => m.FilterComponentsModule)
  },
  {
    path: 'navigation-manager',
    loadChildren: () => import('./pages/demo-components/navigation-manager/navigation-manager.module').then(m => m.DemoNavigationManagerModule)
  },
  {
    path: 'modal-component', loadChildren: () => import('./pages/demo-components/modal-component/modal-component.module').then(m => m.ModalComponentModule)
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'alert',
    component: DemoAlertComponent
  },
  {
    path: 'prismjs-highlight',
    component: DemoPrismjsHighlightComponent
  },
  { path: 'pipes', loadChildren: () => import('./pages/demo-pipe/pipe.module').then(m => m.PipeModule) },
  {
    path: 'utils', loadChildren: () => import('./pages/demo-utils/demo-utils.module').then(m => m.DemoUtilsModule)
  },{
    path: 'versioning',
    component: VersioningComponent
  },{
    path: 'testing',
    component: DemoTestingComponent
  },
  {
    path: '**', redirectTo: 'introduction/how-to-install'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
