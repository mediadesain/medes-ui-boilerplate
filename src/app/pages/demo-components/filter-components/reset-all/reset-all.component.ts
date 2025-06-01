import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
/*-- Import medes-ui --*/ import { MdsFilterResetComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService } from 'medes-ui';
/*-- Import medes-ui --*/ import { SelectedFilterInterface, SelectedFilterSliderInterface } from 'medes-ui/lib/mds-filter/mds-filter.interface';
// /*-- Medes Team Only --*/ import { SelectedFilterInterface, SelectedFilterSliderInterface } from 'projects/medes-ui/src/lib/mds-filter/mds-filter.interface';
// /*-- Medes Team Only --*/ import { MdsFilterResetComponent, MdsHightlightPrismModule, MdsModalModule, MdsModalService } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-reset-all',
  templateUrl: './reset-all.component.html',
  styleUrls: ['./reset-all.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsModalModule, MdsFilterResetComponent]
})
export class ResetAllComponent {
  filterSelected: SelectedFilterInterface = {};
  filterRangeSelected: SelectedFilterSliderInterface = {
    min: 0,
    max: 2500,
    start: 100,
    end: 2000
  }

componentdemo = `
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

  tableDescription = [
    {attribute: 'filterSelected?', type: 'SelectedFilterInterface', default: '∞', description: 'Filter data selected', version: 'medes-ui@1.13.0 >'},
    {attribute: 'filterRangeSelected?', type: 'SelectedFilterSliderInterface', default: '∞', description: 'Filter range data selected', version: 'medes-ui@1.14.3 >'},
    {attribute: 'class?', type: 'String', default: '∞', description: 'Classes list for button', version: 'medes-ui@1.13.0 >'},
    {attribute: 'content?', type: 'String', default: `'Reset Filter'`, description: 'Label content for reset button', version: 'medes-ui@1.14.1 >'}
  ]

  constructor(private mdsModalService: MdsModalService) {}

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
