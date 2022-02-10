import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateUtilsComponent } from './date-utils.component';

const routes: Routes = [{ path: '', component: DateUtilsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateUtilsRoutingModule { }
