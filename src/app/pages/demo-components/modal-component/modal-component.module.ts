import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponentRoutingModule } from './modal-component-routing.module';
import { ModalComponent } from './modal-component.component';
import { FormsModule } from '@angular/forms';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { ModalComponentDetailComponent } from './modal-component-detail/modal-component-detail.component';
import { MdsModalModule, MdsHightlightPrismModule, MdsModalService } from 'medes-ui';
/*-- Medes Team Only --*/
// import { MdsModalModule, MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@NgModule({
  declarations: [
    ModalComponent,
    DemoModalComponent,
    ModalComponentDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalComponentRoutingModule,
    MdsHightlightPrismModule,
    MdsModalModule
  ],
  providers: [MdsModalService]
})
export class ModalComponentModule { }
