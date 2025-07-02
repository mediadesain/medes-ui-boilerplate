import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdsFilterModelCode } from '../demo-filter-data-model-code';
import { constructAngularCode } from 'src/app/shared/utils/code-preview-generator';
import { LibraryTypeService } from 'src/app/shared/services/library-type.service';
import { MdsFilterModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsFilterRangeSliderComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-demo-filter-range-slider',
  templateUrl: './demo-filter-range-slider.component.html',
  styleUrls: ['./demo-filter-range-slider.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsFilterRangeSliderComponent]
})
export class DemoFilterRangeSliderComponent {
  // model
  mdsFilterModel: MdsFilterModel;
  isDisabled: boolean;

  // Code Viewer
  showFullInterfaceCode = false;
  componentCode: string;
  jsxComponentCode: string;
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {docType: 'angular', attribute: 'id', type: 'string', default: '∞', description: 'Id is required for identify which config will use', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom configuration parameter', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'disabled?', type: 'boolean', default: 'false', description: 'For disabling filter range slider', version: '@mediadesain/angular@2.0.0 > Latest version'}
  ]
  tableContentDeprecated = [];

  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService){
    // model
    this.mdsFilterModel = {
      configs: {
        rangeSlider: {
          price: {
            label: 'Filter by Price',
            min: 0,
            max: 2500,
          }
        }
      }
    }
    this.isDisabled = false;
    this.reGenerateCode(); 
    this.interfaceCode = MdsFilterModelCode.geModel('rangeSlider');
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
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
        rangeSlider: {
          price: {
            label: 'Filter by Price',
            min: 0,
            max: 2500,
          }
        }
      }
    }`
      this.componentCode = constructAngularCode(importMdsCore, importMdsAngular, imports, '', valuesComponent)
    }

  expandCollapseModel(): void {
    if (this.showFullInterfaceCode) {
      this.interfaceCode = MdsFilterModelCode.geModel('rangeSlider');
      this.showFullInterfaceCode = false;
    } else {
      this.interfaceCode = MdsFilterModelCode.geModel('all');
      this.showFullInterfaceCode = true;
    }
  }

htmlCode = `
<!-- Filter Range Slider Component -->
<mds-filter-range-slider id="price" [model]="mdsFilterModel" [disabled]="isDisabled"></mds-filter-range-slider>
<small><i>Output: {{mdsFilterModel.data.filterRange.start}} - {{mdsFilterModel.data.filterRange.end}}</i></small>`;
}
