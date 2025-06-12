import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { constructComponentCode, constructImportModuleCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode, interfaceCode } from './input-number-preview-code';
import { MdsHightlightPrismModule, MdsModalService, MdsModalModule, MdsFormModule, MdsFormModel }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'mds-demo-input-number',
  templateUrl: './demo-input-number.component.html',
  styleUrls: ['./demo-input-number.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsFormModule]
})
export class DemoInputNumberComponent {
  
  // value
  price: number = 23750000.64646;
  // customClass
  myClass: string = '';
  // model
  mdsFormModel: MdsFormModel = {
    configs: {
      mdsInputNumber: {
        totalDecimal: 2
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
    {attribute: 'customClass?', type: 'string', default: '∞', description: 'Put classes to for styling component', version: 'medes-ui@1.15.3 >'},
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
    const importMdsUi = 'MdsFormModel';
    const valuesComponent = `// value
  isActive: boolean = true;
  // customClass
  myClass: string = ${this.myClass ? `'${this.myClass}'` : `''`};
  // model
  mdsFormModel: MdsFormModel = {
    configs: {
      mdsToggle: {
        ${this.mdsFormModel.configs.mdsInputNumber.totalDecimal ? `totalDecimal: ${this.mdsFormModel.configs.mdsInputNumber.totalDecimal}` : ''}${this.mdsFormModel.configs.mdsInputNumber.isDisabled ? `,\n        isDisabled: ${this.mdsFormModel.configs.mdsInputNumber.isDisabled}`:''} 
      }
    }
  }`
    return constructComponentCode(importMdsUi, valuesComponent)
  }
  
  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
