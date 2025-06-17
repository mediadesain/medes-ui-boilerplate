import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsModalModel } from 'projects/medes-ui/src/lib/angular/components/mds-modal/mds-modal.model';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-modal-child',
  templateUrl: './demo-modal-child.component.html',
  styleUrls: ['./demo-modal-child.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule]
})
export class DemoModalChildComponent implements OnInit, AfterContentChecked {
  bodyText: string;
  
  mdsModalModel2Config: MdsModalModel = {
      configs: {
        modalWidth: 'large',
        scrollInTheModal: true,
        marginVertical: 30,
        borderRadius: 10
      }
  }
  
  mdsModalModel4Config: MdsModalModel = {
      configs: {
        hideCloseButton: true,
        disableCloseBackdrop: true
      }
  }

  mdsModalModel6Config: MdsModalModel = {
      configs: {
        modalWidth: 'fullscreen',
        scrollInTheModal: true
      }
  }

  constructor(private mdsModalService: MdsModalService, public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.bodyText = 'Hello edit me on Open Modal 1 - Data Binding';
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  closeModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
