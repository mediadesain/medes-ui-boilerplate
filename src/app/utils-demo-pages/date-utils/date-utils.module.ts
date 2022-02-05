import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateUtilsRoutingModule } from './date-utils-routing.module';
import { DateUtilsComponent } from './date-utils.component';


@NgModule({
  declarations: [
    DateUtilsComponent
  ],
  imports: [
    CommonModule,
    DateUtilsRoutingModule
  ]
})
export class DateUtilsModule { }
