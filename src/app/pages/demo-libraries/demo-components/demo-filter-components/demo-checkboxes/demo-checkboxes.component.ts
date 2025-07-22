import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterModelCode } from '../demo-filter-data-model-code';
import { constructAngularCode, constructReactCode } from 'src/app/shared/utils/code-preview-generator';
import { LibraryTypeService } from 'src/app/shared/services/library-type.service';
import { MdsFilterModel }
/*-private-*/ from '@medes-ui/core';
//*-public-*/ from 'projects/medes-ui/src/public-api';
import { MdsFilterCheckboxComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService }
/*-private-*/ from '@medes-ui/angular';
//*-public-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
    selector: 'mds-demo-checkboxes',
    templateUrl: './demo-checkboxes.component.html',
    styleUrls: ['./demo-checkboxes.component.scss'],
    imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsFilterCheckboxComponent]
})

export class DemoCheckboxesComponent {
  // data
  sampledata: ProductDataModel[];
  // model
  mdsFilterModel: MdsFilterModel;
  
  // Code Viewer
  showFullInterfaceCode = false;
  componentCode: string;
  jsxComponentCode: string;
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {docType: 'angular', attribute: 'id', type: 'string', default: '∞', description: 'Id is required for identify which config will use', version: '@medes-ui/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'data', type: 'Array<any>', default: '∞', description: 'Sample data for create multiple filter checkbox', version: '@medes-ui/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom model configuration parameter', version: '@medes-ui/angular@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'id', type: 'string', default: '∞', description: 'Id is required for identify which config will use', version: '@medes-ui/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'data', type: 'Array<any>', default: '∞', description: 'Sample data for create multiple filter checkbox', version: '@medes-ui/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom model configuration parameter', version: '@medes-ui/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'modelChange', type: '(value: MdsFilterModel) => void', default: '∞', description: 'Get update model configuration & data output', version: '@medes-ui/react@2.0.0 > Latest version'}
  ]
  tableContentDeprecated = [];


  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService){
    // Sample Data
    this.sampledata = SampleProductsData.data;
    // Filter Model
    this.mdsFilterModel = {
      configs: {
        checkBox: {
          'by-category' : {
            property: 'category',
            label: 'Filter by Categories',
            resetElement: '✕',
            hideCounter: false
          },
        }
      }
    }
    this.reGenerateCode(); 
    this.interfaceCode = MdsFilterModelCode.geModel('checkBox');
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  expandCollapseModel(): void {
    if (this.showFullInterfaceCode) {
      this.interfaceCode = MdsFilterModelCode.geModel('checkBox');
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
          property: '${this.mdsFilterModel.configs.checkBox['by-category'].property}', // property on ProductDataModel Object
          label: '${this.mdsFilterModel.configs.checkBox['by-category'].label}',
          resetElement: '${this.mdsFilterModel.configs.checkBox['by-category'].resetElement}', // optional
          hideCounter: ${this.mdsFilterModel.configs.checkBox['by-category'].hideCounter} // optional
        },
      }
    }
  }`
    this.componentCode = constructAngularCode(importMdsCore, importMdsAngular, imports, '', valuesComponent)

    // React Code
    const importMdsCoreReact = 'MdsFilterModel';
    const importMdsReact = 'MdsFilterCheckbox';
    const valuesReactComponent = `// data
  sampledata: ProductDataModel[] = SampleProductsData.data;
  // model
  const [mdsFilterModel, setMdsFilterModel] = React.useState<MdsFilterModel>({
    configs: {
      checkBox: {
        'by-category' : { // Filter component id
          property: '${this.mdsFilterModel.configs.checkBox['by-category'].property}', // property on ProductDataModel Object
          label: '${this.mdsFilterModel.configs.checkBox['by-category'].label}',
          resetElement: '${this.mdsFilterModel.configs.checkBox['by-category'].resetElement}', // optional
          hideCounter: ${this.mdsFilterModel.configs.checkBox['by-category'].hideCounter} // optional
        },
      }
    }
  })
    
  return (
    <>
      {/*-- Filter Checkboxes Component --*/}
      <MdsFilterCheckbox id="by-category" data={sampledata} model={mdsFilterModel} modelChange={ (model) => setMdsFilterModel(model)}></MdsFilterCheckbox>
    </>
  );`;
    this.jsxComponentCode = constructReactCode(importMdsCoreReact, importMdsReact, valuesReactComponent);
  }

  updateProp(prop: string): void {
    const newModel = Object.assign({}, this.mdsFilterModel);
    this.mdsFilterModel = null;
    newModel.configs.checkBox['by-category'].property = prop;
    this.mdsFilterModel = newModel;
    this.reGenerateCode()
  }

htmlCode = `
<!-- Filter Checkboxes Component -->
<mds-filter-checkbox id="by-category" [data]="sampledata" [model]="mdsFilterModel"></mds-filter-checkbox>`;

}
