import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArayUtilsComponent } from './aray-utils.component';

const routes: Routes = [{ path: '', component: ArayUtilsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArayUtilsRoutingModule { }
