import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterCheckboxRoutingModule } from './filter-checkbox-routing.module';
import { FilterCheckboxComponent } from './filter-checkbox.component';
import { AlertDeprecatedComponent } from 'src/app/shared/components/alert-deprecated/alert-deprecated.component';

import { MdsFilterCheckboxModule, MdsHightlightPrismModule, MdsPipesModule } from 'medes-ui';
// import { MdsFilterCheckboxModule, MdsHightlightPrismModule, MdsPipesModule } from 'projects/medes-ui/src/public-api';

@NgModule({
  declarations: [
    FilterCheckboxComponent,
    AlertDeprecatedComponent
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
