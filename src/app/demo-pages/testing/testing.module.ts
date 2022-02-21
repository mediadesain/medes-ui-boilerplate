import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';

// import { MdsFilterCheckboxModule, MdsPipesModule } from 'medes-ui';
// import { MdsFilterCheckboxModule, MdsPipesModule } from 'dist/medes-ui/public-api';
import { MdsFilterCheckboxModule, MdsPipesModule } from 'projects/medes-ui/src/public-api';
@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    MdsFilterCheckboxModule,
    MdsPipesModule
  ]
})
export class TestingModule { }
