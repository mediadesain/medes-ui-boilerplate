import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoModalComponentRoutingModule } from './demo-modal-component-routing.module';
import { FormsModule } from '@angular/forms';
import { MdsModalModule, MdsHightlightPrismModule, MdsModalService }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    DemoModalComponentRoutingModule,
    MdsHightlightPrismModule,
    MdsModalModule
  ],
  providers: [MdsModalService]
})
export class DemoModalComponentModule { }
