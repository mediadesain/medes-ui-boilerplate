import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoAngularLibRoutingModule } from './demo-angular-lib-routing.module';
import { MdsHightlightPrismModule }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

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
