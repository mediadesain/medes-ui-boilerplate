import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';
import { MdsFormModelCode } from '../demo-filter-data-model-code';
import { MdsFormModel }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule, MdsModalService, MdsModalModule, MdsFormModule }
//*-public-mode-*/ from 'medes-ui-angular';
/*-dev-mode-*/ from 'projects/medes-ui-angular/src/public-api';


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
    {attribute: 'value', type: 'boolean', default: '∞', description: 'Value of component itself', version: 'medes-ui@1.15.3 > Latest version'},
    {attribute: 'model?',type: 'MdsFormModel', default: '∞', description: 'Custom configuration of the component itself', version: 'medes-ui@1.15.3 > Latest version'},
    {attribute: 'disabled?', type: 'boolean', default: 'false', description: 'Make it disabled. Or make it disabled by parsing custom config', version: 'medes-ui@1.15.3 > Latest version'}
  ]

  constructor(public mdsModalService: MdsModalService) {
    // value
    this.isActive = true;
    // model
    this.mdsFormModel = {
      configs: {
        mdsToggle: {
          type: 'clasic',
          color: 'swatch-a',
          // isDisabled: true
        }
      }
    }
    this.componentCode = this.reGenerateCode();
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

  reGenerateCode(): string {
    const importMdsUi = 'MdsFormModule, MdsFormModel';
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
    return constructComponentCode(importMdsUi, imports, '', valuesComponent)
  }

htmlCode = `
<!-- Medes Toggle Component -->
<mds-toggle-button [(value)]="isActive" [model]="mdsFormModel"></mds-toggle-button>
<p>Value: {{isActive}}</p>`;

}
