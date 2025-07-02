import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorSchemeComponent } from './color-scheme/color-scheme.component';
import { HowToInstallComponent } from './how-to-install/how-to-install.component';
import { IntroductionComponent } from './introduction.component';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: IntroductionComponent },
  { path: 'how-to-install', component: HowToInstallComponent, data: {title: 'MedesUI - Introduction'} },
  { path: 'color-scheme', component: ColorSchemeComponent, data: {title: 'MedesUI - Color Scheme'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
