import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';
import { FormsModule } from '@angular/forms';
import { MdsFormModelCode } from '../demo-filter-data-model-code';
import { LibraryTypeService } from 'src/app/shared/library-type.service';
import { MdsFormModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule, MdsModalService, MdsModalModule, MdsFormModule }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';


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
    {docType: 'angular', attribute: 'value', type: 'boolean', default: '∞', description: 'Value of component itself', version: 'medes-ui@1.15.3 > Latest version'},
    {docType: 'angular', attribute: 'model?',type: 'MdsFormModel', default: '∞', description: 'Custom configuration of the component itself', version: 'medes-ui@1.15.3 > Latest version'},
    {docType: 'angular', attribute: 'customClass?', type: 'string', default: '∞', description: 'Put classes to for styling component', version: 'medes-ui@1.15.3 > Latest version'},
    {docType: 'angular', attribute: 'placeholder?', type: 'string', default: '0', description: 'Placeholder for field itself', version: 'medes-ui@1.15.3 > Latest version'},
    {docType: 'angular', attribute: 'disabled?', type: 'boolean', default: 'false', description: 'Make it disabled. Or make it disabled by parsing custom config', version: 'medes-ui@1.15.3 > Latest version'}
  ]

  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService) {
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
    this.reGenerateCode(); 
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

  reGenerateCode(): void {
    const importMdsCore = 'MdsFormModel';
    const importMdsAngular = 'MdsFormModule';
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
    this.componentCode = constructComponentCode(importMdsCore, importMdsAngular, imports, '', valuesComponent)
  }

  htmlCode = `
<!-- Medes Input Component -->
<mds-input-number [customClass]="myClass" [(value)]="price" [model]="mdsFormModel"></mds-input-number>
<p>Value: {{price}}</p>`;
}
