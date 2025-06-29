import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsFilterModelCode } from '../demo-filter-data-model-code';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';
import { LibraryTypeService } from 'src/app/shared/library-type.service';
import { MdsFilterModel }
/*-public-*/  from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsFilterResetComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService}
/*-public-*/  from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-demo-reset-all',
  templateUrl: './demo-reset-all.component.html',
  styleUrls: ['./demo-reset-all.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsModalModule, MdsFilterResetComponent],
  providers: [MdsModalService]
})
export class DemoResetAllComponent {
  mdsFilterModel: MdsFilterModel;

  // Code Viewer
  showFullInterfaceCode: boolean;
  componentCode: string;
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {docType: 'angular', attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom configuration of the component itself', version: 'medes-ui@1.18.0  > Latest version'},
    {docType: 'angular', attribute: 'customClass?', type: 'string', default: '∞', description: 'Classes list for component itself', version: 'medes-ui@1.18.0  > Latest version'}
  ]
  tableContentDeprecated = [
    {docType: 'angular', attribute: 'filterSelected?', type: 'SelectedFilterInterface', default: '∞', description: 'Filter data selected', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'filterRangeSelected?', type: 'SelectedFilterSliderInterface', default: '∞', description: 'Filter range data selected', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'class?', type: 'String', default: '∞', description: 'Classes list for button', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'content?', type: 'String', default: `'Reset Filter'`, description: 'Label content for reset button', version: 'medes-ui@1.14.1 > medes-ui@1.17.1'}
  ];
  
  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService) {
    this.mdsFilterModel = {
      configs: {}
    }

    this.reGenerateCode(); 
    this.interfaceCode = MdsFilterModelCode.geModel('resetFilter');
  }
  
  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  expandCollapseModel(): void {
    if (this.showFullInterfaceCode) {
      this.interfaceCode = MdsFilterModelCode.geModel('resetFilter');
      this.showFullInterfaceCode = false;
    } else {
      this.interfaceCode = MdsFilterModelCode.geModel('all');
      this.showFullInterfaceCode = true;
    }
  }

  reGenerateCode(): void {
    const importMdsCore = 'MdsFilterModel';
    const importMdsAngular = 'MdsFilterModule';
    const imports = 'MdsFilterModule';
    const valuesComponent = `// data
  sampledata: ProductDataModel[] = SampleProductsData.data;
  // model
  mdsFilterModel: MdsFilterModel = {
    configs: {
      checkBox: {
        'by-category' : { // Filter component id
          property: 'category', // property on ProductDataModel Object
          label: 'Filter by Categories'
        },
      }
    }
  }`
    this.componentCode = constructComponentCode(importMdsCore, importMdsAngular, imports, '', valuesComponent)
  }
  
htmlCode = `
<!-- Reset Filter Component -->
<mds-filter-reset customClass="btn-swatch-a" [(model)]="mdsFilterModel">Reset All</mds-filter-reset>`;


}
