import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';

import { StringUtilsComponent } from './string-utils/string-utils.component';
import { NumberUtilsComponent } from './number-utils/number-utils.component';
import { ObjectUtilsComponent } from './object-utils/object-utils.component';
import { ArrayUtilsComponent } from './aray-utils/aray-utils.component';
import { DateUtilsComponent } from './date-utils/date-utils.component';
import { ColorUtilsComponent } from './color-utils/color-utils.component';

import { MdsHightlightPrismModule } from 'medes-ui';
// import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';


@NgModule({
  declarations: [
    StringUtilsComponent,
    NumberUtilsComponent,
    ObjectUtilsComponent,
    ArrayUtilsComponent,
    DateUtilsComponent,
    ColorUtilsComponent
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class UtilsModule { }
