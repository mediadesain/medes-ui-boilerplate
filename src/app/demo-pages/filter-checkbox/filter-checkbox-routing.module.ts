import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterCheckboxComponent } from './filter-checkbox.component';

const routes: Routes = [{ path: '', component: FilterCheckboxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterCheckboxRoutingModule { }
