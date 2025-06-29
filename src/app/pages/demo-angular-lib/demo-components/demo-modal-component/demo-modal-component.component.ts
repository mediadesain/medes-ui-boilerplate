import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoModalChildComponent } from './demo-modal-child/demo-modal-child.component';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode, htmlCode2, interfaceCode } from './modal-component-preview-code';
import { FormsModule } from '@angular/forms';
import { LibraryTypeService } from 'src/app/shared/library-type.service';
import { MdsModalModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';


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
  componentCode: string;
  htmlCode: string;
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {docType: 'angular', attribute: 'id', type: 'string', default: '∞', description: 'id modal is required for identify which modal to trigger', version: 'medes-ui@1.18.0 > Latest version'},
    {docType: 'angular', attribute: 'model?', type: 'MdsModalModel', default: '∞', description: 'Modal configuratuin', version: 'medes-ui@1.18.0 > Latest version'}
  ];
  tableContentDeprecated = [
    {docType: 'angular', attribute: 'modalWidth?', type: 'string of option: <i>\'small\' | \'medium\' | \'large\' | \'fullscreen\'</i> or number', default: '\'medium\'', description: 'Width of modal by default is medium (700px) but posible with custom width. If set as \'fullscreen\' wil set height & width fullscreen', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'marginTop?', type: 'number', default: '44', description: 'Padding top modal', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'marginBottom?', type: 'number', default: '44', description: 'Padding bottom modal', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'borderRadius?', type: 'number', default: '5', description: 'Border radius size', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'hideCloseButton?', type: 'boolean', default: 'false', description: 'Visibility of close button', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'disableCloseBackdrop?', type: 'boolean', default: 'false', description: 'Disable closing modal if clicking backdrop', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
  ];

  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService) {
    this.reGenerateCode();
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  reGenerateCode(): void {
    const importMdsCore = 'MdsModalModel';
    const importMdsAngular = 'MdsModalModule, MdsModalService';
    const imports = 'MdsModalModule';
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
    this.componentCode = constructComponentCode(importMdsCore, importMdsAngular, imports, '', valuesComponent);
    this.htmlCode = this.showHeaderFooter ? htmlCode : htmlCode2;
    this.interfaceCode = interfaceCode;
  }
  
}
