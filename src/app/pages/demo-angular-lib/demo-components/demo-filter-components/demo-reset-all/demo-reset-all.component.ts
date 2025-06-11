import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsFilterResetComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService, SelectedFilterInterface, SelectedFilterSliderInterface }
/*-public-mode-*/  from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-reset-all',
  templateUrl: './demo-reset-all.component.html',
  styleUrls: ['./demo-reset-all.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsModalModule, MdsFilterResetComponent],
  providers: [MdsModalService]
})
export class DemoResetAllComponent {
  filterSelected: SelectedFilterInterface = {};
  filterRangeSelected: SelectedFilterSliderInterface = {
    min: 0,
    max: 2500,
    start: 100,
    end: 2000
  }

htmlCode = `
<!-- Reset Filter Component -->
<mds-filter-reset [class]="'btn btn-primary'"
  [content]="'Reset All'"
  [(filterSelected)]="filterSelected"
  [(filterRangeSelected)]="filterRangeSelected"
></mds-filter-reset>`;

selectedFilterInterface: string = `
export interface SelectedFilterInterface {
    [key: string]: string[];
}`;

selectedFilterSliderInterface: string = `
export interface SelectedFilterSliderInterface {
    start: number;
    end: number
    min?: number;
    max?: number;
}`;

  tableContent = [
    {attribute: 'filterSelected?', type: 'SelectedFilterInterface', default: '∞', description: 'Filter data selected', version: 'medes-ui@1.13.0 >'},
    {attribute: 'filterRangeSelected?', type: 'SelectedFilterSliderInterface', default: '∞', description: 'Filter range data selected', version: 'medes-ui@1.14.3 >'},
    {attribute: 'class?', type: 'String', default: '∞', description: 'Classes list for button', version: 'medes-ui@1.13.0 >'},
    {attribute: 'content?', type: 'String', default: `'Reset Filter'`, description: 'Label content for reset button', version: 'medes-ui@1.14.1 >'}
  ]

  constructor(public mdsModalService: MdsModalService) {}

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
