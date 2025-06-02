import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersioningComponent } from './shared/components/versioning/versioning.component';
import { DemoTestingComponent } from './pages/demo-testing-components/demo-testing.component';

const routes: Routes = [
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.module').then(m => m.IntroductionModule),
  }, {
    path: 'ui-elements',
    loadChildren: () => import('./pages/demo-ui-boilerplate/ui-boilerplate.module').then(m => m.MdsDocBoilerplateModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/demo-services/demo-services.module').then(m => m.DemoServiceModule)
  },
  {
    path: 'utils', loadChildren: () => import('./pages/demo-utils/demo-utils.module').then(m => m.DemoUtilsModule)
  },
  {
    path: 'angular-lib',
    loadChildren: () => import('./pages/demo-angular-lib/demo-angular-lib.module').then(m => m.DemoAngularLibModule)
  },
  {
    path: 'versioning',
    component: VersioningComponent
  },
  {
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
