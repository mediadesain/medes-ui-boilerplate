import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToInstallComponent } from './how-to-install.component';

const routes: Routes = [{ path: '', component: HowToInstallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowToInstallRoutingModule { }
