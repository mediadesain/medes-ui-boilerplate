import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterModelCode } from '../demo-filter-data-model-code';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';
import { MdsFilterCheckboxComponent, MdsFilterModel, MdsHightlightPrismModule, MdsModalModule, MdsModalService }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-checkboxes',
  templateUrl: './demo-checkboxes.component.html',
  styleUrls: ['./demo-checkboxes.component.scss'],
  standalone: true,
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
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {attribute: 'id', type: 'string', default: '∞', description: 'Id is required for identify which config will use', version: 'medes-ui@1.18.0 > Latest version'},
    {attribute: 'data', type: 'Array<any>', default: '∞', description: 'Sample data for create multiple filter checkbox', version: 'medes-ui@1.18.0 > Latest version'},
    {attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom configuration of the component itself', version: 'medes-ui@1.18.0 > Latest version'}
  ]
  tableContentDeprecated = [
    {attribute: 'filterData', type: 'Array<any>', default: '∞', description: 'Sample data for create multiple filter checkbox. On newer renamed to data', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'filterBy', type: 'string', default: '∞', description: 'Newer version only support string value, value is property/key', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'},
    {attribute: 'filterSelected', type: 'Object', default: '∞', description: 'List of selected filter', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'titlegroup?', type: 'string', default: 'Filter by', description: 'Prefix of label text of group', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'reset?', type: 'string', default: '✕', description: 'Content of reset group filter, html readeable.', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'hideCounter?', type: 'boolean', default: 'false', description: 'Show/hide counter item. Or delete the attribute by default will showing', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'}
  ];


  constructor(public mdsModalService: MdsModalService){
    // Sample Data
    this.sampledata = SampleProductsData.data;
    // Filter Model
    this.mdsFilterModel = {
      configs: {
        checkBox: {
          'by-category' : {
            property: 'category',
            label: 'Filter by Categories'
          },
        }
      }
    }
    this.componentCode = this.reGenerateCode();
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
  
  reGenerateCode(): string {
    const importMdsUi = 'MdsFilterModule, MdsFilterModel';
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
    return constructComponentCode(importMdsUi, imports, '', valuesComponent)
  }

  updateProp(prop: string): void {
    const newModel = Object.assign({}, this.mdsFilterModel);
    this.mdsFilterModel = null;
    newModel.configs.checkBox['by-category'].property = prop;
    this.mdsFilterModel = newModel;
  }

htmlCode = `
<!-- Filter Checkboxes Component -->
<mds-filter-checkbox id="by-category" [data]="sampledata" [model]="mdsFilterModel"></mds-filter-checkbox>`;

}
