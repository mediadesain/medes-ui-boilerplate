import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringUtilsComponent } from './string-utils.component';

const routes: Routes = [{ path: '', component: StringUtilsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StringUtilsRoutingModule { }
