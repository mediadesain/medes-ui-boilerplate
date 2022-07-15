import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';

// import { MdsPipesModule } from 'medes-ui';
// import { MdsPipesModule } from 'dist/medes-ui/public-api';
import { MdsPipesModule } from 'projects/medes-ui/src/public-api';
@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    MdsPipesModule
  ]
})
export class TestingModule { }
