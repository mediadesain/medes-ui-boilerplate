import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterCheckboxRoutingModule } from './filter-checkbox-routing.module';
import { FilterCheckboxComponent } from './filter-checkbox.component';


// import { MdsFilterCheckboxModule, MdsHightlightPrismModule, MdsPipesModule } from 'medes-ui';
import { MdsFilterCheckboxModule, MdsHightlightPrismModule, MdsPipesModule } from 'projects/medes-ui/src/public-api';

import { MdsFilterDrpopdownModule } from 'src/app/test/mds-filter-drpopdown/mds-filter-drpopdown.module';


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
    MdsFilterDrpopdownModule
  ]
})
export class FilterCheckboxModule { }
