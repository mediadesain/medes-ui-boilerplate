import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterModelCode } from '../demo-filter-data-model-code';
import { constructAngularCode } from 'src/app/shared/utils/code-preview-generator';
import { LibraryTypeService } from 'src/app/shared/library-type.service';
import { MdsFilterModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsFilterSwatchComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

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
    {docType: 'angular', attribute: 'id', type: 'string', default: '∞', description: 'Id is required for identify which config will use', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'data', type: 'Array<any>', default: '∞', description: 'Sample data for create multiple filter checkbox', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom configuration of the component itself', version: '@mediadesain/angular@2.0.0 > Latest version'}
  ]
  tableContentDeprecated = [];

  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService){
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
    
    this.reGenerateCode(); 
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

  reGenerateCode(): void {
    const importMdsCore = 'MdsFilterModel';
    const importMdsAngular = 'MdsFilterModule';
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
    this.componentCode = constructAngularCode(importMdsCore, importMdsAngular, imports, '', valuesComponent)
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
