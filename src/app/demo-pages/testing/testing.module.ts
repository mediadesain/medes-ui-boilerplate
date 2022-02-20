import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { MdsFilterModule } from 'projects/medes-ui/src/lib/mds-filter/mds-filter.module';
import { MdsPipesModule } from 'projects/medes-ui/src/public-api';


@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    MdsFilterModule,
    MdsPipesModule
  ]
})
export class TestingModule { }
