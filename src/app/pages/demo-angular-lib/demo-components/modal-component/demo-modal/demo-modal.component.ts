import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule]
})
export class DemoModalComponent implements OnInit {
  bodyText: string;
  constructor(private mdsModalService: MdsModalService) {}

  ngOnInit(): void {
    this.bodyText = 'Hello edit me on Open Modal 1 - Data Binding';
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  closeModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
