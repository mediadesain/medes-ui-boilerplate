import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { constructComponentCode, constructImportModuleCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode, interfaceCode } from './toggle-preview-code';
import { MdsHightlightPrismModule, MdsModalService, MdsModalModule, MdsFormModule, MdsFormModel, MdsToggleType }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';


@Component({
  selector: 'mds-demo-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsFormModule]
})
export class DemoToggleComponent {
  // value
  isActive: boolean = true;
  // model
  mdsFormModel: MdsFormModel = {
    configs: {
      mdsToggle: {
        type: MdsToggleType.CLASIC,
        color: 'swatch-a',
        // isDisabled: true
      }
    }
  }

  // Code Viewer
  importModuleCode: string;
  componentCode: string;
  htmlCode: string;
  interfaceCode: string;

  // Properties Detail
  tableContent = [
    {attribute: 'value', type: 'boolean', default: '∞', description: 'Value of component itself', version: 'medes-ui@1.15.3 >'},
    {attribute: 'disabled?', type: 'boolean', default: 'false', description: 'Make it disabled. Or make it disabled by parsing custom config', version: 'medes-ui@1.15.3 >'},
    {attribute: 'model?',type: 'MdsFormModel', default: '∞', description: 'Custom configuration of the component itself', version: 'medes-ui@1.15.3 >'}
  ]

  constructor(public mdsModalService: MdsModalService) {
    this.importModuleCode = constructImportModuleCode('MdsFormModule');
    this.componentCode = this.reGenerateCode();
    this.htmlCode = htmlCode;
    this.interfaceCode = interfaceCode;
  }

  reGenerateCode(): string {
    const importMdsUi = 'MdsFormModel, MdsToggleType';
    const valuesComponent = `// value
  isActive: boolean = true;
  // model
  mdsFormModel: MdsFormModel = {
    configs: {
      mdsToggle: {
        type: ${this.getInterfaceType(this.mdsFormModel.configs.mdsToggle.type)}${this.mdsFormModel.configs.mdsToggle.color ? `,\n        color: '${this.mdsFormModel.configs.mdsToggle.color}'`: ''}${this.mdsFormModel.configs.mdsToggle.isDisabled ? `,\n        isDisabled: ${this.mdsFormModel.configs.mdsToggle.isDisabled}`: ''}
      }
    }
  }`
    return constructComponentCode(importMdsUi, valuesComponent)
  }

  getInterfaceType(value: string): string {
    if (value === 'modern') return 'MdsToggleType.MODERN';
    else if (value === 'clasic') return 'MdsToggleType.CLASIC';
  }
  
  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
