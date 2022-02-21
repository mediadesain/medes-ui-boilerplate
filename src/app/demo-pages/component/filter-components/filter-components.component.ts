import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/proucts';

@Component({
  selector: 'medes-filter-components',
  templateUrl: './filter-components.component.html',
  styleUrls: ['./filter-components.component.scss']
})
export class FilterComponentsComponent implements OnInit {
  selected = {};
  sampledata = [];
  colormap = {
      'blue-sky': '#66ccdd',
      maroon: '#bb6a66',
      brown: '#6b6a6b',
      black: '#000000',
      purple: '#6a66bb',
      gold: '#b6ab66'
  }

components = `<!-- Filter Checkboxes Component - Multiple Group -->
<mds-filter-checkbox
  [titlegroup]="'Filter by'"
  [filterData]="sampledata"
  [filterBy]="['gender','category']"
  [filterSelected]="selected"
  [reset]="'✕'"
  [hideCounter]="false"
></mds-filter-checkbox>

<!-- Filter Swatch Component - Multiple Group -->
<mds-filter-swatch
  [titlegroup]="'Filter by Color'"
  [filterData]="sampledata"
  [filterSelected]="selected"
  [swatchMapping]="colormap"
></mds-filter-swatch>
<!-- Filter Checkboxes Component - Single Group -->
<mds-filter-checkbox
  [filterData]="sampledata"
  [filterBy]="['brand']"
  [filterSelected]="selected"
  [hideCounter]="false"
></mds-filter-checkbox>

<!-- Reset Filter Component -->
<mds-filter-reset [content]="'Reset All'" [(filterSelected)]="selected"></mds-filter-reset>`;
importmodule = `import { MdsFilterModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsFilterModule
  ]
})`;

  constructor() { }

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
