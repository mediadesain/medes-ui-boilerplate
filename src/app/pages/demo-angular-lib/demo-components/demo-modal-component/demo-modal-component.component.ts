import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoModalChildComponent } from './demo-modal-child/demo-modal-child.component';
import { constructComponentCode, constructImportModuleCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode, htmlCode2, interfaceCode } from './modal-component-preview-code';
import { MdsModalModel } from 'projects/medes-ui/src/lib/angular/components/mds-modal/mds-modal.model';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';


@Component({
  selector: 'mds-demo-modal',
  templateUrl: './demo-modal-component.component.html',
  styleUrls: ['./demo-modal-component.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MdsHightlightPrismModule, MdsModalModule, DemoModalChildComponent]
})

export class DemoModalComponent {
  showHeaderFooter = true;
  mdsModalModelConfig: MdsModalModel = {
    configs: {
      modalWidth: 'medium',
      scrollInTheModal: false,
      marginVertical: 50,
      borderRadius: 3,
      hideCloseButton: false,
      disableCloseBackdrop: false
    }
  }

  // Code Viewer
  importModuleCode: string;
  componentCode: string;
  htmlCode: string;
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {attribute: 'id', type: 'string', default: '∞', description: 'id modal is required for identify which modal to trigger', version: 'medes-ui@1.18.0 > Latest version'},
    {attribute: 'model?', type: 'MdsModalModel', default: '∞', description: 'Modal configuratuin', version: 'medes-ui@1.18.0 > Latest version'}
  ];
  tableContentDeprecated = [
    {attribute: 'modalWidth?', type: 'string of option: <i>\'small\' | \'medium\' | \'large\' | \'fullscreen\'</i> or number', default: '\'medium\'', description: 'Width of modal by default is medium (700px) but posible with custom width. If set as \'fullscreen\' wil set height & width fullscreen', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {attribute: 'marginTop?', type: 'number', default: '44', description: 'Padding top modal', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {attribute: 'marginBottom?', type: 'number', default: '44', description: 'Padding bottom modal', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {attribute: 'borderRadius?', type: 'number', default: '5', description: 'Border radius size', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {attribute: 'hideCloseButton?', type: 'boolean', default: 'false', description: 'Visibility of close button', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {attribute: 'disableCloseBackdrop?', type: 'boolean', default: 'false', description: 'Disable closing modal if clicking backdrop', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
  ];

  constructor(public mdsModalService: MdsModalService) {
    this.importModuleCode = constructImportModuleCode('MdsModalModule');
    this.reGenerateCode();
    this.interfaceCode = interfaceCode;
  }

  reGenerateCode(): void {
    this.htmlCode = this.showHeaderFooter ? htmlCode : htmlCode2;

    const importMdsUi = 'MdsModalModel, MdsModalService';
    const valuesComponent = `// model
  mdsModalModelConfig: MdsModalModel = {
    configs: {
      modalWidth: '${this.mdsModalModelConfig.configs.modalWidth}',
      scrollInTheModal: ${this.mdsModalModelConfig.configs.scrollInTheModal},
      marginVertical: ${this.mdsModalModelConfig.configs.marginVertical},
      borderRadius: ${this.mdsModalModelConfig.configs.borderRadius},
      hideCloseButton: ${this.mdsModalModelConfig.configs.hideCloseButton},
      disableCloseBackdrop: ${this.mdsModalModelConfig.configs.disableCloseBackdrop}
    }
  }
  
  constructor(public mdsModalService: MdsModalService) {}

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }`
    this.componentCode = constructComponentCode(importMdsUi, valuesComponent)
  }
  
  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }
  
}
