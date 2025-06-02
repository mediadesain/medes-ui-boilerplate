import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SampleProductsData } from 'src/app/shared/constant/products';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule, MdsFilterModule } from 'medes-ui';
/*-- Import medes-ui --*/ import { SelectedFilterSliderInterface } from 'medes-ui/lib/mds-filter/mds-filter.interface';
// /*-- Medes Team Only --*/ import { MdsFilterModule, MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';
// /*-- Medes Team Only --*/ import { SelectedFilterSliderInterface } from 'projects/medes-ui/src/lib/mds-filter/mds-filter.interface';

@Component({
  selector: 'mds-filter-components',
  templateUrl: './filter-components.component.html',
  styleUrls: ['./filter-components.component.scss'],
  standalone: true,
  imports: [RouterModule, JsonPipe, MdsHightlightPrismModule, MdsFilterModule]
})
export class FilterComponentsComponent implements OnInit {
  sampledata = [];
  selected = {};
  colormap = {
      'blue-sky': '#66ccdd',
      maroon: '#bb6a66',
      brown: '#6b6a6b',
      black: '#000000',
      purple: '#6a66bb',
      gold: '#b6ab66'
  };
  filterRangeSelected: SelectedFilterSliderInterface = {
    min: 20,
    max: 120,
    start: 25,
    end: 50
  };

checkboxComponent = `
<!-- Filter Checkboxes Component - Multiple Group -->
<mds-filter-checkbox
  [titlegroup]="'Filter by Category'"
  [filterData]="sampledata"
  [filterBy]="'category'"
  [filterSelected]="selected"
  [reset]="'✕'"
  [hideCounter]="false"
></mds-filter-checkbox>`;

swatchComponent = `
<!-- Filter Swatch Component -->
<mds-filter-swatch
  [titlegroup]="'Filter by Color'"
  [filterData]="sampledata"
  [filterBy]="'color'"
  [filterSelected]="selected"
  [swatchMapping]="colormap"
  [swatchSize]="30"
  [swatchRadius]="25"
></mds-filter-swatch>`;

rangeSliderComponent = `
<!-- Demo Filter Range Slider Component -->
<mds-filter-range-slider
  [label]="'Filter by something'"
  [min]="20"
  [max]="100"
  [(start)]="25"
  [(end)]="40"
  [disabled]="false"
></mds-filter-range-slider>`;

resetComponent = `
<!-- Reset Filter Component -->
<mds-filter-reset
  [content]="'Reset All'"
  [(filterSelected)]="selected"
  [(filterRangeSelected)]="filterRangeSelected">
</mds-filter-reset>`;

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
