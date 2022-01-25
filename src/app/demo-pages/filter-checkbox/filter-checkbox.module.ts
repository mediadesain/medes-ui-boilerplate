import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterCheckboxRoutingModule } from './filter-checkbox-routing.module';
import { FilterCheckboxComponent } from './filter-checkbox.component';


// import { MdsFilterCheckboxModule, MdsFilterDrpopdownModule, MdsHightlightPrismModule, MdsPipesModule } from 'medes-ui';
import { MdsFilterCheckboxModule, MdsFilterModule, MdsHightlightPrismModule, MdsPipesModule } from 'projects/medes-ui/src/public-api';


@NgModule({
  declarations: [
    FilterCheckboxComponent
  ],
  imports: [
    CommonModule,
    FilterCheckboxRoutingModule,
    MdsFilterCheckboxModule,
    MdsPipesModule,
    MdsHightlightPrismModule,
    MdsFilterModule
  ]
})
export class FilterCheckboxModule { }
