import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';


@Component({
  selector: 'mds-demo-modal',
  templateUrl: './demo-modal-component.component.html',
  styleUrls: ['./demo-modal-component.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MdsHightlightPrismModule, MdsModalModule]
})

export class DemoModalComponent {
  importModuleCode = `
import { MdsModalModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsModalModule
  ]
})

export class MyModule { }`;
  component = `
import { MdsModalService } from 'medes-ui'; // import modal service

export class MyComponent {

  constructor(public mdsModalService: MdsModalService) {}

  openModal(): void {
    this.mdsModalService.trigger(id);
  }:
}`;
  html = `
<!-- Button Modal -->
<button (click)="openModal('my-modal-1')">Open Simple Modal</button>
<!-- Simple Sample Modal -->
<mds-modal id="my-modal-1" [modalWidth]="'medium'" [hideCloseButton]="false" [disableCloseBackdrop]="false">
    <div class="padding-1">
        <h3 class="padding-b-1">Simple Modal Sample</h3>
        <p>Curabitur sem sapien, vestibulum non tincidunt semper, ullamcorper a ante. Morbi tempor sem nec facilisis efficitur. Nam vel quam malesuada, dignissim leo id, eleifend tortor. Etiam in rutrum elit.</p>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
    </div>
</mds-modal>`;
  
  constructor(public mdsModalService: MdsModalService) {}
  
  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }
  
}
