import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionRoutingModule } from './demo-services-routing.module';
import { FormsModule } from '@angular/forms';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    IntroductionRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class DemoServiceModule { }
