import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdsFilterModelCode } from '../demo-filter-data-model-code';
import { MdsFilterModel, MdsFilterRangeSliderComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';

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
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {attribute: 'id', type: 'string', default: '∞', description: 'Id is required for identify which config will use', version: 'medes-ui@1.18.0 > Latest version'},
    {attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom configuration of the component itself', version: 'medes-ui@1.18.0 > Latest version'},
    {attribute: 'disabled?', type: 'boolean', default: 'false', description: 'For disabling filter range slider', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'}
  ]
  tableContentDeprecated = [
    {attribute: 'start', type: 'number', default: '∞', description: 'Starting point of range selection. If selected start range less than min value will be set as min value', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'},
      {attribute: 'end', type: 'number', default: '∞', description: 'End point of range selection. If selected end range more than max value will be set as max value', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'},
      {attribute: 'min?', type: 'number', default: '0', description: 'Range Minimal', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'},
      {attribute: 'max?', type: 'number', default: '1000', description: 'Range Miximal', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'},
      {attribute: 'label?', type: 'string', default: '\'Filter by Range\'', description: 'Filter by range title', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'},
      {attribute: 'reset?', type: 'string', default: '✕', description: 'Content of reset group filter, html readeable.', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'}
  ];

  constructor(public mdsModalService: MdsModalService){
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
    this.componentCode = this.reGenerateCode();
    this.interfaceCode = MdsFilterModelCode.geModel('rangeSlider');
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  reGenerateCode(): string {
      const importMdsUi = 'MdsFilterModule, MdsFilterModel';
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
      return constructComponentCode(importMdsUi, imports, '', valuesComponent)
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
