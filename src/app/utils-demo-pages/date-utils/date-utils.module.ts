import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateUtilsRoutingModule } from './date-utils-routing.module';
import { DateUtilsComponent } from './date-utils.component';
import { MdsHightlightPrismModule } from 'medes-ui';


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
