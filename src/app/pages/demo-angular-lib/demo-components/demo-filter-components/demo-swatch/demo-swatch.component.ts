import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterModelCode } from '../demo-filter-data-model-code';
import { MdsFilterModel, MdsFilterSwatchComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';

@Component({
  selector: 'mds-demo-swatch',
  templateUrl: './demo-swatch.component.html',
  styleUrls: ['./demo-swatch.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsFilterSwatchComponent]
})
export class DemoSwatchComponent {
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
    {attribute: 'filterData', type: 'Array<any>', default: '∞', description: 'Sample data for create swatch filter', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'filterBy', type: 'string', default: '∞', description: 'Key/properties to filter', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'filterSelected', type: 'SelectedFilterInterface', default: '∞', description: 'List of selected filter', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'swatchMapping', type: 'Object of key values', default: '∞', description: 'Listing of key/prop and color hex value', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'titlegroup?', type: 'string', default: 'Color', description: 'Label text of swatch filter group', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'swatchSize?', type: 'number', default: '30', description: 'Size of weight & height', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'swatchRadius?', type: 'number', default: '0', description: 'Border radius size', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'}
  ];

  constructor(public mdsModalService: MdsModalService){
    // data
    this.sampledata = SampleProductsData.data;
    // model
    this.mdsFilterModel = {
      configs: {
        swatchBox: {
          color: {
            property: 'color',
            label: 'Filter by Color',
            colorMap: {
              'blue-sky': '#66ccdd',
              'maroon': '#bb6a66',
              'brown': '#6b6a6b',
              'black': '#000000',
              'purple': '#6a66bb',
              'gold': '#b6ab66'
            },
            swatchSize: 30,
            swatchRadius: 5
          }
        }
      }
    }
    
    this.componentCode = this.reGenerateCode();
    this.interfaceCode = MdsFilterModelCode.geModel('swatchBox');
  }
  
  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  expandCollapseModel(): void {
    if (this.showFullInterfaceCode) {
      this.interfaceCode = MdsFilterModelCode.geModel('swatchBox');
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
      swatchBox: {
        color: { // Filter component id
          property: 'color', // property on ProductDataModel Object
          label: 'Filter by Color',
          colorMap: {
            'blue-sky': '#66ccdd',
            'maroon': '#bb6a66',
            'brown': '#6b6a6b',
            'black': '#000000',
            'purple': '#6a66bb',
            'gold': '#b6ab66'
          },
          swatchSize: 30,
          swatchRadius: 5
        }
      }
    }
  }`
    return constructComponentCode(importMdsUi, imports, '', valuesComponent)
  }

  updateProp(prop: string): void {
    const newModel = Object.assign({}, this.mdsFilterModel);
    this.mdsFilterModel = null;
    newModel.configs.swatchBox.color.property = prop;
    this.mdsFilterModel = newModel;
  }

htmlCode = `
<!-- Filter Swatch Component -->
<mds-filter-swatch id="color" [data]="sampledata" [model]="mdsFilterModel"></mds-filter-swatch>`;

}
