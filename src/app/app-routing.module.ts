import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'introduction',
    loadChildren: () => import('./demo-pages/introduction/introduction.module').then(m => m.IntroductionModule)
  }, {
    path: 'ui-boilerplate',
    loadChildren: () => import('./demo-pages/ui-boilerplate/ui-boilerplate.module').then(m => m.MdsDocBoilerplateModule)
  }, {
    path: 'filter-checkbox',
    loadChildren: () => import('./demo-pages/component/filter-checkbox/filter-checkbox.module').then(m => m.FilterCheckboxModule)
  }, {
    path: 'prismjs-highlight',
    loadChildren: () => import('./demo-pages/component/prismjs-highlight/prismjs-highlight.module').then(m => m.PrismjsHighlightModule)
  },
  { path: 'pipe', loadChildren: () => import('./demo-pages/pipe/pipe.module').then(m => m.PipeModule) },
  {
    path: 'filter-components',
    loadChildren: () => import('./demo-pages/component/filter-components/filter-components.module').then(m => m.FilterComponentsModule)
  }, {
    path: 'utils', loadChildren: () => import('./demo-pages/utils/utils.module').then(m => m.UtilsModule) },
  {
    path: '**', redirectTo: 'introduction/how-to-install'
  },
  { path: 'testing', loadChildren: () => import('./demo-pages/testing/testing.module').then(m => m.TestingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
