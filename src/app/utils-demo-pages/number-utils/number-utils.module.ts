import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberUtilsRoutingModule } from './number-utils-routing.module';
import { NumberUtilsComponent } from './number-utils.component';


@NgModule({
  declarations: [
    NumberUtilsComponent
  ],
  imports: [
    CommonModule,
    NumberUtilsRoutingModule
  ]
})
export class NumberUtilsModule { }
