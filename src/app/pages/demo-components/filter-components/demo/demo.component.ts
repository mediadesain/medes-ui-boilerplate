import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';

// import { selectedFilterSliderModelInterface, SelectedFilterInterface } from 'medes-ui/lib/mds-filter/mds-filter.interface';
// import { MdsFilterCheckboxComponent, MdsFilterPipe, MdsFilterResetComponent, MdsFilterSwatchComponent, MdsHightlightPrismModule, MdsNumberUtils, MdsSearchPipe } from 'medes-ui';

import { MdsFilterRangeSliderComponent } from 'projects/medes-ui/src/lib/mds-filter/filter-range-slider/filter-range-slider.component';
import { SelectedFilterInterface, SelectedFilterSliderInterface } from 'projects/medes-ui/src/lib/mds-filter/mds-filter.interface';
import { MdsFilterRangePipe } from 'projects/medes-ui/src/lib/mds-pipes-module/mds-filter-range.pipe';
import { MdsFilterCheckboxComponent, MdsFilterPipe, MdsFilterResetComponent, MdsFilterSwatchComponent, MdsHightlightPrismModule, MdsNumberUtils, MdsSearchPipe } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsFilterCheckboxComponent, MdsFilterSwatchComponent, MdsFilterResetComponent, MdsFilterPipe, MdsSearchPipe, MdsFilterRangeSliderComponent, MdsFilterRangePipe]
})
export class DemoComponent implements OnInit, AfterViewInit {
  sampledata: ProductDataModel[] = [];
  colormap = {
      'blue-sky': '#66ccdd',
      'maroon': '#bb6a66',
      'brown': '#6b6a6b',
      'black': '#000000',
      'purple': '#6a66bb',
      'gold': '#b6ab66'
  };
  
  filterSelected: SelectedFilterInterface = {};
  filterRangeSelected: SelectedFilterSliderInterface;

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    const getMinMaxFromData = MdsNumberUtils.getMinMax(SampleProductsData.data.map(item => item.price)); // utils to get min max
    this.filterRangeSelected = {
      min: 0,
      max: 2500,
      start: getMinMaxFromData.min,
      end: getMinMaxFromData.max
    }
    this.sampledata = SampleProductsData.data;
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
