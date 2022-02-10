import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StringUtilsRoutingModule } from './string-utils-routing.module';
import { StringUtilsComponent } from './string-utils.component';
import { MdsHightlightPrismModule } from 'medes-ui';


@NgModule({
  declarations: [
    StringUtilsComponent
  ],
  imports: [
    CommonModule,
    StringUtilsRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class StringUtilsModule { }
