import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';
import { MdsFormModelCode } from '../demo-filter-data-model-code';
import { LibraryTypeService } from 'src/app/shared/library-type.service';
import { MdsFormModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule, MdsModalService, MdsModalModule, MdsFormModule }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';


@Component({
  selector: 'mds-demo-toggle-button',
  templateUrl: './demo-toggle-button.component.html',
  styleUrls: ['./demo-toggle-button.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsFormModule]
})
export class DemoToggleButtonComponent {
  // value
  isActive: boolean;
  // model
  mdsFormModel: MdsFormModel;

  // Code Viewer
  showFullInterfaceCode = false;
  componentCode: string;
  interfaceCode: string;

  // Properties Detail
  tableContent = [
    {docType: 'angular', attribute: 'value', type: 'boolean', default: '∞', description: 'Value of component itself', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'model?', type: 'MdsFormModel', default: '∞', description: 'Custom configuration of the component itself', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'disabled?', type: 'boolean', default: 'false', description: 'Make it disabled. Or make it disabled by parsing custom config', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'value', type: 'boolean', default: '∞', description: 'Value of component itself', version: '@mediadesain/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'valueChange', type: '(value: boolean) => void', default: '∞', description: 'Value of component itself', version: '@mediadesain/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'model?', type: 'MdsFormModel', default: '∞', description: 'Custom configuration of the component itself', version: '@mediadesain/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'disabled?', type: 'boolean', default: 'false', description: 'Make it disabled. Or make it disabled by parsing custom config', version: '@mediadesain/react@2.0.0 > Latest version'}
  ]

  libraryType: string;
  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService) {
    // value
    this.isActive = true;
    // model
    this.mdsFormModel = {
      configs: {
        mdsToggle: {
          type: 'modern',
          color: 'swatch-a',
          // isDisabled: true
        }
      }
    }
    this.reGenerateCode();
    this.interfaceCode = MdsFormModelCode.geModel('mdsToggle');
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }
    
  expandCollapseModel(): void {
    if (this.showFullInterfaceCode) {
      this.interfaceCode = MdsFormModelCode.geModel('mdsToggle');
      this.showFullInterfaceCode = false;
    } else {
      this.interfaceCode = MdsFormModelCode.geModel('all');
      this.showFullInterfaceCode = true;
    }
  }

  reGenerateCode(): void {
    const importMdsCore = 'MdsFormModel';
    const importMdsAngular = 'MdsFormModule';
    const imports = 'MdsFormModule';
    const valuesComponent = `// value
  isActive: boolean = true;
  // model
  mdsFormModel: MdsFormModel = {
    configs: {
      mdsToggle: {
        type: '${this.mdsFormModel.configs.mdsToggle.type}'${this.mdsFormModel.configs.mdsToggle.color ? `,\n        color: '${this.mdsFormModel.configs.mdsToggle.color}'`: ''}${this.mdsFormModel.configs.mdsToggle.isDisabled ? `,\n        isDisabled: ${this.mdsFormModel.configs.mdsToggle.isDisabled}`: ''}
      }
    }
  }`
    this.componentCode = constructComponentCode(importMdsCore, importMdsAngular, imports, '', valuesComponent)
  }

htmlCode = `
<!-- Medes Toggle Component -->
<mds-toggle-button [(value)]="isActive" [model]="mdsFormModel"></mds-toggle-button>
<p>Value: {{isActive}}</p>`;
jsxComponentCode = `
import React from 'react';
import { MdsModalModel } from '@mediadesain/core';
import { MdsToggleButtonComponent } from '@mediadesain/react';

function MdsApp() {
  // value
  const [isActive, setIsActive] = React.useState<boolean>(true);
  // model
  const mdsToggleProp: MdsFormModel = {
    configs: {
      mdsToggle: {
        type: 'modern',
        color: 'swatch-a',
        isDisabled: false
      }
    }
  }

  return (
    <>
      {/* Medes Toggle Component */}
      <MdsToggleButtonComponent value={isActive} valueChange={(value: boolean) => setIsActive(value)} model={mdsTogleProp}></MdsToggleButtonComponent>
      <p>Value: {{isActive}}</p>
    </>
  );
}
export default Example;`;

}
