import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'filter-checkbox',
    loadChildren: () => import('./demo-pages/filter-checkbox/filter-checkbox.module').then(m => m.FilterCheckboxModule)
  },
  {
    path: 'doc-boilerplate',
    loadChildren: () => import('./demo-pages/mds-doc-boilerplate/mds-doc-boilerplate.module').then(m => m.MdsDocBoilerplateModule)
  },
  { path: 'prismjs-highlight', loadChildren: () => import('./demo-pages/prismjs-highlight/prismjs-highlight.module').then(m => m.PrismjsHighlightModule) },
  { path: 'how-to-install', loadChildren: () => import('./demo-pages/how-to-install/how-to-install.module').then(m => m.HowToInstallModule) },
  { path: 'introduction', loadChildren: () => import('./demo-pages/introduction/introduction.module').then(m => m.IntroductionModule) },
  { path: 'string-utils', loadChildren: () => import('./utils-demo-pages/string-utils/string-utils.module').then(m => m.StringUtilsModule) },
  { path: 'number-utils', loadChildren: () => import('./utils-demo-pages/number-utils/number-utils.module').then(m => m.NumberUtilsModule) },
  { path: 'object-utils', loadChildren: () => import('./utils-demo-pages/object-utils/object-utils.module').then(m => m.ObjectUtilsModule) },
  { path: 'array-utils', loadChildren: () => import('./utils-demo-pages/aray-utils/aray-utils.module').then(m => m.ArayUtilsModule) },
  { path: 'date-utils', loadChildren: () => import('./utils-demo-pages/date-utils/date-utils.module').then(m => m.DateUtilsModule) },
  { path: '**', redirectTo: 'filter-checkbox'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
