import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'filter-checkbox',
    loadChildren: () => import('./demo-pages/component/filter-checkbox/filter-checkbox.module').then(m => m.FilterCheckboxModule)
  },
  {
    path: 'ui-boilerplate',
    loadChildren: () => import('./demo-pages/ui-boilerplate/ui-boilerplate.module').then(m => m.MdsDocBoilerplateModule)
  },
  {
    path: 'prismjs-highlight',
    loadChildren: () => import('./demo-pages/component/prismjs-highlight/prismjs-highlight.module').then(m => m.PrismjsHighlightModule)
  },
  {
    path: 'how-to-install',
    loadChildren: () => import('./demo-pages/intro/how-to-install/how-to-install.module').then(m => m.HowToInstallModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./demo-pages/intro/introduction/introduction.module').then(m => m.IntroductionModule)},
  {
    path: 'string-utils',
    loadChildren: () => import('./demo-pages/utils/string-utils/string-utils.module').then(m => m.StringUtilsModule)
  },
  {
    path: 'number-utils',
    loadChildren: () => import('./demo-pages/utils/number-utils/number-utils.module').then(m => m.NumberUtilsModule)
  },
  {
    path: 'object-utils',
    loadChildren: () => import('./demo-pages/utils/object-utils/object-utils.module').then(m => m.ObjectUtilsModule)
  },
  {
    path: 'array-utils',
    loadChildren: () => import('./demo-pages/utils/aray-utils/aray-utils.module').then(m => m.ArayUtilsModule)
  },
  {
    path: 'date-utils',
    loadChildren: () => import('./demo-pages/utils/date-utils/date-utils.module').then(m => m.DateUtilsModule)
  },
  { path: 'pipe', loadChildren: () => import('./demo-pages/pipe/pipe.module').then(m => m.PipeModule) },
  { path: 'testing', loadChildren: () => import('./demo-pages/testing/testing.module').then(m => m.TestingModule) },
  {
    path: 'filter-components',
    loadChildren: () => import('./demo-pages/component/filter-components/filter-components.module').then(m => m.FilterComponentsModule)
  },
  {
    path: '**', redirectTo: 'how-to-install'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
