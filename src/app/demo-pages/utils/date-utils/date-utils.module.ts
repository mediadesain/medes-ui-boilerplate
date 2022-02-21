import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateUtilsRoutingModule } from './date-utils-routing.module';
import { DateUtilsComponent } from './date-utils.component';

import { MdsHightlightPrismModule } from 'medes-ui';
// import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@NgModule({
  declarations: [
    DateUtilsComponent
  ],
  imports: [
    CommonModule,
    DateUtilsRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class DateUtilsModule { }
