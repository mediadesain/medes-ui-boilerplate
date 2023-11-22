import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsFilterRangeSliderComponent } from 'projects/medes-ui/src/lib/mds-filter/filter-range-slider/filter-range-slider.component';
import { SelectedFilterSliderInterface } from 'projects/medes-ui/src/lib/mds-filter/mds-filter.interface';

@Component({
  selector: 'mds-demo-filter-range-slider',
  templateUrl: './demo-filter-range-slider.component.html',
  styleUrls: ['./demo-filter-range-slider.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsFilterRangeSliderComponent]
})
export class DemoFilterFilterRangeSliderComponent {
  filterRangeSelected: SelectedFilterSliderInterface = {
    min: 1250,
    max: 19500,
    start: 6000,
    end: 17000
  };

  constructor() {}

}
