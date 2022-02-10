import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArayUtilsRoutingModule } from './aray-utils-routing.module';
import { ArayUtilsComponent } from './aray-utils.component';
import { MdsHightlightPrismModule } from 'medes-ui';


@NgModule({
  declarations: [
    ArayUtilsComponent
  ],
  imports: [
    CommonModule,
    ArayUtilsRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class ArayUtilsModule { }
