import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectUtilsRoutingModule } from './object-utils-routing.module';
import { ObjectUtilsComponent } from './object-utils.component';


@NgModule({
  declarations: [
    ObjectUtilsComponent
  ],
  imports: [
    CommonModule,
    ObjectUtilsRoutingModule
  ]
})
export class ObjectUtilsModule { }
