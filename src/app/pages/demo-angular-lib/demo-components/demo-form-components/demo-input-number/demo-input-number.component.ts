import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';
import { MdsHightlightPrismModule, MdsModalService, MdsModalModule, MdsFormModule, MdsFormModel }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';
import { FormsModule } from '@angular/forms';
import { MdsFormModelCode } from '../demo-filter-data-model-code';


@Component({
  selector: 'mds-demo-input-number',
  templateUrl: './demo-input-number.component.html',
  styleUrls: ['./demo-input-number.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsFormModule]
})
export class DemoInputNumberComponent {
  
  // value
  price: number;
  // customClass
  myClass: string;
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
    {attribute: 'customClass?', type: 'string', default: '∞', description: 'Put classes to for styling component', version: 'medes-ui@1.15.3 > Latest version'},
    {attribute: 'placeholder?', type: 'string', default: '0', description: 'Placeholder for field itself', version: 'medes-ui@1.15.3 > Latest version'},
    {attribute: 'disabled?', type: 'boolean', default: 'false', description: 'Make it disabled. Or make it disabled by parsing custom config', version: 'medes-ui@1.15.3 > Latest version'}
  ]

  constructor(public mdsModalService: MdsModalService) {
    this.price = 23750000.64646;
    this.myClass = '';
    this.mdsFormModel = {
      configs: {
        mdsInputNumber: {
          totalDecimal: 2
          // isDisabled: true
        }
      }
    }
    this.componentCode = this.reGenerateCode();
    this.interfaceCode = MdsFormModelCode.geModel('mdsInputNumber');
  }

  expandCollapseModel(): void {
    if (this.showFullInterfaceCode) {
      this.interfaceCode = MdsFormModelCode.geModel('mdsInputNumber');
      this.showFullInterfaceCode = false;
    } else {
      this.interfaceCode = MdsFormModelCode.geModel('all');
      this.showFullInterfaceCode = true;
    }
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  reGenerateCode(): string {
    const importMdsUi = 'MdsFormModule, MdsFormModel';
    const imports = 'MdsFormModule';
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
    return constructComponentCode(importMdsUi, imports, '', valuesComponent)
  }

  htmlCode = `
<!-- Medes Input Component -->
<mds-input-number [customClass]="myClass" [(value)]="price" [model]="mdsFormModel"></mds-input-number>
<p>Value: {{price}}</p>`;
}
