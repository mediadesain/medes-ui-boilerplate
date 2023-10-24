import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPrismjsHighlightComponent } from './demo-components/prismjs-highlight/prismjs-highlight.component';

const routes: Routes = [
  {
    path: 'introduction',
    loadChildren: () => import('./introduction/introduction.module').then(m => m.IntroductionModule),
  }, {
    path: 'ui-boilerplate',
    loadChildren: () => import('./demo-ui-boilerplate/ui-boilerplate.module').then(m => m.MdsDocBoilerplateModule)
  }, {
    path: 'filter-components',
    loadChildren: () => import('./demo-components/filter-components/filter-components.module').then(m => m.FilterComponentsModule)
  },
  { path: 'pipe', loadChildren: () => import('./demo-pipe/pipe.module').then(m => m.PipeModule) },
  {
    path: 'prismjs-highlight',
    component: DemoPrismjsHighlightComponent
  },
  {
    path: 'utils', loadChildren: () => import('./demo-utils/demo-utils.module').then(m => m.DemoUtilsModule) },
  {
    path: '**', redirectTo: 'introduction/how-to-install'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
