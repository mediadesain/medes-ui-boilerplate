import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponentRoutingModule } from './modal-component-routing.module';
import { FormsModule } from '@angular/forms';
import { MdsModalModule, MdsHightlightPrismModule, MdsModalService }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ModalComponentRoutingModule,
    MdsHightlightPrismModule,
    MdsModalModule
  ],
  providers: [MdsModalService]
})
export class DemoModalComponentModule { }
