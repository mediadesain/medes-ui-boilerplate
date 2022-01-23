import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdsDocBoilerplateComponent } from './mds-doc-boilerplate.component';

const routes: Routes = [{ path: '', component: MdsDocBoilerplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdsDocBoilerplateRoutingModule { }
