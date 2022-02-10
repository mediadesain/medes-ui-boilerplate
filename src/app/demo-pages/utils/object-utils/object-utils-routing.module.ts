import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectUtilsComponent } from './object-utils.component';

const routes: Routes = [{ path: '', component: ObjectUtilsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectUtilsRoutingModule { }
