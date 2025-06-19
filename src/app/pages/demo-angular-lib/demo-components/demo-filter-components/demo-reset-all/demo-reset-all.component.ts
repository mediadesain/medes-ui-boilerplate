import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsFilterModel, MdsFilterResetComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService}
//*-public-mode-*/  from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';
import { FilterModelCode } from '../demo-filter-data-model-code';

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
  showFullInterfaceCode = false;
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {attribute: 'model', type: 'MdsFilterModel', default: '∞', description: 'Custom configuration of the component itself', version: 'medes-ui@1.18.0  > Latest version'},
    {attribute: 'customClass?', type: 'string', default: '∞', description: 'Classes list for component itself', version: 'medes-ui@1.18.0  > Latest version'}
  ]
  tableContentDeprecated = [
    {attribute: 'filterSelected?', type: 'SelectedFilterInterface', default: '∞', description: 'Filter data selected', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'filterRangeSelected?', type: 'SelectedFilterSliderInterface', default: '∞', description: 'Filter range data selected', version: 'medes-ui@1.14.3 > medes-ui@1.17.1'},
    {attribute: 'class?', type: 'String', default: '∞', description: 'Classes list for button', version: 'medes-ui@1.13.0 > medes-ui@1.17.1'},
    {attribute: 'content?', type: 'String', default: `'Reset Filter'`, description: 'Label content for reset button', version: 'medes-ui@1.14.1 > medes-ui@1.17.1'}
  ];
  
  constructor(public mdsModalService: MdsModalService) {
    this.mdsFilterModel = {
      configs: {}
    }
    this.interfaceCode = FilterModelCode.geModel('swatchBox');
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  expandCollapseModel(): void {
    if (this.showFullInterfaceCode) {
      this.interfaceCode = FilterModelCode.geModel('swatchBox');
      this.showFullInterfaceCode = false;
    } else {
      this.interfaceCode = FilterModelCode.geModel('all');
      this.showFullInterfaceCode = true;
    }
  }
  
htmlCode = `
<!-- Reset Filter Component -->
<mds-filter-reset customClass="btn-swatch-a" [(model)]="mdsFilterModel">Reset All</mds-filter-reset>`;


}
