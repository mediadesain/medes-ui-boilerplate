import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterCheckboxRoutingModule } from './filter-checkbox-routing.module';
import { FilterCheckboxComponent } from './filter-checkbox.component';


import { MdsFilterCheckboxModule, MdsHightlightPrismModule, MdsPipesModule } from 'projects/medes-ui/src/public-api';
// import { MdsFilterCheckboxModule, MdsHightlightPrismModule, MdsPipesModule } from 'medes-ui';


@NgModule({
  declarations: [
    FilterCheckboxComponent
  ],
  imports: [
    CommonModule,
    FilterCheckboxRoutingModule,
    MdsFilterCheckboxModule,
    MdsPipesModule,
    MdsHightlightPrismModule
  ]
})
export class FilterCheckboxModule { }
