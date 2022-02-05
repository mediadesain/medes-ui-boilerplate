import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StringUtilsRoutingModule } from './string-utils-routing.module';
import { StringUtilsComponent } from './string-utils.component';


@NgModule({
  declarations: [
    StringUtilsComponent
  ],
  imports: [
    CommonModule,
    StringUtilsRoutingModule
  ]
})
export class StringUtilsModule { }
