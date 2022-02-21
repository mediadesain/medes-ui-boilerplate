import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StringUtilsRoutingModule } from './string-utils-routing.module';
import { StringUtilsComponent } from './string-utils.component';

import { MdsHightlightPrismModule } from 'medes-ui';
// import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

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
