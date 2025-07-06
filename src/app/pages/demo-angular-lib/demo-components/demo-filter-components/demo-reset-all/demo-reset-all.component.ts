import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsFilterModelCode } from '../demo-filter-data-model-code';
import { constructAngularCode, constructReactCode } from 'src/app/shared/utils/code-preview-generator';
import { LibraryTypeService } from 'src/app/shared/services/library-type.service';
import { MdsFilterModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsFilterResetComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService}
/*-public-*/ from '@mediadesain/angular';
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
  jsxComponentCode: string;
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {docType: 'angular', attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom configuration parameter', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'customClass?', type: 'string', default: '∞', description: 'Classes list for component itself', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom configuration parameter', version: '@mediadesain/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'modelChange', type: '(value: MdsFilterModel) => void', default: '∞', description: 'Get update model configuration & data output', version: '@mediadesain/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'customClass?', type: 'string', default: '∞', description: 'Classes list for component itself', version: '@mediadesain/react@2.0.0 > Latest version'}
  ]
  tableContentDeprecated = [];
  
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
    // Angular Code
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
    this.componentCode = constructAngularCode(importMdsCore, importMdsAngular, imports, '', valuesComponent);

    // React Code
    const importMdsCoreReact = 'MdsFilterModel';
    const importMdsReact = 'MdsFilterCheckbox';
    const valuesReactComponent = `// data
  const [mdsFilterModel, setMdsFilterModel] = React.useState<MdsFilterModel>()
    
  return (
    <>
      {/*-- XXX Component --*/}
      <comp></comp>
    </>
  );`;
    // this.jsxComponentCode = constructReactCode(importMdsCoreReact, importMdsReact, valuesReactComponent);
    this.jsxComponentCode = `
{/*-- Reset Filter Component --*/}
<MdsFilterReset customClass='btn-swatch-a x-100' model={mdsFilterModel} modelChange={ (model) => setMdsFilterModel(model)}>
    <>Reset All</>
</MdsFilterReset>`;
  }
  
htmlCode = `
<!-- Reset Filter Component -->
<mds-filter-reset customClass="btn-swatch-a" [(model)]="mdsFilterModel">Reset All</mds-filter-reset>`;


}