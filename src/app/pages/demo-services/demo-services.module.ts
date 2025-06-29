import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionRoutingModule } from './demo-services-routing.module';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule }
//*-public-*/ from '@mediadesain/angular';
/*-private-*/ from 'projects/medes-ui-angular/src/public-api';

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
