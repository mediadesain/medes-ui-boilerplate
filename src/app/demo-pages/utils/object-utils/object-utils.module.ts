import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectUtilsRoutingModule } from './object-utils-routing.module';
import { ObjectUtilsComponent } from './object-utils.component';

import { MdsHightlightPrismModule } from 'medes-ui';
// import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';


@NgModule({
  declarations: [
    ObjectUtilsComponent
  ],
  imports: [
    CommonModule,
    ObjectUtilsRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class ObjectUtilsModule { }
