import { Component } from '@angular/core';
import { MdsModalService } from 'medes-ui';
/*-- Medes Team Only --*/
// import { MdsModalService } from 'projects/medes-ui/src/public-api';


@Component({
  selector: 'mds-testing',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})

export class ModalComponent {

html = `<button (click)="openModal('my-modal-1')">Open Simple Modal</button>

<mds-modal
  id="my-modal-1"
  [modalWidth]="'medium'"
  [marginTop]="16"
  [marginBottom]="16"
  [hideCloseButton]="false"
  [disableCloseBackdrop]="samle">
  ...
</mds-modal>`;

importmodule = `import { MdsModalModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsModalModule
  ]
})

export class MyModule { }`;

  constructor(public mdsModalService: MdsModalService) {}

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  closeModal(id: string): void {
      this.mdsModalService.trigger(id);
  }
}