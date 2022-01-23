import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterCheckboxRoutingModule } from './filter-checkbox-routing.module';
import { FilterCheckboxComponent } from './filter-checkbox.component';
import { MdsFilterCheckboxModule, MdsPipesModule } from 'medes-ui';


@NgModule({
  declarations: [
    FilterCheckboxComponent
  ],
  imports: [
    CommonModule,
    FilterCheckboxRoutingModule,
    MdsFilterCheckboxModule,
    MdsPipesModule
  ]
})
export class FilterCheckboxModule { }
