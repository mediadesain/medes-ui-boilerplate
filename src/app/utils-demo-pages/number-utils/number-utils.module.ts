import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberUtilsRoutingModule } from './number-utils-routing.module';
import { NumberUtilsComponent } from './number-utils.component';
import { MdsHightlightPrismModule } from 'medes-ui';


@NgModule({
  declarations: [
    NumberUtilsComponent
  ],
  imports: [
    CommonModule,
    NumberUtilsRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class NumberUtilsModule { }
