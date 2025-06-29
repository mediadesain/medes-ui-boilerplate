import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoAngularLibRoutingModule } from './demo-angular-lib-routing.module';
import { MdsHightlightPrismModule }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    DemoAngularLibRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class DemoAngularLibModule { }
