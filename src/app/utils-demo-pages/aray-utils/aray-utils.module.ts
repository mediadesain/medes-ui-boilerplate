import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArayUtilsRoutingModule } from './aray-utils-routing.module';
import { ArayUtilsComponent } from './aray-utils.component';


@NgModule({
  declarations: [
    ArayUtilsComponent
  ],
  imports: [
    CommonModule,
    ArayUtilsRoutingModule
  ]
})
export class ArayUtilsModule { }
