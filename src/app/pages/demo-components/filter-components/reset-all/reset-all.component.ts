import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsFilterResetComponent, MdsHightlightPrismModule } from 'medes-ui';
import { SelectedFilterInterface, SelectedFilterSliderInterface } from 'medes-ui/lib/mds-filter/mds-filter.interface';

@Component({
  selector: 'mds-reset-all',
  templateUrl: './reset-all.component.html',
  styleUrls: ['./reset-all.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsFilterResetComponent]
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

}
